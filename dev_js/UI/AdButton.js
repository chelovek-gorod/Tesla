import { AnimatedSprite } from "pixi.js"
import { sprites } from "../engine/loader"
import { EventHub, events, requestAD } from '../engine/events'

class AdButton extends AnimatedSprite {
    constructor() {
        super(sprites.ad_button.animations.go)
        this.animationSpeed = 0.05
        this.play()
        this.anchor.set(1, 0)

        this.isActive = true

        this.eventMode = 'static'
        this.on('pointerdown', this.getClick.bind(this) )

        EventHub.on( events.requestStartTurbo, () => this.activation( false ) )
        EventHub.on( events.responseStopTurbo, () => this.activation( true ) )
    }

    getClick() {
        if (!this.isActive) return

        this.activation( false )
        requestAD()
        
        setTimeout( () => this.getUpgradeForAD(), 5000 )
    }

    getUpgradeForAD() {
        this.activation( true )
    }

    activation( isActive ) {
        this.isActive = isActive

        if (this.isActive) this.play()
        else this.gotoAndStop(0)
    }
}

export default AdButton