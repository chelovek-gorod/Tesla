import { AnimatedSprite } from "pixi.js"
import { sounds, sprites } from "../engine/loader"
import { tickerAdd, tickerRemove } from "../engine/application"
import { playSound } from "../engine/sound"

class Sparks extends AnimatedSprite {
    constructor(point, scale) {
        super(sprites.sparks.animations.splash)
        this.anchor.set(0.5)
        this.scale.set(scale * 0.25)
        this.animationSpeed = 0.5
        this.loop = false
        //this.updateAnchor = true
        this.position.x = point.x
        this.position.y = point.y
        this.play()
        this.onComplete = () => {
            tickerRemove(this)
            this.destroy()
        }
        tickerAdd(this)

        playSound( sounds.se_sparks )
    }

    tick(delta) {
        this.position.y += delta.deltaTime * 2
    }
}


export default Sparks
