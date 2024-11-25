import { Container, AnimatedSprite } from "pixi.js"
import { sounds, sprites, voices } from "../engine/loader"
import { EventHub, events, drawCharge, timeAcceleration,
    drawSkyCharge, setAdButtonAvailable } from '../engine/events'
import Smoke from "./Smoke"
import { tickerAdd, tickerRemove } from "../engine/application"
import { playSound, playVoice } from "../engine/sound"

const lampFrames = 7
const energyFrames = 32
const buildLevel = 5

const timeAccelerationTimeout = 10 * 1000

class TimeMachine extends Container {
    // settings = {lightnings, lamps, level}
    constructor(sizeScale, offsetRate, settings, timeMachineVoices) {
        super()

        this.voiceBuild1 = timeMachineVoices.build1
        this.voiceBuild2 = timeMachineVoices.build2
        this.voiceStart = timeMachineVoices.start

        this.isOnBuild = settings.level < buildLevel ? true : false
        this.mainIndex = settings.level < buildLevel ? settings.level - 1 : 0
        this.lightningCount = settings.lightnings
        this.drawScale = sizeScale

        this.activeLamps = settings.lamps

        this.isActive = false

        this.tower = new AnimatedSprite(sprites.time_machine.animations.on)
        this.tower.animationSpeed = 0
        this.tower.loop = false
        if (this.isOnBuild === false) {
            this.tower.gotoAndStop(0)
            this.addChild(this.tower)
        }

        this.lamps = new AnimatedSprite(sprites.time_machine_lamps.animations.go)
        this.lamps.position.set(-44, -88)
        this.lamps.animationSpeed = 0
        if (this.isOnBuild === false) {
            this.lamps.gotoAndStop(this.activeLamps)
            this.addChild(this.lamps)
        }

        this.progress = new AnimatedSprite(sprites.time_machine_progress.animations.go)
        this.progress.position.set(-44, -88)
        this.progress.animationSpeed = 0
        if (this.isOnBuild === false) {
            this.progress.gotoAndStop(0)
            this.addChild(this.progress)
        }

        if (this.isOnBuild) {
            this.base = new AnimatedSprite(sprites.time_machine_base.animations.go)
            this.base.animationSpeed = 0
            this.base.gotoAndStop(this.mainIndex)
            this.base.position.set(0, 0)
            this.addChild(this.base)
        }

        this.lightning = { position: {x:0, y:0}, index: 1 }
        
        this.sizeScale = sizeScale
        this.offsetRate = {x: offsetRate.x, y: offsetRate.y}

        EventHub.on( events.updateUILevel, this.updateLevel.bind(this) )
        EventHub.on( events.getClick, this.getClick.bind(this) )
    }

    updateOnMap(mapScale, mapWidth, mapHeight) {
        this.drawScale = this.sizeScale * mapScale
        this.scale.set(this.drawScale)

        this.position.set(this.offsetRate.x * mapWidth, this.offsetRate.y * mapHeight)
        this.lightning.position.x = this.position.x + 50 * this.scale.x
        this.lightning.position.y = this.position.y - 518 * this.scale.y
    }

    build() {
        this.parent.addChild( new Smoke(this.position, this.scale.x * 2, true))

        this.mainIndex++
        if (this.mainIndex > 3) {
            this.mainIndex = 0
            this.isOnBuild = false
            this.removeChild(this.base)

            this.tower.gotoAndStop(0)
            this.addChild(this.tower)

            this.lamps.gotoAndStop(0)
            this.addChild(this.lamps)

            this.progress.gotoAndStop(0)
            this.addChild(this.progress)

            playVoice(voices[this.voiceBuild1])
            playVoice(voices[this.voiceBuild2])
        } else {
            this.base.gotoAndStop(this.mainIndex)
        }
    }

    updateLevel() {
        if (this.isOnBuild) this.build()
    }

    getClick() {
        if (this.isOnBuild || this.isActive) return

        this.mainIndex++
        if (this.mainIndex === energyFrames) {
            this.mainIndex = 0
            this.activeLamps++
            if( this.activeLamps === lampFrames ) {
                this.activeLamps = 0
                this.activation()
            }
            this.lamps.gotoAndStop(this.activeLamps)
        }
        this.progress.gotoAndStop(this.mainIndex)

        drawCharge({point: this.lightning, count: this.lightningCount, scale: this.drawScale})
    }

    activation() {
        setAdButtonAvailable(true)
        playVoice(voices[this.voiceStart])
        this.isActive = true
        this.tower.animationSpeed = 0.5
        this.tower.gotoAndPlay(0)
        this.tower.onComplete = () => {
            timeAcceleration(this.isActive)
            setTimeout( () => this.deactivation(), timeAccelerationTimeout )
            tickerAdd(this)

            playSound(sounds.se_time_acc)
            setTimeout( () => this.checkSound(), 2000 )
        }
    }

    checkSound() {
        if (!this.isActive) return

        playSound(sounds.se_time_acc)
        setTimeout( () => this.checkSound(), 2000 )
    }

    deactivation() {
        this.isActive = false
        timeAcceleration(this.isActive)
        tickerRemove(this)
        this.tower.textures = sprites.time_machine.animations.off
        this.tower.gotoAndPlay(0)
        this.tower.onComplete = () => {
            setAdButtonAvailable(false)
            timeAcceleration(this.isActive)
            this.tower.animationSpeed = 0
            this.tower.textures = sprites.time_machine.animations.on
            this.tower.gotoAndStop(0)
        }
    }

    tick(time) {
        drawSkyCharge({point: this.lightning, count: this.lightningCount, scale: this.drawScale})
    }
 }

export default TimeMachine