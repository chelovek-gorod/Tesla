import { Container, Sprite, Graphics } from "pixi.js"
import { tickerAdd, tickerRemove } from "../engine/application"
import { AdjustmentFilter } from 'pixi-filters'
import { sprites } from "../engine/loader"
import { EventHub, events } from '../engine/events'
import { controlSizeH, controlSizeV, controlHeightH, controlHeightV,
    imageSnowWidth, imageSnowHeight, mapRate, mapMaxScreenHeightRate } from "../constants"

const brightStep = 0.0002
const minBright = 0.2

class Terrain extends Container {
    constructor( screenData ) {
        super()
        
        this.timeEffectFilter = new AdjustmentFilter({brightness: 1})
        this.filters = []
        this.isAccelerated = false

        this.image = new Sprite( sprites.snow_bg )
        this.image.anchor.set(0.5, 1)
        this.image.position.x = 0
        this.addChild(this.image)

        this.backRect = new Graphics()
        this.addChild(this.backRect)

        this.screenResize( screenData )
        EventHub.on( events.screenResize, this.screenResize.bind(this) )

        EventHub.on( events.timeAcceleration, this.timeAcceleration.bind(this) )
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

    timeAcceleration(isActive) {
        this.isAccelerated = isActive
        if (isActive) {
            tickerAdd(this)
            this.isAccelerated = true
            this.filters = [this.timeEffectFilter]
        }
    }

    tick(time) {
        if (this.isAccelerated) {
            if( this.timeEffectFilter.brightness > minBright) {
                this.timeEffectFilter.brightness -= brightStep * time.elapsedMS
                if (this.timeEffectFilter.brightness < minBright) {
                    this.timeEffectFilter.brightness = minBright
                }
            }
        } else {
            this.timeEffectFilter.brightness += brightStep * time.elapsedMS
            if (this.timeEffectFilter.brightness >= 1) {
                this.timeEffectFilter.brightness = 1
                this.filters = []
                tickerRemove(this)
            }
        }
        
    }
}

export default Terrain