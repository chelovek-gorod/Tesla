import { AnimatedSprite } from "pixi.js"
import { sprites } from "../engine/loader"
import { EventHub, events, requestAD } from '../engine/events'
import { playVoice } from "../engine/sound"
import AdMessage from "./AdMessage"

const timeout = 30 * 1000

class AdButton extends AnimatedSprite {
    constructor( disableVoice, state, isLangRu ) {
        super(sprites.ad_button.animations.go)
        this.animationSpeed = 0.05
        this.play()
        this.anchor.set(1, 0)

        this.state = state
        this.isLangRu = isLangRu

        this.isActive = true
        this.isTurboOn = false
        this.isTimeMachineOn = false

        this.disableVoice = disableVoice

        this.eventMode = 'static'
        this.on('pointerdown', this.getClick.bind(this) )

        EventHub.on( events.requestStartTurbo, () => this.changeTurboState( true ) )
        EventHub.on( events.responseStopTurbo, () => this.changeTurboState( false ) )
        EventHub.on( events.setAdButtonAvailable, (isOn) => this.changeTimeMachineState( isOn ) )
    }

    getClick() {
        if (!this.isActive) return playVoice(this.disableVoice)

        this.activation( false )
        const extra = (this.state.addPerClickPrice + this.state.addPerSecondPrice + this.state.turboPrice) / 6n
        new AdMessage( this.isLangRu, this.state.level > 1, extra.toFormat(), this.getCallback.bind(this), this.disableVoice )
    }

    getCallback(isAdShow) {
        if (isAdShow) {
            setTimeout( () => {
                this.activation( !this.isTimeMachineOn && !this.isTurboOn )
            }, timeout )
        } else {
            this.activation( true )
        }
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