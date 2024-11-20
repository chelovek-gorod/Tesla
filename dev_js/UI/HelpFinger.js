import { Sprite } from "pixi.js"
import { sprites } from "../engine/loader"
import { tickerAdd, tickerRemove } from "../engine/application"
import { EventHub, events } from "../engine/events"

const settings = {
    minScale: 0.5,
    maxScale: 0.6,
    scaleStep: 0.0005,
}

const helpDuration = 3.5 * 1000

class HelpFinger extends Sprite {
    // state.getUseColor.bind(state), state.getAddColor.bind(state) 
    constructor( parentContainer ) {
        super( sprites.finger )
        this.parentContainer = parentContainer
        this.anchor.set(0.1, 0.1)
        this.scale.set(0.55)
        this.isScaleUp = false

        EventHub.on( events.screenResize, () => setTimeout( () => this.screenResize.bind(this), 100 ) )
    }

    screenResize() {
        if (!this.target) return

        this.position.x = this.target.position.x
        this.position.y = this.target.position.y - 100
    }

    showHelp( target ) {
        this.target = target
        this.position.x = this.target.position.x
        this.position.y = this.target.position.y - 100
        this.parentContainer.addChild( this )
        tickerAdd( this )

        setTimeout( () => this.hideHelp(), helpDuration )
    }

    hideHelp() {
        this.target = null
        tickerRemove( this )
        this.parentContainer.removeChild( this )
        this.scale.x = this.scale.y = settings.maxScale
        this.isScaleUp = false
    }

    tick( time ) {
        const scaleStep = time.deltaMS * settings.scaleStep
        if (this.isScaleUp) {
            this.scale.x = this.scale.y = this.scale.x + scaleStep
            if (this.scale.x > settings.maxScale) {
                this.scale.x = this.scale.y = settings.maxScale
                this.isScaleUp = false
            }
        } else {
            this.scale.x = this.scale.y = this.scale.x - scaleStep
            if (this.scale.x < settings.minScale) {
                this.scale.x = this.scale.y = settings.minScale
                this.isScaleUp = true
            }
        }
    }
}

export default HelpFinger