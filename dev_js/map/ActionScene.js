import { Container, Graphics } from "pixi.js"
import { EventHub, events } from '../engine/events'
import LightningTower from "./LightningTower"
import TeslaTower from "./TeslaTower"
import WindGenerator from "./WindGenerator"
import { controlSizeH, controlSizeV, controlHeightH, controlHeightV,
    mapRate, mapMaxScreenHeightRate } from "../constants"
import { drawLightning } from "../engine/functions"
import { tickerAdd } from "../engine/application"
import Thing from "./Things"
import { playSound } from "../engine/sound"
import { sounds } from "../engine/loader"
import RotorGenerator from "./RotorGenerator"

class ActionScene extends Container {
    constructor( screenData ) {
        super()

        this.lightnings = []

        this.rgReserve = 3
        this.wgReserve = 3

        // test area
        //this.backRect = new Graphics()
        //this.addChild(this.backRect)

        this.car2 = new Thing('broken_car', 0.5, {x: -0.42, y: -0.9})
        this.addChild(this.car2)

        this.cube2 = new Thing('euro_cube', 0.6, {x: 0.35, y: -0.9})
        this.addChild(this.cube2)

        this.bbRG3 = new Thing('building_box', 0.5, {x: 0.18, y: -0.9})
        this.bbRG3.eventMode = 'static'
        this.bbRG3.on('pointerdown', () => this.bbRG3 = new RotorGenerator(this.bbRG3) )
        this.addChild(this.bbRG3)
        this.RG3LT = new LightningTower(0.55, {x: 0.25, y: -0.85}, 1, events.getClick, events.updateClickPanel)
        this.addChild(this.RG3LT)
        
        this.WG3LT = new LightningTower(0.65, {x: -0.33, y: -0.75}, 1, events.getAuto, events.updateAutoPanel)
        this.addChild(this.WG3LT)
        this.bbWG3 = new Thing('building_box', 0.7, {x: -0.25, y: -0.7})
        this.bbWG3.eventMode = 'static'
        this.bbWG3.on('pointerdown', () => this.bbWG3 = new WindGenerator(this.bbWG3) )
        this.addChild(this.bbWG3)

        this.RG2LT = new LightningTower(0.8, {x: -0.52, y: -0.55}, 1, events.getClick, events.updateClickPanel)
        this.addChild(this.RG2LT)
        this.bbRG2 = new Thing('building_box', 0.85, {x: -0.42, y: -0.45})
        this.bbRG2.eventMode = 'static'
        this.bbRG2.on('pointerdown', () => this.bbRG2 = new RotorGenerator(this.bbRG2) )
        this.addChild(this.bbRG2)

        this.WG2LT = new LightningTower(0.78, {x: 0.52, y: -0.52}, 1, events.getAuto, events.updateAutoPanel)
        this.addChild(this.WG2LT)
        this.bbWG2 = new Thing('building_box', 0.78, {x: 0.42, y: -0.5})
        this.bbWG2.eventMode = 'static'
        this.bbWG2.on('pointerdown', () => this.bbWG2 = new WindGenerator(this.bbWG2) )
        this.addChild(this.bbWG2)

        this.WG1LT = new LightningTower(0.85, {x: -0.16, y: -0.22}, 0, events.getAuto, events.updateAutoPanel)
        this.addChild(this.WG1LT)
        this.bbWG1 = new Thing('building_box', 0.9, {x: -0.28, y: -0.15})
        this.bbWG1.eventMode = 'static'
        this.bbWG1.on('pointerdown', () => this.bbWG1 = new WindGenerator(this.bbWG1) )
        this.addChild(this.bbWG1)

        this.RG1LT = new LightningTower(0.85, {x: 0.32, y: -0.25}, 1, events.getClick, events.updateClickPanel)
        this.addChild(this.RG1LT)
        this.bbRG1 = new Thing('building_box', 0.9, {x: 0.25, y: -0.2})
        this.bbRG1.eventMode = 'static'
        this.bbRG1.on('pointerdown', () => this.bbRG1 = new RotorGenerator(this.bbRG1) )
        this.addChild(this.bbRG1)

        this.lightningCanvasSecond = new Graphics()
        this.lightningCanvasSecond.lineWidth = 1
        this.addChild(this.lightningCanvasSecond)

        this.teslaTower = new TeslaTower(0.9, {x: 0, y: -0.35})
        this.addChild(this.teslaTower)

        this.transformer = new Thing('transformer', 1, {x: -0.075, y: 0})
        this.addChild(this.transformer)

        this.lightningCanvasFirst = new Graphics()
        this.lightningCanvasFirst.lineWidth = 2
        this.addChild(this.lightningCanvasFirst)

        this.mainButtonLT = new LightningTower(1, {x: 0.15, y: 0}, 0, events.getClick, events.updateClickPanel, true)
        this.addChild(this.mainButtonLT)

        this.car1 = new Thing('broken_car', 1, {x: 0.5, y: -0.08})
        this.addChild(this.car1)

        this.cube1 = new Thing('euro_cube', 1, {x: -0.55, y: 0})
        this.addChild(this.cube1)
        
        this.screenResize( screenData )
        EventHub.on( events.screenResize, this.screenResize.bind(this) )
        EventHub.on( events.getDischarge, this.lightning.bind(this))

        EventHub.on( events.updateAutoPanel, this.updateAutoPanel.bind(this) )

        this.canvases = [this.lightningCanvasFirst, this.lightningCanvasSecond]
        tickerAdd(this)
    }

    screenResize(screenData) {
        let UIScale, UIScaledHeight, mapWidth, mapHeight, mapScale, mapScaleRate
        if (screenData.width > screenData.height) {
            UIScale = controlSizeH > screenData.width ? screenData.width / controlSizeH : 1
            UIScaledHeight = controlHeightH * UIScale

            this.position.x = screenData.centerX
            this.position.y = screenData.height - UIScaledHeight * 0.6

            mapScaleRate = screenData.width / 2024
        } else {
            UIScale = controlSizeV > screenData.width ? screenData.width / controlSizeV : 1
            UIScaledHeight = controlHeightV * UIScale

            this.position.x = screenData.centerX
            this.position.y = screenData.height - UIScaledHeight * 0.75

            mapScaleRate = screenData.width / 1368
        }
        mapHeight = mapRate * screenData.width
        const mapMaxHeight = screenData.height * mapMaxScreenHeightRate
        if (mapHeight > mapMaxScreenHeightRate) mapHeight = mapMaxHeight

        mapScale = (mapScaleRate > 1) ? 1 : mapScaleRate
        
        mapHeight = mapHeight * 1.2
        mapWidth = screenData.width * 0.8

        // test area
        // this.backRect.clear()
        // this.backRect.rect( -mapWidth * 0.5, -mapHeight, mapWidth, mapHeight )
        // this.backRect.fill('#00ff00')

        this.mainButtonLT.updateOnMap(mapScale, mapWidth, mapHeight)
        this.teslaTower.updateOnMap(mapScale, mapWidth, mapHeight)

        this.car2.updateOnMap(mapScale, mapWidth, mapHeight)
        this.cube2.updateOnMap(mapScale, mapWidth, mapHeight)
        this.car1.updateOnMap(mapScale, mapWidth, mapHeight)
        this.cube1.updateOnMap(mapScale, mapWidth, mapHeight)

        this.transformer.updateOnMap(mapScale, mapWidth, mapHeight)

        this.bbRG3.updateOnMap(mapScale, mapWidth, mapHeight)
        this.RG3LT.updateOnMap(mapScale, mapWidth, mapHeight)

        this.bbRG2.updateOnMap(mapScale, mapWidth, mapHeight)
        this.RG2LT.updateOnMap(mapScale, mapWidth, mapHeight)

        this.bbRG1.updateOnMap(mapScale, mapWidth, mapHeight)
        this.RG1LT.updateOnMap(mapScale, mapWidth, mapHeight)

        this.bbWG3.updateOnMap(mapScale, mapWidth, mapHeight)
        this.WG3LT.updateOnMap(mapScale, mapWidth, mapHeight)

        this.bbWG2.updateOnMap(mapScale, mapWidth, mapHeight)
        this.WG2LT.updateOnMap(mapScale, mapWidth, mapHeight)

        this.bbWG1.updateOnMap(mapScale, mapWidth, mapHeight)
        this.WG1LT.updateOnMap(mapScale, mapWidth, mapHeight)
    }

    updateAutoPanel(data) {
        // data perSecond
        if (this.wgReserve > 2) {
            this.wgReserve--

            this.WG3LT.activate()
            this.bbWG3 = new WindGenerator(this.bbWG3)
        } else if (this.wgReserve > 1 && data > 999) {
            this.wgReserve--

            this.WG2LT.activate()
            this.bbWG2 = new WindGenerator(this.bbWG2)
        } else if (this.wgReserve > 0 && data > 999999) {
            this.wgReserve--

            this.WG1LT.activate()
            this.bbWG1 = new WindGenerator(this.bbWG1)
        }
    }

    lightning(data) {
        playSound(sounds.charge)
        this.lightnings = this.lightnings.concat( Array(data.count).fill(data.point) )
    }

    tick() {
        this.lightningCanvasSecond.clear()
        this.lightningCanvasFirst.clear()
        while (this.lightnings.length > 0) {
            const point = this.lightnings.pop()
            drawLightning(point, this.teslaTower.lightning, this.canvases[point.index])
        }
    }
}

export default ActionScene
