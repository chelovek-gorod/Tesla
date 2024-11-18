import { sceneAdd, sceneRemove } from '../engine/application'
import { AnimatedSprite } from "pixi.js"
import { sprites } from "../engine/loader"
import { tickerAdd, tickerRemove } from "../engine/application"

class Sparks extends AnimatedSprite {
    constructor(x, y) {
        super(sprites.sparks.animations.splash)
        this.scale.set(0.25)
        this.animationSpeed = 0.5
        this.loop = false
        //this.updateAnchor = true
        this.position.x = x
        this.position.y = y
        this.play()
        this.onComplete = () => {
            tickerRemove(this)
            sceneRemove(this)
            this.destroy()
        }
        tickerAdd(this)
        sceneAdd(this)
    }

    tick(delta) {
        this.position.y -= delta.deltaTime * 2
    }
}


export default Sparks
