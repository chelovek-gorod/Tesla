import { Container, AnimatedSprite } from "pixi.js"
import { sprites } from "../engine/loader"
import { EventHub, events, drawCharge } from '../engine/events'
import Smoke from "./Smoke"

class TimeMachine extends Container {
    constructor(sizeScale, offsetRate, isOnBuild = true) {
        super()

        this.isOnBuild = isOnBuild
        this.mainIndex = 0
        this.lightningCount = 1
        this.drawScale = sizeScale

        this.tower = new AnimatedSprite(sprites.time_machine.animations.go)
        this.tower.animationSpeed = 1
        if (this.isOnBuild === false) {
            this.tower.gotoAndStop(this.mainIndex)
            this.addChild(this.tower)
        }

        this.lamps = new AnimatedSprite(sprites.time_machine_lamps.animations.go)
        this.lamps.position.set(-44, -88)
        this.lamps.animationSpeed = 0
        if (this.isOnBuild === false) {
            this.lamps.gotoAndStop(6)
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

        this.lightning = { position: {x:0, y:0}, index: 0 }
        
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

            this.tower.gotoAndStop(this.mainIndex)
            this.addChild(this.tower)

            this.lamps.gotoAndStop(this.mainIndex)
            this.addChild(this.lamps)

            this.progress.gotoAndStop(this.mainIndex)
            this.addChild(this.progress)
        } else {
            this.base.gotoAndStop(this.mainIndex)
        }
    }

    updateLevel() {
        if (this.isOnBuild) this.build()
    }

    getClick() {
        if (this.isOnBuild) return

        this.mainIndex++
        if (this.mainIndex > 31) this.mainIndex = 0
        this.progress.gotoAndStop(this.mainIndex)

        drawCharge({point: this.lightning, count: this.lightningCount, scale: this.drawScale})
    }
 }

export default TimeMachine