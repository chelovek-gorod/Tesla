import { EventHub, events, updatePoints, updateClickPanel, updateAutoPanel,
    stateUpdated, stopTurbo, updateTurboTimeout, updateTurboInfo, getAuto } from './engine/events'
import { tickerAdd } from './engine/application'

const updatePerMS = 77 // 1/13 of second

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

        this.addPerClick = save ? save.addClick : 1n
        this.addPerClickNextValue = save ? save.addPerClickNextValue : 2n
        this.addPerClickPrice = save ? save.addPerClickPrice : 500n // 500n

        this.addPerSecond = save ? save.addPerSecond : 0n
        this.addPerSecondNextValue = save ? save.addPerClickNextValue : 1n
        this.addPerSecondPrice = save ? save.addPerClickPrice : 100n // 100n

        EventHub.on( events.getClick, () => this.getPoints(this.addPerClick) )
        EventHub.on( events.requestUpdateClick, this.requestUpdateClick.bind(this) )
        EventHub.on( events.requestUpdateAuto, this.requestUpdateAuto.bind(this) )
        EventHub.on( events.startTurbo, this.startTurbo.bind(this) )

        this.addPerTick = (Number(this.addPerSecond) / 1000) * updatePerMS
        this.tickReserve = 0
        this.lastTimeStamp = 0
        tickerAdd(this)
    }

    startTurbo() {
        this.addRate = this.level
        this.turboTimeout = this.turboSeconds

        this.points -= this.turboPrice
        this.turboPrice = this.turboPrice.increase()

        updateTurboInfo()
    }

    tick(time) {
        this.lastTimeStamp += time.deltaMS
        if (this.lastTimeStamp > updatePerMS) {
            this.lastTimeStamp -= updatePerMS
            
            if (this.addPerSecond > 0n) {
                this.tickReserve += this.addPerTick

                if (this.tickReserve > 1) {
                    const add = Math.floor(this.tickReserve)
                    this.tickReserve -= add
                    getAuto(this.addPerSecond) // for lightning towers
                    this.getPoints( BigInt(add) )
                }
            }

            // if turbo
            if (this.addRate > 1n) {
                this.turboTimeout -= updatePerMS / 1000
                if (this.turboTimeout < 0) {
                    this.turboTimeout = 0
                    this.addRate = 1n
                    stopTurbo()

                    setTimeout(() => {
                        stateUpdated({
                            isClickPanelOn: this.points >= this.addPerClickPrice,
                            isAutoPanelOn: this.points >= this.addPerSecondPrice,
                            isTurboPanelReady: this.points >= this.turboPrice
                        })
                    }, 300)
                } else {
                    updateTurboTimeout()
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

            updateTurboInfo()

            if (this.addRate > 1n) this.addRate = this.level
        }

        this.sendUpdates()
    }

    sendUpdates() {
        stateUpdated({
            isClickPanelOn: this.points >= this.addPerClickPrice,
            isAutoPanelOn: this.points >= this.addPerSecondPrice,
            isTurboPanelReady: this.points >= this.turboPrice
        })

        updatePoints()
    }

    requestUpdateClick() {
        if (this.points < this.addPerClickPrice) return

        this.addPerClick = this.addPerClickNextValue
        this.addPerClickNextValue = this.addPerClickNextValue.increase()
        this.points -= this.addPerClickPrice
        this.addPerClickPrice = this.addPerClickPrice.increase()
        this.sendUpdates()
        updateClickPanel(this.addPerClick)
    }

    requestUpdateAuto() {
        if (this.points < this.addPerSecondPrice) return

        this.addPerSecond = this.addPerSecondNextValue
        this.addPerSecondNextValue = this.addPerSecondNextValue.increase()
        this.points -= this.addPerSecondPrice
        this.addPerSecondPrice = this.addPerSecondPrice.increase()

        this.addPerTick = (Number(this.addPerSecond) / 1000) * updatePerMS

        this.sendUpdates()
        updateAutoPanel(this.addPerSecond)
    }
}

export default State