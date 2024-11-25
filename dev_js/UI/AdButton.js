import { AnimatedSprite } from "pixi.js"
import { sprites } from "../engine/loader"
import { EventHub, events, requestAD } from '../engine/events'
import Yandex from "../Yandex/Yandex"

const timeout = 10 * 1000

class AdButton extends AnimatedSprite {
    constructor() {
        super(sprites.ad_button.animations.go)
        this.animationSpeed = 0.05
        this.play()
        this.anchor.set(1, 0)

        this.isActive = true
        this.isTurboOn = false
        this.isTimeMachineOn = false

        this.eventMode = 'static'
        this.on('pointerdown', this.getClick.bind(this) )

        EventHub.on( events.requestStartTurbo, () => this.changeTurboState( true ) )
        EventHub.on( events.responseStopTurbo, () => this.changeTurboState( false ) )
        EventHub.on( events.setAdButtonAvailable, (isOn) => this.changeTimeMachineState( isOn ) )
    }

    getClick() {
        if (!this.isActive) return

        this.activation( false )

        Yandex.showRewordAd( (isBonus) => this.getUpgradeForAD(isBonus) )
    }

    getUpgradeForAD(isBonus) {
        if (isBonus === true) requestAD()
        
        setTimeout( () => {
            this.activation( !this.isTimeMachineOn && !this.isTurboOn )
        }, timeout )
    }

    activation( isActive ) {
        this.isActive = isActive

        if (this.isActive) this.play()
        else this.gotoAndStop(0)
    }

    changeTurboState(isOn) {
        this.isTurboOn = isOn
        this.activation( !this.isTimeMachineOn && !this.isTurboOn )
    }

    changeTimeMachineState(isOn) {
        this.isTimeMachineOn = isOn
        this.activation( !this.isTimeMachineOn && !this.isTurboOn )
    }
}

export default AdButton