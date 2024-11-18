import { Container } from "pixi.js"
import Moon from "./Moon"
import NightSky from "./nightSky"
import Terrain from "./Terrain"

class Background extends Container {
    constructor( screenData ) {
        super()
        
        this.addChild( new NightSky(screenData) )
        this.addChild( new Moon(screenData) )
        this.addChild( new Terrain(screenData) )
    }
}

export default Background