import { AnimatedSprite, Container, Graphics } from "pixi.js"
import { sprites } from "../engine/loader"
import { EventHub, events, startTurbo } from '../engine/events'

class TurboSwitch extends Container {
    constructor(state) {
        super()
        this.image = new AnimatedSprite(sprites.turbo_switch.animations[state]) // "ready", "active", "on", "off", "idle"
        this.image.animationSpeed = 0.5
        this.image.play()
        //this.gotoAndStop(0)
        this.image.anchor.set(0.5, 1)
        this.addChild(this.image)

        this.state = state

        this.clickArea = new Graphics()
        this.clickArea.rect(-64, -160, 128, 128)
        this.clickArea.fill('rgba(0, 0, 0, 0.001)')
        this.addChild(this.clickArea)

        this.clickArea.eventMode = 'static'
        this.clickArea.on('pointerdown', this.getClick.bind(this) )

        EventHub.on( events.stateUpdated, this.updateState.bind(this) )
        EventHub.on( events.stopTurbo, this.stopTurbo.bind(this) )
    }

    updateState(data) {
        if (this.state === "idle" && data.isTurboPanelReady) {
            this.state = 'ready'
            this.image.textures = sprites.turbo_switch.animations[this.state]
        }
    }

    getClick() {
        if (this.state !== 'ready') return

        this.state = "on"

        this.image.loop = false
        this.image.textures = sprites.turbo_switch.animations[this.state]
        this.image.gotoAndPlay(0)
        this.image.onComplete = () => {
            this.state = 'active'

            this.image.loop = true
            this.image.textures = sprites.turbo_switch.animations[this.state]
            this.image.gotoAndPlay(0)
        }

        startTurbo()
    }

    stopTurbo() {
        this.state = "off"

        this.image.loop = false
        this.image.textures = sprites.turbo_switch.animations[this.state]
        this.image.gotoAndPlay(0)
        this.image.onComplete = () => {
            this.state = 'idle'

            this.image.loop = true
            this.image.textures = sprites.turbo_switch.animations[this.state]
            this.image.gotoAndPlay(0)
        }
    }
}

export default TurboSwitch