import { EventHub, events, updateUILevel, updateUIPoints, needVoiceDoIt, showBonusUI,
    updateUIClickPanel, updateUIAutoPanel, updateUITurboPanel, updateUITurboTimeout,
    updateBuildingAuto, updateBuildingTurbo, updateTowerTurbo, setTurboCharge,
    updateTowerAuto, updateTowerClick, setAutoCharge, responseStopTurbo } from './engine/events'
import { tickerAdd } from './engine/application'

// 1000000 -> 1 000 000
BigInt.prototype.toFormat = function() {
    return this.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')
}

// x1000 per 10 steps (1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024)
BigInt.prototype.x2 = function() {
    return this + this
}

// x1000 per 9 steps (1, 2, 5, 10, 20, 50, 100, 200, 500, 1000)
BigInt.prototype.x3 = function() {
    return (this.toString()[0] === '2') ? this*25n/10n : this*2n
}

// x1000 per 5 steps (1, 5, 20, 100, 500, 1000)
BigInt.prototype.x5 = function() {
    return (this.toString()[0] === '5') ? this*4n : this*5n
}

const updatePerMS = 77 // 1/13 of second
const subtractTurboPerUpdate = updatePerMS / 1000

const awaitVoiceLetsDoIt = 60 * 1000
let timeoutVoiceLetsDoIt = awaitVoiceLetsDoIt

const maxLightningsFromTower = 5

class State {
    constructor(save = null) {
        this.help = new Set( save ? save.help : ['button', 'auto', 'click', 'turbo', 'boost', 'spy'] )

        this.isADBonusTurboSeconds = save ? save.isADBonusTurboSeconds : false

        this.points = save ? save.points : 0n
        this.addRate = 1n // x turbo in TURBO UES

        this.level = save ? save.level : 1n
        this.levelScored = save ? save.levelScored : 0n
        this.levelPrice = save ? save.levelPrice : 1000n // 1000n

        this.turboSeconds = save ? save.turboSeconds : 10
        this.turboPrice = save ? save.turboPrice : 1000n // 5000n
        this.turboTimeout = 0

        this.turboOpenBuildings = save ? save.turboOpenBuildings : 0 // MAX 2
        this.turboLightnings = save ? save.turboLightningInBuilding : 1

        this.addPerClick = save ? save.addClick : 1n
        this.addPerClickNextValue = save ? save.addPerClickNextValue : 1n
        this.addPerClickPrice = save ? save.addPerClickPrice : 500n // 500n
        this.clickLightnings = save ? save.clickLightnings : 1

        this.addPerSecond = save ? save.addPerSecond : 0n
        this.addPerSecondNextValue = save ? save.addPerClickNextValue : 1n
        this.addPerSecondPrice = save ? save.addPerClickPrice : 100n // 100n

        this.autoOpenBuildings = save ? save.autoOpenBuildings : 0 // MAX 2
        this.autoLightnings = save ? save.autoLightningInBuilding : 1

        EventHub.on( events.getClick, this.getButtonClick.bind(this) )
        EventHub.on( events.requestUpgradeClick, this.upgradeClick.bind(this) )
        EventHub.on( events.requestUpgradeAuto, this.upgradeAuto.bind(this) )
        EventHub.on( events.requestStartTurbo, this.startTurbo.bind(this) )

        EventHub.on( events.requestAD, this.showAD.bind(this) )

        EventHub.on( events.spyBotGetDamage, this.spyBotGetDamage.bind(this))

        this.addPerTick = (Number(this.addPerSecond) / 1000) * updatePerMS
        this.tickReserve = 0
        this.lastTimeStamp = 0
        tickerAdd(this)
    }

    getButtonClick() {
        timeoutVoiceLetsDoIt = awaitVoiceLetsDoIt
        this.getPoints(this.addPerClick)
    }

    spyBotGetDamage(isDestroyed) {
        const points = isDestroyed ? this.addPerClick * 10n : this.addPerClick * 5n
        this.getPoints(points)

        showBonusUI('+ ' + (this.addRate * points).toFormat())
    }

    tick(time) {
        timeoutVoiceLetsDoIt -= time.deltaMS
        if (timeoutVoiceLetsDoIt <= 0) {
            timeoutVoiceLetsDoIt = awaitVoiceLetsDoIt
            needVoiceDoIt()
        }

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
        this.checkLevel()

        updateUIPoints()

        if (this.addRate > 1n) setTurboCharge()
    }

    checkLevel() {
        if (this.levelScored < this.levelPrice) return

        this.level++
        this.levelScored -= this.levelPrice
        this.levelPrice = this.levelPrice.x5()

        if (this.addRate > 1n) this.addRate = this.level

        updateUILevel()

        this.updateTurboLightnings()
    }

    showAD() {
        if (this.isADBonusTurboSeconds) {
            this.turboSeconds += 1
            this.turboTimeout = this.turboSeconds
            updateUITurboTimeout( true )
        } else {
            const bonus = (this.addPerClickPrice + this.addPerSecondPrice + this.turboPrice) / 6n
            this.points += bonus
        
            this.levelScored += bonus
            this.checkLevel()

            updateUIPoints( bonus )
        }
        this.isADBonusTurboSeconds = !this.isADBonusTurboSeconds
    }

    increaseValue(value, counter) {
        const stringNumber = value.toString()
        const range = stringNumber.length - 1
        switch (stringNumber[0]) {
            case '1' :
                updateCounter(counter, 1)
                return BigInt(2 * (10**range))
            case '2' :
                updateCounter(counter, 1)
                return BigInt(5 * (10**range))
            case '5' :
                updateCounter(counter, 2)
                return BigInt(10 * (10**range))
        }
    }

    upgradeClick() {
        if (this.points < this.addPerClickPrice) return

        // UI
        this.points -= this.addPerClickPrice
        this.addPerClickPrice = this.addPerClickPrice.x2()
 
        switch( this.addPerClick.toString()[0] ) {
            case '1':
                this.addPerClick += this.addPerClickNextValue
                break
            case '2':
                this.addPerClick += this.addPerClickNextValue
                this.addPerClickNextValue *= 2n
                break
            case '3':
            case '5':
                this.addPerClick += this.addPerClickNextValue
                this.addPerClickNextValue = this.addPerClick
                break
            default: this.addPerClick = 1n // 0n
        }

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
        this.addPerSecondPrice = this.addPerSecondPrice.x2()

        switch( this.addPerSecond.toString()[0] ) {
            case '1':
                this.addPerSecond += this.addPerSecondNextValue
                break
            case '2':
                this.addPerSecond += this.addPerSecondNextValue
                this.addPerSecondNextValue *= 2n
                break
            case '3':
            case '5':
                this.addPerSecond += this.addPerSecondNextValue
                this.addPerSecondNextValue = this.addPerSecond
                break
            default: this.addPerSecond = 1n // 0n
        }

        this.addPerTick = (Number(this.addPerSecond) / 1000) * updatePerMS

        updateUIPoints()
        updateUIAutoPanel()

        this.updateAutoLightnings()
    }
    
    startTurbo() {
        if (this.points < this.turboPrice) return responseStopTurbo()

        // UI
        this.addRate = this.level
        this.turboTimeout = this.turboSeconds

        this.points -= this.turboPrice
        this.turboPrice = this.turboPrice.x3()

        updateUIPoints()
        updateUITurboPanel()
    }

    updateAutoLightnings() {
        if (this.autoOpenBuildings === 0) {
            this.autoOpenBuildings++
            updateBuildingAuto( this.autoOpenBuildings )
        }
        
        if (this.autoOpenBuildings === 1) {
            this.autoLightnings = this.level
            if (this.level > BigInt(maxLightningsFromTower)) {
                this.autoOpenBuildings++
                updateBuildingAuto( this.autoOpenBuildings )
            }
        }

        if (this.autoOpenBuildings > 1) {
            this.autoLightnings = this.level / 2n
            if (this.autoLightnings > maxLightningsFromTower) {
                this.autoLightnings = maxLightningsFromTower
            }
        }
        updateBuildingAuto( this.autoOpenBuildings )
    }

    updateTurboLightnings() {
        if (this.turboOpenBuildings === 0) {
            this.turboOpenBuildings++
            updateBuildingTurbo( this.turboOpenBuildings )
        }
        
        if (this.turboOpenBuildings === 1) {
            this.turboLightnings = this.level
            if (this.level > BigInt(maxLightningsFromTower)) {
                this.turboOpenBuildings++
                updateBuildingTurbo( this.turboOpenBuildings )
            }
        }

        if (this.turboOpenBuildings > 1) {
            this.turboLightnings = this.level / 2n
            if (this.turboLightnings > maxLightningsFromTower) {
                this.turboLightnings = maxLightningsFromTower
            }
        }
        updateBuildingTurbo( this.turboOpenBuildings )
    }
}

export default State