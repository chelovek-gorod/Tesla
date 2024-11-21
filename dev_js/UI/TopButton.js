import { AnimatedSprite } from "pixi.js"
import { sprites } from "../engine/loader"
import { requestAD } from '../engine/events'

class TopButton extends AnimatedSprite {
    constructor() {
        super(sprites.top_button.animations.go)
        this.animationSpeed = 0.05
        this.play()
        this.anchor.set(1, 0)

        this.isActive = true

        this.eventMode = 'static'
        this.on('pointerdown', this.getClick.bind(this) )
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

export default TopButton