import { Container, Graphics } from "pixi.js"
import { tickerAdd, tickerRemove } from "../engine/application"

const width = 240
const height = 60
const alphaMax = 0.75
const alphaStep = 0.0075
const scaleStep = 0.98

class Line extends Graphics {
    constructor(timeout) {
        super()
        this.drawWidth = width
        this.drawHeight = height
        this.drawAlpha = 0
        this.timeout = timeout
        this.isOut = false
    }

    draw(delta) {
        this.timeout -= delta
        if (this.timeout > 0) return

        this.clear()
        this.rect( -this.drawWidth * 0.5, -this.drawHeight * 0.5, this.drawWidth, this.drawHeight )
        this.stroke({ width: 3, color: '#00ff00', alpha: this.drawAlpha })

        this.drawWidth *= scaleStep
        this.drawHeight *= scaleStep
        this.drawAlpha += (this.isOut) ? -alphaStep : alphaStep * 10
        if (this.drawAlpha >= alphaMax) this.isOut = true
        if (this.drawAlpha <= 0) this.destroy()
    }
}

class Pointer extends Container {
    constructor( point ) {
        super()

        this.addChild( new Line(0) )
        this.addChild( new Line(700) )
        this.addChild( new Line(1200) )

        this.position.x = point.x
        this.position.y = point.y

        tickerAdd(this)
    }

    tick(time) {
        this.children.forEach( line => line.draw(time.elapsedMS) )
        if (this.children.length === 0) {
            tickerRemove(this)
            this.destroy()
        }
    }
}

export default Pointer