import { Sprite, Container, Graphics } from "pixi.js"
import { sounds, sprites } from "../engine/loader"
import { playSound, playVoice } from "../engine/sound"

class Panel extends Container {
    constructor(action, isOn, readyVoice, disabledVoice) {
        super()
        this.image = new Sprite(sprites.panel.textures[isOn ? 'on' : 'off'])
        this.image.anchor.set(0.5, 1)
        this.addChild(this.image)

        this.action = action
        this.isOn = isOn
        this.readyVoice = readyVoice
        this.disabledVoice = disabledVoice

        this.clickArea = new Graphics()
        this.clickArea.rect(-152, -124, 180, 64)
        this.clickArea.fill('rgba(0, 0, 0, 0.001)')
        this.addChild(this.clickArea)

        this.clickArea.eventMode = 'static'
        this.clickArea.on('pointerdown', this.getClick.bind(this) )
    }

    activation(isOn) {
        if (this.isOn === isOn) return
        
        this.isOn = isOn
        this.image.texture = sprites.panel.textures[isOn ? 'on' : 'off']
        playVoice( this.readyVoice )
    }

    getClick() {
        if (!this.isOn) {
            playSound( sounds.sticks )
            playVoice( this.disabledVoice )
            return
        }

        this.isOn = false
        this.image.texture = sprites.panel.textures.off
        this.action()

        playSound( sounds.upgrade )
    }
}

export default Panel