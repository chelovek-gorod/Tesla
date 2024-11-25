import { Sprite } from "pixi.js"
import { sprites } from "../engine/loader"
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
        new FullScreenMessage(this.text, 6000, this.restart.bind(this))
    }

    restart() {
        Yandex.stopAutoSave()
        Yandex.clearSave( () => location.reload() )
    }
}

export default RestartButton