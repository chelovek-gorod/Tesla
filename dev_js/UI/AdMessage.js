import { Container, Graphics, Sprite, Text } from "pixi.js"
import { getAppScreen } from "../engine/application"
import { EventHub, events } from "../engine/events"
import { sceneAdd } from "../engine/application"
import { sprites } from "../engine/loader"
import { textStyles } from "../engine/fonts"

class AdMessage extends Container {
    constructor(message, clickText, image, clickCallback) {
        super()

        this.clickCallback = clickCallback

        this.bg = new Graphics()
        this.bg.alpha = 0.85
        this.addChild(this.bg)

        this.messageBox = new Graphics()
        this.messageBox.position.set( 0, 0 )
        this.addChild(this.messageBox)

        this.messageImage = new Sprite( sprites.ad_bonus.textures[image] )
        this.messageImage.anchor.set(0.5)
        this.messageImage.scale.set(0.5)
        this.messageImage.position.set( 0, -60 )
        this.addChild(this.messageImage)

        this.text = new Text({text: message, style: textStyles.adResultMessage})
        this.text.anchor.set(0.5)
        this.text.position.set( 0, 50 )
        this.addChild(this.text)

        this.button = new Graphics()
        this.button.position.set( 0, 0 )
        this.addChild(this.button)

        this.button.eventMode = 'static'
        this.button.on('pointerdown', this.close, this)

        this.buttonText = new Text({text: clickText, style: textStyles.adResultButton})
        this.buttonText.anchor.set(0.5)
        this.buttonText.position.set( 0, 120 )
        this.addChild(this.buttonText)

        EventHub.on( events.screenResize, this.screenResize, this )

        this.screenResize( getAppScreen() )

        sceneAdd(this)
    }

    screenResize( screenData ) {
        this.position.x = screenData.centerX
        this.position.y = screenData.centerY

        this.bg.clear()
        this.bg.rect(-screenData.centerX, -screenData.centerY, screenData.width, screenData.height)
        this.bg.fill(0x000000)

        this.messageBox.clear()
        this.messageBox.roundRect(-180, -160, 360, 320, 32)
        this.messageBox.fill(0xffffff)
        this.messageBox.stroke({ width: 6, color: 0xfff000 })

        this.button.clear()
        this.button.roundRect(-120, 100, 240, 40, 32)
        this.button.fill(0x00ff00)
        this.button.stroke({ width: 4, color: 0x000000 })
    }

    close() {
        this.button.off('pointerdown', this.close, this)
        EventHub.removeListener( events.screenResize, this.screenResize, this )
        this.clickCallback()
        this.destroy()
    }
}

export default AdMessage