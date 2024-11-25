import { Sprite } from "pixi.js"
import { sprites } from "../engine/loader"
import { EventHub, events } from '../engine/events'
import { tickerAdd } from "../engine/application"

const speed = 0.005
const speedMax = 2.5
const accelerationRate = 1.035
const slowdownRate = 0.9662 // 1 / accelerationRate

class Moon extends Sprite {
    constructor( screenData ) {
        super( sprites.moon )
        this.anchor.set(0, 1)

        this.speed = speed
        this.isAccelerated = false

        this.position.x = screenData.width // set for reset in screenResize()

        this.screenResize( screenData )
        EventHub.on( events.screenResize, this.screenResize.bind(this) )

        EventHub.on( events.timeAcceleration, this.timeAcceleration.bind(this) )

        tickerAdd(this)
    }

    screenResize(screenData) {
        this.maxX = screenData.width - this.width
        this.minY = screenData.height
        if (this.position.x > this.maxX) this.restart()
    }

    restart() {
        this.position.x = Math.floor(this.maxX * Math.random())
        this.position.y = this.minY
    }

    tick(time) {
        this.position.y -= this.speed * time.elapsedMS
        if (this.position.y <= 0) this.restart()

        if (this.isAccelerated) {
            if (this.speed < speedMax) this.speed *= accelerationRate * time.deltaTime
        } else {
            if (this.speed > speed) {
                this.speed *= slowdownRate * time.deltaTime
                if (this.speed < speed) this.speed = speed
            }
        }
    }

    timeAcceleration( isAccelerated ) {
        this.isAccelerated = isAccelerated
    }
}

export default Moon