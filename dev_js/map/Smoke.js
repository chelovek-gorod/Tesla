import { tickerAdd, tickerRemove } from '../engine/application'
import { AnimatedSprite } from "pixi.js"
import { sprites } from "../engine/loader"

class Smoke extends AnimatedSprite {
    constructor(x, y, scale) {
        super(sprites.smoke.animations.smoke)
        this.upSpeed = 2
        this.animationSpeed = 0.5
        this.loop = false
        this.scale.set(scale * 2)
        this.position.x = x
        this.position.y = y
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