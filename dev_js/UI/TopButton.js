import { AnimatedSprite } from "pixi.js"
import { sprites } from "../engine/loader"
import { EventHub, events, requestAD } from '../engine/events'
import { playVoice } from "../engine/sound"

class TopButton extends AnimatedSprite {
    constructor(voice) {
        super(sprites.top_button.animations.go)
        this.animationSpeed = 0.05
        this.play()
        this.anchor.set(1, 0)

        this.isActive = true
        this.voice = voice

        this.eventMode = 'static'
        this.on('pointerdown', this.getClick.bind(this) )
    }

    getClick() {
        if (!this.isActive) return

        this.activation( false )
        
        setTimeout( () => this.getUpgradeForAD(), 1000 )
    }

    getUpgradeForAD() {
        requestAD()
        playVoice(this.voice)
        this.activation( true )
    }

    activation( isActive ) {
        this.isActive = isActive

        if (this.isActive) this.play()
        else this.gotoAndStop(0)
    }
}

export default TopButton