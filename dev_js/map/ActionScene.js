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
import RotorGenerator from "./RotorGenerator"
import Smoke from './Smoke'
import Sparks from "./Sparks"
import SpyBot from "./SpyBot"
import { voices } from "../engine/loader"

// 0 - no effect (95%); 1 - sparks(2%); 2 - sparks and smoke (3%)
const effects = Array(100).fill(0).fill(1, 95).fill(2, 97)
effects.sort(() => Math.random() - 0.5)
let effectIndex = Math.floor( Math.random() * effects.length )
function getEffect() {
    effectIndex++
    if (effectIndex === effects.length) effectIndex = 0
    return effects[effectIndex]
}

class ActionScene extends Container {
    constructor( screenData, state, isLangRu ) {
        super()

        this.state = state

        this.lightnings = []

        this.rgReserve = state.turboOpenBuildings
        this.wgReserve = state.autoOpenBuildings

        // test area
        //this.backRect = new Graphics()
        //this.addChild(this.backRect)

        this.car = new Thing('broken_car', 0.7, {x: -0.36, y: -0.6})
        this.addChild(this.car)

        this.cube = new Thing('euro_cube', 0.6, {x: 0.12, y: -0.9})
        this.addChild(this.cube)

        // right
        const initDataRG1LT = {
            scale: 0.55,
            offsetRate: {x: 0.38, y: -0.85},
            canvasIndex: 1,
            dischargeEventName: events.setTurboCharge,
            upgradeEventName: events.updateTowerTurbo,
            isActive: false,
            lightningCount: state.turboLightnings
        }
        this.RG1LT = new LightningTower(initDataRG1LT)
        this.addChild(this.RG1LT)
        this.bbRG1 = new Thing('building_box', 0.6, {x: 0.3, y: -0.8})
        this.addChild(this.bbRG1)
        
        // left
        const initDataWG1LT = {
            scale: 0.65,
            offsetRate: {x: -0.25, y: -0.8},
            canvasIndex: 1,
            dischargeEventName: events.setAutoCharge,
            upgradeEventName: events.updateTowerAuto,
            isActive: false,
            lightningCount: state.autoLightnings
        }
        this.WG1LT = new LightningTower(initDataWG1LT)
        this.addChild(this.WG1LT)
        this.bbWG1 = new Thing('building_box', 0.7, {x: -0.18, y: -0.7})
        this.addChild(this.bbWG1)

        // left
        const initDataRG2LT = {
            scale: 0.8,
            offsetRate: {x: -0.52, y: -0.25},
            canvasIndex: 0,
            dischargeEventName: events.setTurboCharge,
            upgradeEventName: events.updateTowerTurbo,
            isActive: false,
            lightningCount: state.turboLightnings
        }
        this.RG2LT = new LightningTower(initDataRG2LT)
        this.addChild(this.RG2LT)
        this.bbRG2 = new Thing('building_box', 0.85, {x: -0.42, y: -0.2})
        this.addChild(this.bbRG2)

        // right
        const initDataWG2LT = {
            scale: 0.7,
            offsetRate: {x: 0.55, y: -0.55},
            canvasIndex: 1,
            dischargeEventName: events.setAutoCharge,
            upgradeEventName: events.updateTowerAuto,
            isActive: false,
            lightningCount: state.autoLightnings
        }
        this.WG2LT = new LightningTower(initDataWG2LT)
        this.addChild(this.WG2LT)
        this.bbWG2 = new Thing('building_box', 0.9, {x: 0.42, y: -0.4})
        this.addChild(this.bbWG2)

        this.lightningCanvasSecond = new Graphics()
        this.lightningCanvasSecond.lineWidth = 1
        this.addChild(this.lightningCanvasSecond)

        this.teslaTower = new TeslaTower(0.9, {x: 0, y: -0.35})
        this.addChild(this.teslaTower)

        this.transformer = new Thing('transformer', 1, {x: -0.08, y: 0.1})
        this.addChild(this.transformer)

        this.lightningCanvasFirst = new Graphics()
        this.lightningCanvasFirst.lineWidth = 2
        this.addChild(this.lightningCanvasFirst)

        const initDataButtonLT = {
            scale: 1,
            offsetRate: {x: 0.25, y: 0.1},
            canvasIndex: 0,
            dischargeEventName: events.getClick,
            upgradeEventName: events.updateTowerClick,
            isActive: true,
            lightningCount: state.clickLightnings
        }
        this.mainButtonLT = new LightningTower(initDataButtonLT)
        this.addChild(this.mainButtonLT)

        const spyDetectedVoice = isLangRu ? voices.ru_spy : voices.en_spy
        const spyFirstVoice = isLangRu ? voices.ru_spy_kill : voices.en_spy_kill
        const stateHelpRemove = (this.state.help.has('spy')) ? () => this.state.help.delete('spy') : null
        this.spyBot = new SpyBot(spyDetectedVoice, spyFirstVoice, stateHelpRemove)
        this.addChild(this.spyBot)
        
        this.screenResize( screenData )
        EventHub.on( events.screenResize, this.screenResize.bind(this) )

        EventHub.on( events.updateBuildingAuto, this.updateBuildingAuto.bind(this) )
        EventHub.on( events.updateBuildingTurbo, this.updateBuildingTurbo.bind(this) )

        EventHub.on( events.drawCharge, this.lightning.bind(this))
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

        this.car.updateOnMap(mapScale, mapWidth, mapHeight)
        this.cube.updateOnMap(mapScale, mapWidth, mapHeight)

        this.transformer.updateOnMap(mapScale, mapWidth, mapHeight)

        this.bbRG1.updateOnMap(mapScale, mapWidth, mapHeight)
        this.RG1LT.updateOnMap(mapScale, mapWidth, mapHeight)

        this.bbRG2.updateOnMap(mapScale, mapWidth, mapHeight)
        this.RG2LT.updateOnMap(mapScale, mapWidth, mapHeight)

        this.bbWG1.updateOnMap(mapScale, mapWidth, mapHeight)
        this.WG1LT.updateOnMap(mapScale, mapWidth, mapHeight)

        this.bbWG2.updateOnMap(mapScale, mapWidth, mapHeight)
        this.WG2LT.updateOnMap(mapScale, mapWidth, mapHeight)

        const spyBotBottomPoint = this.position.y - (this.position.y - mapHeight) * 0.5
        this.spyBot.updateOnMap(mapScale, mapWidth, -spyBotBottomPoint, -this.position.y)
    }

    lightning(data) {
        this.lightnings = this.lightnings.concat( Array(data.count).fill(data.point) )

        const effectSize = getEffect()
        if (effectSize > 0) this.addChild( new Sparks( data.point.position, data.scale ) )
        if (effectSize > 1) this.addChild( new Smoke( data.point.position, data.scale ) )
    }

    tick() {
        this.lightningCanvasSecond.clear()
        this.lightningCanvasFirst.clear()
        while (this.lightnings.length > 0) {
            const point = this.lightnings.pop()
            drawLightning(point, this.teslaTower.lightning, this.canvases[point.index])
        }
    }

    updateBuildingAuto( windOpenIndex ) {
        if (windOpenIndex === 1) {
            this.bbWG1 = new WindGenerator(this.bbWG1)
            this.WG1LT.activate()
        } else if (windOpenIndex === 2) {
            this.bbWG2 = new WindGenerator(this.bbWG2)
            this.WG2LT.activate()
        } else {
            console.error(`get wrong WindGeneratorIndex in ActionScene.js: ${windOpenIndex}`)
        }
    }

    updateBuildingTurbo( rotorOpenIndex ) {
        if (rotorOpenIndex === 1) {
            this.bbRG1 = new RotorGenerator(this.bbRG1, this.state.addRate > 1n)
            this.RG1LT.activate()
        } else if (rotorOpenIndex === 2) {
            this.bbRG2 = new RotorGenerator(this.bbRG2, this.state.addRate > 1n)
            this.RG2LT.activate()
        } else {
            console.error(`get wrong RotorGeneratorIndex in ActionScene.js: ${rotorOpenIndex}`)
        }
    }
}

export default ActionScene
