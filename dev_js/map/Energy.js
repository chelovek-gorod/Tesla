import { AnimatedSprite } from "pixi.js"
import { sprites } from "../engine/loader"
import { EventHub, events } from '../engine/events'
import { sceneAdd, sceneRemove } from "../engine/application"

class Energy extends AnimatedSprite {
    constructor(point, scale) {
        super(sprites.energy.animations.go)
        this.position.set(point.x, point.y)
        this.scale.set(scale)
        this.anchor.set(0.5)
        this.animationSpeed = 1
        this.alpha = 1
        this.loop = false
        this.play()
        
        this.onComplete = () => {
            sceneRemove(this)
            this.destroy()
        }
        sceneAdd(this)
    }

    screenResize(screenData) {
        this.position.x = screenData.width * this.x_rate
        this.position.y = screenData.height * this.y_rate
    }
}

export default Energy