import { Sprite } from "pixi.js"
import { EventHub, getDischarge } from "../engine/events"
import { sprites } from "../engine/loader"

const lightOffTimeout = 60 // MS

class LightningTower extends Sprite {
    constructor(sizeScale, offsetRate, canvasIndex, dischargeEventName, upgradeEventName, isActive = false) {
        super(sprites.lightning_tower.textures[isActive ? 'on' : 'off'])
        this.anchor.set(0.5, 1)

        this.lightning = { position: {x:0, y:0}, index: canvasIndex }
        this.isActive = isActive

        this.lightningCount = 1

        this.sizeScale = sizeScale
        this.offsetRate = {x: offsetRate.x, y: offsetRate.y}

        EventHub.on( dischargeEventName, this.discharge.bind(this))
        EventHub.on( upgradeEventName, this.upgrade.bind(this) )
    }

    updateOnMap(mapScale, mapWidth, mapHeight) {
        this.scale.set(this.sizeScale * mapScale)
        if (this.offsetRate.x < 0) this.scale.x *= -1
        this.position.set(this.offsetRate.x * mapWidth, this.offsetRate.y * mapHeight)
        this.lightning.position.x = this.position.x - 34 * this.scale.x
        this.lightning.position.y = this.position.y - 534 * this.scale.y
    }

    discharge() {
        if (!this.isActive) return

        getDischarge({point: this.lightning, count: this.lightningCount})
        this.texture = sprites.lightning_tower.textures.off
        setTimeout(() => this.texture = sprites.lightning_tower.textures.on, lightOffTimeout)
    }

    upgrade(data) {
        const digits = (data.toString()).length
        this.lightningCount = Math.ceil(digits / 3)
    }

    activate() {
        this.isActive = true
        this.texture = sprites.lightning_tower.textures.on, lightOffTimeout
    }
}

export default LightningTower