import { AnimatedSprite, Container, Graphics } from "pixi.js"
import { sounds, sprites } from "../engine/loader"
import { EventHub, events, requestStartTurbo } from '../engine/events'
import { playSound, playVoice } from "../engine/sound"

class TurboSwitch extends Container {
    constructor(state, readyVoice, disabledVoice) {
        super()
        this.image = new AnimatedSprite(sprites.turbo_switch.animations[state])
        this.image.animationSpeed = 0.5
        this.image.play()

        this.image.anchor.set(0.5, 1)
        this.addChild(this.image)

        this.state = state // "ready", "active", "on", "off", "idle"
        this.readyVoice = readyVoice
        this.disabledVoice = disabledVoice

        this.clickArea = new Graphics()
        this.clickArea.rect(-64, -160, 128, 128)
        this.clickArea.fill('rgba(0, 0, 0, 0.001)')
        this.addChild(this.clickArea)

        this.clickArea.eventMode = 'static'
        this.clickArea.on('pointerdown', this.getClick.bind(this) )

        EventHub.on( events.responseStopTurbo, this.stopTurbo.bind(this) )
    }

    updateState(state) {
        if (state === this.state) return

        this.state = state
        switch (state) {
            case "ready":
                playVoice( this.readyVoice )

                this.image.textures = sprites.turbo_switch.animations[state]
                this.image.loop = true
                this.image.gotoAndPlay(0)
                break

            case "idle":
                this.image.loop = true
                this.image.textures = sprites.turbo_switch.animations[this.state]
                this.image.gotoAndPlay(0)
                break

            default:
                console.error(`TurboSwitch GET updateState WITH state: ${state}`)
        }
    }

    getClick() {
        if (this.state === 'idle') playVoice( this.disabledVoice )
        if (this.state !== 'ready') return playSound( sounds.sticks )

        this.state = "on"

        this.image.loop = false
        this.image.textures = sprites.turbo_switch.animations[this.state]
        this.image.gotoAndPlay(0)
        this.image.onComplete = () => {
            this.state = 'active'
            this.playAlarm()

            this.image.loop = true
            this.image.textures = sprites.turbo_switch.animations[this.state]
            this.image.gotoAndPlay(0)
        }

        requestStartTurbo()
        playSound( sounds.upgrade )
    }

    playAlarm() {
        if (this.state !== 'active') return

        playSound(sounds.alarm)
        setTimeout( () => this.playAlarm(), 1000)
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