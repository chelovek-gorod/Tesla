import { TilingSprite } from "pixi.js"
import { sprites } from "../engine/loader"
import { EventHub, events } from '../engine/events'
import { tickerAdd } from "../engine/application"

const speed = 0.002
const speedMax = 0.8
const accelerationRate = 1.051
const slowdownRate = 0.9515 // 1 / accelerationRate
const tileHeight = 400

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

class NightSky extends TilingSprite {
    constructor( screenData ) {
        super( sprites.night_sky )
        //this.uvRespectAnchor = true
        //this.anchor.set(0.5)
        this.speed = speed
        this.isAccelerated = false

        this.screenResize( screenData )
        EventHub.on( events.screenResize, this.screenResize.bind(this) )

        EventHub.on( events.timeAcceleration, this.timeAcceleration.bind(this) )

        tickerAdd(this)
    }

    screenResize(screenData) {
        this.width = screenData.width
        this.height = screenData.height
        this.position.x = 0
        this.position.y = 0
    }

    tick(time) {
        this.position.y -= this.speed * time.elapsedMS
        if (this.position.y <= -tileHeight) this.position.y += tileHeight

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

export default NightSky