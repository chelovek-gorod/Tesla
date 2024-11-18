import { Sprite, Container, Graphics } from "pixi.js"
import { sprites } from "../engine/loader"
import { EventHub, events, getClick } from '../engine/events'

import Sparks from "../map/Sparks"

class MainButton extends Container {
    constructor() {
        super()
        this.image = new Sprite(sprites.main_button.textures.off)
        this.image.anchor.set(0.5, 1)
        this.addChild(this.image)

        this.clickArea = new Graphics()
        this.clickArea.circle(0, -90, 50)
        this.clickArea.fill('rgba(0, 0, 0, 0.001)')
        this.addChild(this.clickArea)

        this.clickArea.eventMode = 'static'
        this.clickArea.on('pointerdown', this.startClick.bind(this) )
        this.clickArea.on('pointerup', this.endClick.bind(this) )
        this.clickArea.on('pointerleave', this.endClick.bind(this) )
    }

    startClick(event){
        this.image.texture = sprites.main_button.textures.on
        getClick()
        new Sparks(event.client.x, event.client.y)
    }
    endClick(event){
        this.image.texture = sprites.main_button.textures.off
    }
}

/*
class MainButton extends Sprite {
    constructor() {
        super(sprites.main_button.textures.off)
        this.anchor.set(0.5, 1)
        this.eventMode = 'static'
        this.on('pointerdown', this.startClick.bind(this) )
        this.on('pointerup', this.endClick.bind(this) )
        this.on('pointerleave', this.endClick.bind(this) )
    }

    startClick(event){
        this.texture = sprites.main_button.textures.on
        getClick()
        new Sparks(event.client.x, event.client.y)
    }
    endClick(event){
        this.texture = sprites.main_button.textures.off
    }
}
*/

export default MainButton
