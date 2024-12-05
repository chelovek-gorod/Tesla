import { Sprite, Text } from "pixi.js"
import { sprites } from "../engine/loader"
import { textStyles } from '../engine/fonts'
import Yandex from "../Yandex/Yandex"
import FullScreenMessage from "./fullScreenMessage"


class RestartButton extends Sprite {
    constructor(text) {
        super(sprites.restart_button)
        this.anchor.set(0, 0)

        this.isActive = true

        this.text = text

        this.eventMode = 'static'
        this.on('pointerdown', this.getClick.bind(this) )
    }

    getClick() {
        new FullScreenMessage(
            new Text({ text: this.text, style: textStyles.message }),
            6000,
            this.restart.bind(this)
        )
    }

    restart() {
        Yandex.stopAutoSave()
        Yandex.clearSave( () => location.reload() )
    }
}

export default RestartButton