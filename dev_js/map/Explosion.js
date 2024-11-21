import { AnimatedSprite } from "pixi.js"
import { tickerAdd, tickerRemove } from "../engine/application"
import { sounds, sprites } from "../engine/loader"
import { playSound } from "../engine/sound"

const upSpeed = 0.25

class Explosion extends AnimatedSprite {
    constructor(point, scale) {
        super(sprites.explosion.animations.go)
        this.anchor.set(0.5)
        this.scale.set(scale)
        this.position.x = point.x
        this.position.y = point.y

        this.animationSpeed = 0.5
        this.loop = false
        this.play()
        this.onComplete = () => {
            tickerRemove(this)
            this.destroy()
        }

        this.upSpeed = upSpeed * scale
        tickerAdd( this )

        playSound( sounds.se_explosion )
    }

    tick (time) {
        this.position.y -= time.elapsedMS * this.upSpeed
    }
}

export default Explosion