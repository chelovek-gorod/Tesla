import { Sprite } from "pixi.js"
import { EventHub, drawCharge } from "../engine/events"
import { sprites } from "../engine/loader"

const lightOffTimeout = 60 // MS

class LightningTower extends Sprite {
    // {scale, offsetRate, canvasIndex, dischargeEventName, upgradeEventName, isActive, lightningCount}
    constructor(initData) {
        super(sprites.lightning_tower.textures[initData.isActive ? 'on' : 'off'])
        this.anchor.set(0.5, 1)

        this.lightning = { position: {x:0, y:0}, index: initData.canvasIndex }
        this.isActive = initData.isActive

        this.lightningCount = initData.lightningCount

        this.sizeScale = initData.scale
        this.offsetRate = {x: initData.offsetRate.x, y: initData.offsetRate.y}

        EventHub.on( initData.dischargeEventName, this.discharge.bind(this) )
        EventHub.on( initData.upgradeEventName, (data) => this.lightningCount = data )
    }

    updateOnMap(mapScale, mapWidth, mapHeight) {
        this.drawScale = this.sizeScale * mapScale
        this.scale.set(this.drawScale)
        if (this.offsetRate.x < 0) this.scale.x *= -1
        this.position.set(this.offsetRate.x * mapWidth, this.offsetRate.y * mapHeight)
        this.lightning.position.x = this.position.x - 34 * this.scale.x
        this.lightning.position.y = this.position.y - 460 * this.scale.y
    }

    discharge() {
        if (!this.isActive) return

        if (this.texture === sprites.lightning_tower.textures.on) {
            this.texture = sprites.lightning_tower.textures.off
            const time = lightOffTimeout * this.lightningCount * this.lightningCount
            setTimeout(() => this.texture = sprites.lightning_tower.textures.on, time)
        }

        drawCharge({point: this.lightning, count: this.lightningCount, scale: this.drawScale})
    }

    activate() {
        this.isActive = true
        this.texture = sprites.lightning_tower.textures.on
    }
}

export default LightningTower