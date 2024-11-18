import { Sprite } from "pixi.js"
import { sprites } from "../engine/loader"

class LevelPanel extends Sprite {
    constructor() {
        super(sprites.level_panel)
        this.anchor.set(0.5, 1)
    }
}


export default LevelPanel
