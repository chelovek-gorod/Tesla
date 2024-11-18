import { Sprite, Container, Graphics } from "pixi.js"
import { sprites } from "../engine/loader"
import { EventHub, events } from '../engine/events'

class Panel extends Container {
    constructor(trigger, action, isOn = false) {
        super()
        this.image = new Sprite(sprites.panel.textures[isOn ? 'on' : 'off'])
        this.image.anchor.set(0.5, 1)
        this.addChild(this.image)

        this.trigger = trigger
        this.action = action
        this.isOn = isOn

        this.clickArea = new Graphics()
        this.clickArea.rect(-152, -124, 180, 64)
        this.clickArea.fill('rgba(0, 0, 0, 0.001)')
        this.addChild(this.clickArea)

        this.clickArea.eventMode = 'static'
        this.clickArea.on('pointerdown', this.getClick.bind(this) )

        EventHub.on( events.stateUpdated, this.updatePanelState.bind(this) )
    }

    updatePanelState(data) {
        if (this.isOn === data[this.trigger]) return
        
        this.isOn = !this.isOn
        this.image.texture = sprites.panel.textures[this.isOn ? 'on' : 'off']
    }

    getClick() {
        if (!this.isOn) return

        this.isOn = false
        this.image.texture = sprites.panel.textures.off
        this.action()
    }
}


export default Panel
