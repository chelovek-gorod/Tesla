import { Container, Graphics } from "pixi.js"
import { getAppScreen } from "../engine/application"
import { EventHub, events } from "../engine/events"
import { sceneAdd } from "../engine/application"

class FullScreenMessage extends Container {
    constructor(message, timeout, clickCallback) {
        super()
        this.bg = new Graphics()
        this.bg.alpha = 0.85
        this.addChild(this.bg)
        this.text = message
        this.text.anchor.set(0.5)
        this.addChild(this.text)

        this.eventMode = 'static'
        this.on('pointerdown', () => clickCallback() )

        EventHub.on( events.screenResize, this.screenResize, this )

        this.screenResize( getAppScreen() )

        sceneAdd(this)

        if (timeout) setTimeout( () => {
            this.destroy()
            EventHub.removeListener( events.screenResize, this.screenResize, this )
        }, timeout )
    }

    screenResize( screenData ) {
        this.position.x = screenData.centerX
        this.position.y = screenData.centerY

        this.bg.clear()
        this.bg.rect(-screenData.centerX, -screenData.centerY, screenData.width, screenData.height)
        this.bg.fill(0x000000)

        if (this.text.width > screenData.width * 0.9) this.text.style.fontSize = 22
        else this.text.style.fontSize = 36
    }
}

export default FullScreenMessage