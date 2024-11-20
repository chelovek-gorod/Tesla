import { AnimatedSprite } from "pixi.js"
import { EventHub, events } from "../engine/events"
import { sprites } from "../engine/loader"
import Smoke from "./Smoke"

class RotorGenerator extends AnimatedSprite {
    constructor(parentBox, isActive) {
        super(sprites.rotor_generator.animations.go)
        this.anchor.set(0.5, 1)
        this.position.set(parentBox.x, parentBox.y)
        this.scale.set(parentBox.scale.x)
        this.animationSpeed = 1
        isActive ? this.play() : this.stop()
        
        this.sizeScale = parentBox.sizeScale
        this.offsetRate = {x: parentBox.offsetRate.x, y: parentBox.offsetRate.y}

        parentBox.parent.addChild(this)
        parentBox.parent.addChild( new Smoke(parentBox.position, parentBox.scale.x * 2, true))
        parentBox.destroy()

        EventHub.on( events.requestStartTurbo, () => this.play() )
        EventHub.on( events.responseStopTurbo, () => this.stop() )
    }

    updateOnMap(mapScale, mapWidth, mapHeight) {
        this.scale.set(this.sizeScale * mapScale)
        this.position.set(this.offsetRate.x * mapWidth, this.offsetRate.y * mapHeight)
    }
}

export default RotorGenerator