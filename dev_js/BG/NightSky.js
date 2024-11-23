import { TilingSprite } from "pixi.js"
import { sprites } from "../engine/loader"
import { EventHub, events } from '../engine/events'
import { tickerAdd } from "../engine/application"

const speed = 0.002
const speedMax = 1
const accelerationStep = 0.0002
const tileHeight = 400

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
            if (this.speed < speedMax) this.speed += accelerationStep * time.elapsedMS
        } else {
            if (this.speed > speed) {
                this.speed -= accelerationStep * time.elapsedMS
                if (this.speed < speed) this.speed = speed
            }
        }
    }

    timeAcceleration( isAccelerated ) {
        this.isAccelerated = isAccelerated
    }
}

export default NightSky