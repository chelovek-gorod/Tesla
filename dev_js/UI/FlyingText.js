import { Text } from 'pixi.js'
import { getAppScreen, tickerAdd, tickerRemove, sceneAdd, sceneRemove } from '../engine/application'
import { tick } from '../engine/functions'

const moveTime = 45000
const scaleRate = 0.5 / ((moveTime / 2) / tick)
const startTime = moveTime / 4
const alphaAdd = 1 / (startTime / tick)
const alphaSub = alphaAdd * 2

class FlyingText extends Text {
    // { text style }
    constructor(textSettings) {
        super(textSettings)
        this.anchor.set(0.5)
        this.scale.x = 0.5
        this.scale.y = 0.5
        this.alpha = 0

        const screenData = getAppScreen()

        this.position.x = screenData.centerX
        this.position.y = screenData.centerY
        const halfBoardSize = screenData.centerY
        this.halfPath = halfBoardSize / 2
        this.speed = halfBoardSize / (moveTime / tick)
        tickerAdd(this)
        sceneAdd(this)
    }

    tick( time ) {
        this.position.y -= this.speed * time.elapsedMS
        this.scale.x = this.scale.y = this.scale.x += scaleRate * time.elapsedMS
        if (this.position.y > this.halfPath) this.alpha += alphaAdd * time.elapsedMS
        else {
            this.alpha -= alphaSub * time.elapsedMS
            if (this.alpha < 0) {
                tickerRemove(this)
                sceneRemove(this)
                this.destroy()
            }
        }
    }
}

export default FlyingText