import { Container, AnimatedSprite, Sprite } from "pixi.js"
import { sprites } from "../engine/loader"
import { EventHub, events } from '../engine/events'
import Smoke from './Smoke'

/*
214x476px

top 214x244px
bot 214x232px
*/

class TeslaTower extends Container {
    constructor(sizeScale, offsetRate) {
        super()

        this.tower = new AnimatedSprite(sprites.tesla_tower.animations.go)
        this.tower.animationSpeed = 1
        this.tower.play()
        this.tower.position.set(0, -232)
        this.addChild(this.tower)

        this.base = new Sprite(sprites.tesla_tower.textures.base)
        this.base.position.set(0, 0)
        this.addChild(this.base)

        this.energy = new AnimatedSprite(sprites.energy.animations.go)
        this.energy.animationSpeed = 1
        this.energy.play()
        this.energy.scale.set(1.5)
        this.energy.position.set(0, -360)
        this.addChild(this.energy)

        this.lightning = { position: {x:0, y:0} }
        
        this.sizeScale = sizeScale
        this.offsetRate = {x: offsetRate.x, y: offsetRate.y}

        //EventHub.on( events.getDischarge, this.getDischarge.bind(this))
    }

    updateOnMap(mapScale, mapWidth, mapHeight) {
        this.scale.set(this.sizeScale * mapScale)
        this.position.set(this.offsetRate.x * mapWidth, this.offsetRate.y * mapHeight)
        this.lightning.position.x = this.position.x
        this.lightning.position.y = this.position.y - 320 * mapScale

        this.globalPoint = this.getGlobalPosition()
        this.globalPoint.x -= 34 * mapScale
        this.globalPoint.y -= 534 * mapScale
    }
}

export default TeslaTower