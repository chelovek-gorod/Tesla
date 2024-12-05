import { Sprite } from "pixi.js"
import { sprites } from "../engine/loader"
import { EventHub, events } from '../engine/events'
import { tickerAdd } from "../engine/application"

const speed = 0.005
const speedMax = 1
const accelerationRate = 1.051
const slowdownRate = 0.9515 // 1 / accelerationRate

/*
let ss = 0.005 // start speed
const ms = 2 // max speed
const acc = 1.051 // acceleration
// need 2 sec = 120 frames
let count = 0
while (ss < ms) {
    ss *= acc
    count++
}
console.log('count', count)
console.log('slowdown =', 1 / acc)
*/

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

        // setInterval(() => console.log('speed =', this.speed, this.isAccelerated), 1000)
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
            if (this.speed < speedMax) {
                this.speed *= accelerationRate * time.deltaTime
                if (this.speed > speedMax) this.speed = speedMax
            }
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