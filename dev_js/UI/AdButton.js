import { AnimatedSprite } from "pixi.js"
import { sprites } from "../engine/loader"
import { EventHub, events, requestAD } from '../engine/events'

const timeout = 1 * 1000

class AdButton extends AnimatedSprite {
    constructor() {
        super(sprites.ad_button.animations.go)
        this.animationSpeed = 0.05
        this.play()
        this.anchor.set(1, 0)

        this.isActive = true
        this.isTurboOn = false

        this.eventMode = 'static'
        this.on('pointerdown', this.getClick.bind(this) )

        EventHub.on( events.requestStartTurbo, () => this.changeTurboState( true ) )
        EventHub.on( events.responseStopTurbo, () => this.changeTurboState( false ) )
    }

    getClick() {
        if (!this.isActive) return

        this.activation( false )
        requestAD()
        
        setTimeout( () => this.getUpgradeForAD(), timeout )
    }

    getUpgradeForAD() {
        if (this.isTurboOn) return

        this.activation( true )
    }

    activation( isActive ) {
        this.isActive = isActive

        if (this.isActive) this.play()
        else this.gotoAndStop(0)
    }

    changeTurboState(isOn) {
        this.isTurboOn = isOn
        this.activation( !isOn )
    }
}

export default AdButton