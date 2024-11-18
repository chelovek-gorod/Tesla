import { Sprite } from "pixi.js"
import { sprites } from "../engine/loader"

class Wire extends Sprite {
    constructor(type, angle = 0, isMirror = false) {
        super(sprites[ type === 'a' ? 'wires_angle' : 'wires_line'])
        this.anchor.set(0.5)
        this.angle = angle
        if (isMirror) this.scale.x = -1
    }
}


export default Wire
