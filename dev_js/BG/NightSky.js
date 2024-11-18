import { TilingSprite } from "pixi.js"
import { sprites } from "../engine/loader"
import { EventHub, events } from '../engine/events'
import { tickerAdd } from "../engine/application"

const skySpeed = 0.002
const tileHeight = 400

class NightSky extends TilingSprite {
    constructor( screenData ) {
        super( sprites.night_sky )
        //this.uvRespectAnchor = true
        //this.anchor.set(0.5)

        this.screenResize( screenData )
        EventHub.on( events.screenResize, this.screenResize.bind(this) )

        tickerAdd(this)
    }

    screenResize(screenData) {
        this.width = screenData.width
        this.height = screenData.height
        this.position.x = 0
        this.position.y = 0
    }

    tick(time) {
        this.position.y -= skySpeed * time.elapsedMS
        if (this.position.y <= -tileHeight) this.position.y += tileHeight
    }
}

export default NightSky