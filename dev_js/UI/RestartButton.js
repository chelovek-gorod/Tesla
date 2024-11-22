import { Sprite } from "pixi.js"
import { sprites } from "../engine/loader"
import { EventHub, events } from '../engine/events'

class RestartButton extends Sprite {
    constructor() {
        super(sprites.restart_button)
        this.anchor.set(0, 0)

        this.isActive = true

        this.eventMode = 'static'
        this.on('pointerdown', this.getClick.bind(this) )
    }

    getClick() {
        location.reload()
    }
}

export default RestartButton