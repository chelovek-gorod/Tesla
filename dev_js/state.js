import { EventHub, events, updateUILevel, updateUIPoints,
    updateUIClickPanel, updateUIAutoPanel, updateUITurboPanel, updateUITurboTimeout,
    updateBuildingAuto, updateBuildingTurbo, updateTowerTurbo, setTurboCharge,
    updateTowerAuto, updateTowerClick, setAutoCharge, responseStopTurbo } from './engine/events'
import { tickerAdd } from './engine/application'

const updatePerMS = 77 // 1/13 of second
const subtractTurboPerUpdate = updatePerMS / 1000

class State {
    constructor(save = null) {
        this.points = save ? save.points : 0n
        this.addRate = 1n // x turbo in TURBO UES

        this.level = save ? save.level : 0n
        this.levelScored = save ? save.levelScored : 0n
        this.levelPrice = save ? save.levelPrice : 1000n // 1000n

        this.turboSeconds = save ? save.turboSeconds : 10
        this.turboPrice = save ? save.turboPrice : 5000n // 5000n
        this.turboTimeout = 0
        this.turboOpenBuildings = save ? save.turboOpenBuildings : 0 // MAX 2
        this.turboLightnings = save ? save.turboLightningInBuilding : 1
        this.turboDigitsUpgrade = save ? save.turboDigitsUpgrade : 3

        this.addPerClick = save ? save.addClick : 1n
        this.addPerClickNextValue = save ? save.addPerClickNextValue : 2n
        this.addPerClickPrice = save ? save.addPerClickPrice : 500n // 500n
        this.clickLightnings = save ? save.clickLightnings : 1

        this.addPerSecond = save ? save.addPerSecond : 0n
        this.addPerSecondNextValue = save ? save.addPerClickNextValue : 1n
        this.addPerSecondPrice = save ? save.addPerClickPrice : 100n // 100n
        this.autoOpenBuildings = save ? save.autoOpenBuildings : 0 // MAX 2
        this.autoLightnings = save ? save.autoLightningInBuilding : 1
        this.autoDigitsUpgrade = save ? save.autoDigitsUpgrade : 3

        EventHub.on( events.getClick, () => this.getPoints(this.addPerClick) )
        EventHub.on( events.requestUpgradeClick, this.upgradeClick.bind(this) )
        EventHub.on( events.requestUpgradeAuto, this.upgradeAuto.bind(this) )
        EventHub.on( events.requestStartTurbo, this.startTurbo.bind(this) )

        EventHub.on( events.requestAD, this.showAD.bind(this) )

        this.addPerTick = (Number(this.addPerSecond) / 1000) * updatePerMS
        this.tickReserve = 0
        this.lastTimeStamp = 0
        tickerAdd(this)
    }

    tick(time) {
        this.lastTimeStamp += time.deltaMS
        if (this.lastTimeStamp > updatePerMS) {
            this.lastTimeStamp -= updatePerMS
            
            // if auto
            if (this.addPerSecond > 0n) {
                this.tickReserve += this.addPerTick

                if (this.tickReserve > 1) {
                    const add = Math.floor(this.tickReserve)
                    this.tickReserve -= add
                    this.getPoints( BigInt(add) )
                    setAutoCharge()
                }
            }

            // if turbo
            if (this.addRate > 1n) {
                this.turboTimeout -= subtractTurboPerUpdate
                if (this.turboTimeout <= 0) {
                    this.turboTimeout = this.turboSeconds
                    this.addRate = 1n
                    responseStopTurbo()
                    updateUITurboTimeout()

                    setTimeout(this.sendUpdates, 300)
                } else {
                    updateUITurboTimeout()
                }
            }
        }
    }

    getPoints(points) {
        const addPoints = points * this.addRate

        this.points += addPoints
        
        this.levelScored += addPoints
        if (this.levelScored >= this.levelPrice) {
            this.level++
            this.levelScored -= this.levelPrice
            this.levelPrice = this.levelPrice.increase()

            if (this.addRate > 1n) this.addRate = this.level

            updateUILevel()
        }

        updateUIPoints()

        if (this.addRate > 1n) setTurboCharge()
    }

    showAD() {
        this.turboSeconds += 1
        this.turboTimeout = this.turboSeconds
        updateUITurboTimeout()
    }

    upgradeClick() {
        if (this.points < this.addPerClickPrice) return

        // UI
        this.points -= this.addPerClickPrice
        this.addPerClickPrice = this.addPerClickPrice.increase()

        this.addPerClick = this.addPerClickNextValue
        this.addPerClickNextValue = this.addPerClickNextValue.increase()

        updateUIPoints()
        updateUIClickPanel()

        // map
        const digits = (this.addPerClick.toString()).length
        const lightnings = Math.ceil(digits / 3)
        if (lightnings > this.clickLightnings) {
            this.clickLightnings = lightnings
            updateTowerClick( lightnings )
        }
    }
    
    upgradeAuto() {
        if (this.points < this.addPerSecondPrice) return

        // UI
        this.points -= this.addPerSecondPrice
        this.addPerSecondPrice = this.addPerSecondPrice.increase()

        this.addPerSecond = this.addPerSecondNextValue
        this.addPerSecondNextValue = this.addPerSecondNextValue.increase()

        this.addPerTick = (Number(this.addPerSecond) / 1000) * updatePerMS

        updateUIPoints()
        updateUIAutoPanel()

        // map
        if (this.autoOpenBuildings === 0) {
            this.autoOpenBuildings++
            updateBuildingAuto( this.autoOpenBuildings )
        } else if (this.autoOpenBuildings === 1) {
            const digits = (this.addPerSecond.toString()).length
            const lightnings = Math.ceil(digits / this.autoDigitsUpgrade)

            if (lightnings > this.autoLightnings) {
                this.autoLightnings = lightnings

                if (lightnings > 3) {
                    this.autoLightnings = 1
                    this.autoDigitsUpgrade = 6

                    this.autoOpenBuildings++
                    updateBuildingAuto( this.autoOpenBuildings )
                }

                updateTowerAuto( this.autoLightnings )
            }
        } else {
            const digits = (this.addPerSecond.toString()).length
            const lightnings = Math.ceil(digits / this.autoDigitsUpgrade)
            if (lightnings > this.autoLightnings) {
                this.autoLightnings = lightnings
                updateTowerAuto( lightnings )
            }
        }
    }
    
    startTurbo() {
        if (this.points < this.turboPrice) return responseStopTurbo()

        // UI
        this.addRate = this.level
        this.turboTimeout = this.turboSeconds

        this.points -= this.turboPrice
        this.turboPrice = this.turboPrice.increase()

        updateUIPoints()
        updateUITurboPanel()

        // map
        if (this.turboOpenBuildings === 0) {
            this.turboOpenBuildings++
            updateBuildingTurbo( this.turboOpenBuildings )
        } else if (this.turboOpenBuildings === 1) {
            const digits = (this.level.toString()).length
            const lightnings = Math.ceil(digits / this.turboDigitsUpgrade)

            if (lightnings > this.turboLightnings) {
                this.turboLightnings = lightnings

                if (lightnings > 3) {
                    this.turboLightnings = 1
                    this.turboDigitsUpgrade = 6

                    this.turboOpenBuildings++
                    updateBuildingTurbo( this.turboOpenBuildings )
                }

                updateTowerTurbo( this.turboLightnings )
            }
        } else {
            const digits = (this.level.toString()).length
            const lightnings = Math.ceil(digits / this.turboDigitsUpgrade)
            if (lightnings > this.turboLightnings) {
                this.turboLightnings = lightnings
                updateTowerTurbo( lightnings )
            }
        }
    }
}

export default State