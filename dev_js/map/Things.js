import { Sprite } from "pixi.js"
import { sprites } from "../engine/loader"

class Thing extends Sprite {
    constructor(spriteName, sizeScale, offsetRate) {
        super(sprites[spriteName])
        this.anchor.set(0.5, 1)

        this.sizeScale = sizeScale
        this.offsetRate = {x: offsetRate.x, y: offsetRate.y}
    }

    updateOnMap(mapScale, mapWidth, mapHeight) {
        this.scale.set(this.sizeScale * mapScale)
        this.position.set(this.offsetRate.x * mapWidth, this.offsetRate.y * mapHeight)
    }
}

export default Thing