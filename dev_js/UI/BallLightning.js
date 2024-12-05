import { AnimatedSprite } from "pixi.js"
import { tickerAdd, tickerRemove } from "../engine/application"
import { moveToTarget } from "../engine/functions"
import { sprites } from "../engine/loader"
import { updateUIPoints, updateUITurboTimeout } from '../engine/events'

class BallLightning extends AnimatedSprite {
    constructor(bonus, point, target) {
        super(sprites.ball_lightning.animations.go)
        this.anchor.set(0.5)
        this.scale.set(0.75)
        this.position.x = point.x
        this.position.y = point.y
        this.target = {position: {x: target.x, y: target.y}}
        this.speed = 1
        this.bonus = bonus

        this.animationSpeed = 0.5
        this.play()
        tickerAdd( this )
    }

    tick (time) {
        const isOnTarget = moveToTarget(this, this.target, this.speed * time.elapsedMS)
        if (isOnTarget) {
            if (this.bonus === 0) updateUITurboTimeout(true)
            else updateUIPoints( this.bonus ) 

            tickerRemove( this )
            this.destroy()
        }
    }
}

export default BallLightning