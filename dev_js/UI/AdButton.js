import { AnimatedSprite } from "pixi.js"
import { sprites } from "../engine/loader"
import { EventHub, events, requestAD } from '../engine/events'
import Yandex from "../Yandex/Yandex"
import { playVoice } from "../engine/sound"
import AdMessage from "./AdMessage"

const timeout = 10 * 1000

class AdButton extends AnimatedSprite {
    constructor( disableVoice, state, isLangRu ) {
        super(sprites.ad_button.animations.go)
        this.animationSpeed = 0.05
        this.play()
        this.anchor.set(1, 0)

        this.state = state
        this.isLangRu = isLangRu
        this.messageButton = isLangRu ? 'Принято' : 'Accepted'
        this.messageButton = this.messageButton.toUpperCase()

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

        Yandex.showRewordAd( (isBonus) => this.getUpgradeForAD(isBonus) )
    }

    getUpgradeForAD(isBonus) {
        if (isBonus === true) {
            let messageText, extra, image
            if (this.state.isADBonusTurboSeconds) {
                image = 'time'
                extra = 0.5
                messageText = this.isLangRu
                ? `Время турбо режима увеличено на ${extra} секунд!`
                : `Turbo mode time increased by ${extra} seconds!`
            } else {
                image = 'energy'
                extra = (this.state.addPerClickPrice + this.state.addPerSecondPrice + this.state.turboPrice) / 6n
                messageText = this.isLangRu
                ? `Получено ${extra} электроэнергии!`
                : `${extra} electricity received!`
            }
            new AdMessage(messageText, this.messageButton, image, () => requestAD() )
        }
        
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