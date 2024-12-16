import { Container, Graphics, Sprite, Text } from "pixi.js"
import { getAppScreen } from "../engine/application"
import { EventHub, events, requestAD } from '../engine/events'
import { sceneAdd } from "../engine/application"
import { sprites } from "../engine/loader"
import { textStyles } from "../engine/fonts"
import Yandex from "../Yandex/Yandex"
import { playVoice } from "../engine/sound"

class AdMessage extends Container {
    constructor(isLangRu, isTurboAvailable, energyBonus, callback, disableVoice) {
        super()

        this.eventMode = 'static'

        this.disableVoice = disableVoice

        this.isTurboAvailable = isTurboAvailable
        this.callback = callback

        this.bg = new Graphics()
        this.bg.alpha = 0.85
        this.addChild(this.bg)

        this.closeImage = new Sprite( sprites.close_button )
        this.closeImage.anchor.set(1, 0)
        this.closeImage.scale.set(0.5)
        this.closeImage.eventMode = 'static'
        this.closeImage.on('pointerdown', this.close, this)
        this.addChild(this.closeImage)

        this.energyImage = new Sprite( sprites.ad_screens.textures.energy )
        this.energyImage.anchor.set(0.5)
        this.energyImage.scale.set(0.5)
        this.energyImage.eventMode = 'static'
        this.energyImage.on('pointerdown', this.clickEnergy, this)
        this.addChild(this.energyImage)

        const eText = isLangRu
            ? `+ ${energyBonus}\nЭнергии\nза просмотр\nрекламы`
            : `+ ${energyBonus}\nEnergy\nfor watching\nadvertisements`
        this.energyText = new Text({text: eText, style: textStyles.adTypeOn})
        this.energyText.anchor.set(0.5)
        this.energyText.eventMode = 'none'
        this.addChild(this.energyText)

        this.turboImage = new Sprite( sprites.ad_screens.textures[isTurboAvailable ? 'turbo-on' : 'turbo-off'] )
        this.turboImage.anchor.set(0.5)
        this.turboImage.scale.set(0.5)
        this.turboImage.eventMode = 'static'
        this.turboImage.on('pointerdown', this.clickTurbo, this)
        this.addChild(this.turboImage)

        const tText = isLangRu
            ? (isTurboAvailable
                ? '+ 0.5 секунды\nк турбо режиму\nза просмотр\nрекламы'
                : 'Откроется\nсо 2-го уровня'
            )
            : (isTurboAvailable
                ? '+ 0.5 seconds\nto turbo mode\nfor watching\nadvertisements'
                : 'It opens\nat level 2'
            )
        this.turboText = new Text({text: tText, style: isTurboAvailable ? textStyles.adTypeOn : textStyles.adTypeOff})
        this.turboText.anchor.set(0.5)
        this.turboText.eventMode = 'none'
        this.addChild(this.turboText)

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

        this.closeImage.position.set(screenData.centerX, -screenData.centerY)

        this.energyImage.position.set(-95, 0)
        this.energyText.position.set(-95, -26)

        this.turboImage.position.set(95, 0)
        this.turboText.position.set(95, -26)

    }

    showAD(isBonus, isEnergy) {
        if (isBonus) requestAD(isEnergy)
        
        this.close(isBonus)
    }

    clickEnergy() {
        Yandex.showRewordAd( (isBonus) => this.showAD(isBonus, true) )
    }

    clickTurbo() {
        if (!this.isTurboAvailable) return playVoice(this.disableVoice)

        Yandex.showRewordAd( (isBonus) => this.showAD(isBonus, false) )
    }

    close(isBonus = false) {
        this.callback(isBonus)
        this.closeImage.off('pointerdown', this.close, this)
        this.energyImage.off('pointerdown', this.clickEnergy, this)
        this.turboImage.off('pointerdown', this.clickTurbo, this)
        EventHub.removeListener( events.screenResize, this.screenResize, this )
        this.destroy()
    }
}

export default AdMessage