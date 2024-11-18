import { Container, Sprite, Graphics } from "pixi.js"
import { sprites } from "../engine/loader"
import { EventHub, events } from '../engine/events'
import { controlSizeH, controlSizeV, controlHeightH, controlHeightV,
    imageSnowWidth, imageSnowHeight, mapRate, mapMaxScreenHeightRate } from "../constants"

class Terrain extends Container {
    constructor( screenData ) {
        super()

        this.image = new Sprite( sprites.snow_bg )
        this.image.anchor.set(0.5, 1)
        this.image.position.x = 0
        this.addChild(this.image)

        this.backRect = new Graphics()
        this.addChild(this.backRect)

        this.screenResize( screenData )
        EventHub.on( events.screenResize, this.screenResize.bind(this) )
    }

    screenResize(screenData) {
        this.position.x = screenData.centerX
        this.position.y = screenData.height

        let imageScale = screenData.width / imageSnowWidth 

        let UIScale
        let UIScaledHeight
        if (screenData.width > screenData.height) {
            UIScale = controlSizeH > screenData.width ? screenData.width / controlSizeH : 1
            UIScaledHeight = controlHeightH * UIScale
        } else {
            UIScale = controlSizeV > screenData.width ? screenData.width / controlSizeV : 1
            UIScaledHeight = controlHeightV * UIScale
            imageScale *= 2
        }

        this.image.scale.set( imageScale )
        const imageBGHeight = (imageScale * imageSnowHeight) * 0.6

        // TEST gameMinHeight
        let mapHeight = mapRate * screenData.width
        const mapMaxHeight = screenData.height * mapMaxScreenHeightRate
        if (mapHeight > mapMaxScreenHeightRate) mapHeight = mapMaxHeight
    
        this.image.position.y = -UIScaledHeight - mapHeight + imageBGHeight

        this.backRect.clear()
        this.backRect.rect(
            -screenData.centerX,
            this.image.position.y,
            screenData.width, -this.image.position.y)
        this.backRect.fill('#aab8c9')
    }
}

export default Terrain