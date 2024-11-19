import { tickerAdd, tickerRemove } from '../engine/application'
import { AnimatedSprite } from "pixi.js"
import { sprites } from "../engine/loader"

class Smoke extends AnimatedSprite {
    constructor(point, scale, isCenter = false) {
        super(sprites.smoke.animations.smoke)
        this.upSpeed = 2.5 * scale
        this.animationSpeed = 0.5
        this.loop = false
        this.scale.set(scale)
        this.anchor.set(0.5, isCenter ? 0.5 : 1)
        this.position.x = point.x
        this.position.y = point.y
        this.play()
  
        this.onComplete = () => {
            tickerRemove(this)
            this.destroy()
        }
        tickerAdd(this)
    }

    tick(delta) {
        this.position.y -= delta.deltaTime * this.upSpeed
    }
}

export default Smoke