import { AnimatedSprite } from "pixi.js"
import { sprites } from "../engine/loader"
import Smoke from "./Smoke"

class WindGenerator extends AnimatedSprite {
    constructor(parentBox) {
        super(sprites.wind_generator.animations.go)
        this.anchor.set(0.5, 1)
        this.position.set(parentBox.x, parentBox.y)
        this.scale.set(parentBox.scale.x)
        this.animationSpeed = 1
        this.play()
        
        this.sizeScale = parentBox.sizeScale
        this.offsetRate = {x: parentBox.offsetRate.x, y: parentBox.offsetRate.y}

        parentBox.parent.addChild(this)
        parentBox.parent.addChild( new Smoke(parentBox.x, parentBox.y, parentBox.scale.x))
        parentBox.destroy()
    }

    updateOnMap(mapScale, mapWidth, mapHeight) {
        this.scale.set(this.sizeScale * mapScale)
        this.position.set(this.offsetRate.x * mapWidth, this.offsetRate.y * mapHeight)
    }
}

export default WindGenerator