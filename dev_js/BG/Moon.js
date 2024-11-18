import { Sprite } from "pixi.js"
import { sprites } from "../engine/loader"
import { EventHub, events } from '../engine/events'
import { tickerAdd } from "../engine/application"

const speed = 0.005

class Moon extends Sprite {
    constructor( screenData ) {
        super( sprites.moon )
        this.anchor.set(0, 1)

        this.position.x = screenData.width // set for reset in screenResize()

        this.screenResize( screenData )
        EventHub.on( events.screenResize, this.screenResize.bind(this) )

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
        this.position.y -= speed * time.elapsedMS
        if (this.position.y <= 0) this.restart()
    }
}

export default Moon