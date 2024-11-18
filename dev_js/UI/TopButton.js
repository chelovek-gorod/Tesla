import { AnimatedSprite } from "pixi.js"
import { sprites } from "../engine/loader"
import { EventHub, events } from '../engine/events'

class TopButton extends AnimatedSprite {
    constructor() {
        super(sprites.top_button.animations.go)
        this.animationSpeed = 0.05
        this.play()
        this.anchor.set(1, 0)
    }
}

export default TopButton