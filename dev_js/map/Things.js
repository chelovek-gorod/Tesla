import { Sprite } from "pixi.js"
import { sprites } from "../engine/loader"

class Thing extends Sprite {
    constructor(spriteName, sizeScale, offsetRate, isReverse = false) {
        super(sprites[spriteName])
        this.anchor.set(0.5, 1)

        this.sizeScale = sizeScale
        this.offsetRate = {x: offsetRate.x, y: offsetRate.y}

        this.isReverse = isReverse
    }

    updateOnMap(mapScale, mapWidth, mapHeight) {
        this.scale.set(this.sizeScale * mapScale)
        if (this.isReverse) this.scale.x *= -1
        this.position.set(this.offsetRate.x * mapWidth, this.offsetRate.y * mapHeight)
    }
}

export default Thing