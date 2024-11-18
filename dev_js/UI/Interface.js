import { Container, Text, Sprite, Graphics } from "pixi.js"
import { EventHub, events, requestUpdateClick, requestUpdateAuto } from '../engine/events'
import { textStyles } from '../engine/fonts'
import { sprites } from "../engine/loader"
import LevelPanel from "./LevelPanel"
import MainButton from "./MainButton"
import Panel from "./Panel"
import TopButton from "./TopButton"
import TurboSwitch from "./TurboSwitch"
import Wire from "./Wire"
import { distanceH, distanceV, mainButtonWidth, mainButtonOffsetV,
    turboSwitchOffsetH, levelPanelOffsetH, panelWidth, panelOffsetH, panelOffsetV,
    wiresSize, wiresOffset, controlSizeH, controlSizeV} from "../constants"

const levelStateRange = 600

class Interface extends Container {
    constructor( screenData, state, isLangRu ) {
        super()

        this.LTXT = isLangRu ? 'Уровень:' : 'Level:'
        this.CTXT = isLangRu ? 'За клик' : 'Per click'
        this.ATXT = isLangRu ? 'В секунду' : 'Per second'
        this.TTXT = isLangRu ? 'ТУРБО' : 'TURBO'

        this.state = state

        // wires
        this.wireHL = new Wire('h', 0, false)
        this.wireHL.position.x = -mainButtonWidth * 0.5
        this.wireHL.position.y = -wiresOffset
        this.addChild(this.wireHL)

        this.wireHR = new Wire('h', 0, false)
        this.wireHR.position.x = mainButtonWidth * 0.5
        this.wireHR.position.y = -wiresOffset
        this.addChild(this.wireHR)

        this.wireAL = new Wire('a', 90, true)
        this.wireAL.position.y = -wiresSize * 0.5
        this.addChild(this.wireAL)

        this.wireAR = new Wire('a', -90, false)
        this.wireAR.position.y = -wiresSize * 0.5
        this.addChild(this.wireAR)

        this.wireALL = new Wire('a', 90, true)
        this.addChild(this.wireALL)

        this.wireARR = new Wire('a', -90, false)
        this.addChild(this.wireARR)

        // top display
        this.levelState = new Graphics()
        this.levelState.alpha = 0.4
        this.addChild(this.levelState)

        this.topDisplay = new Sprite(sprites.top_screen)
        this.topDisplay.anchor.set(0.5, 0)
        this.topDisplay.position.x = 0
        this.addChild(this.topDisplay)

        this.textLevel = new Text({
            text: `${this.LTXT} ${this.state.level.toFormat()}`,
            style: textStyles.infoIcons
        })
        this.textLevel.anchor.set(0.5)
        this.textLevel.position.x = 0
        this.addChild(this.textLevel)

        this.textLevelPrice = new Text({
            text: `${this.state.levelScored.toFormat()} / ${this.state.levelPrice.toFormat()}`,
            style: textStyles.infoPrice
        })
        this.textLevelPrice.anchor.set(0.5)
        this.textLevelPrice.position.x = 0
        this.addChild(this.textLevelPrice)

        this.textScore = new Text({ text: this.state.points.toFormat(), style: textStyles.AD })
        this.textScore.anchor.set(0.5)
        this.textScore.position.x = 0
        this.addChild(this.textScore)

        // AD
        this.topButton = new TopButton()
        this.addChild(this.topButton)

        // main button
        this.mainButton = new MainButton()
        this.mainButton.position.x = 0
        this.mainButton.position.y = -mainButtonOffsetV
        this.addChild(this.mainButton)

        // click panel               trigger, action, isOn = false
        const isClickPanelOn = this.state.points >= this.state.addPerClickPrice
        this.clickPanel = new Panel( 'isClickPanelOn', requestUpdateClick, isClickPanelOn )
        this.addChild(this.clickPanel)

        this.textClickBonus = new Text({
            text: '+ ' + this.state.addPerClickNextValue.toFormat(),
            style: textStyles.infoBonus
        })
        this.textClickBonus.anchor.set(0.5, 1)
        this.addChild(this.textClickBonus)

        this.textClickIcons = new Text({ text: this.CTXT, style: textStyles.infoSmallIcons })
        this.textClickIcons.anchor.set(0.5, 1)
        this.addChild(this.textClickIcons)

        this.textClickPrice = new Text({
            text: this.state.addPerClickPrice.toFormat(),
            style: textStyles.infoPrice
        })
        this.textClickPrice.anchor.set(0.5, 1)
        this.addChild(this.textClickPrice)

        // auto panel
        const isAutoPanelOn = this.state.points >= this.state.addPerSecondPrice
        this.timePanel = new Panel( 'isAutoPanelOn', requestUpdateAuto, isAutoPanelOn )
        this.addChild(this.timePanel)

        this.textAutoBonus = new Text({
            text: '+ ' + this.state.addPerSecondNextValue.toFormat(),
            style: textStyles.infoBonus
        })
        this.textAutoBonus.anchor.set(0.5, 1)
        this.addChild(this.textAutoBonus)

        this.textAutoIcons = new Text({ text: this.ATXT, style: textStyles.infoSmallIcons })
        this.textAutoIcons.anchor.set(0.5, 1)
        this.addChild(this.textAutoIcons)

        this.textAutoPrice = new Text({
            text: this.state.addPerSecondPrice.toFormat(),
            style: textStyles.infoPrice
        })
        this.textAutoPrice.anchor.set(0.5, 1)
        this.addChild(this.textAutoPrice)

        // turbo switch
        const turboState = this.state.points >= this.state.turboPrice ? "ready" : "idle"
        this.turboSwitch = new TurboSwitch(turboState)
        this.turboSwitch.position.x = -turboSwitchOffsetH
        this.turboSwitch.position.y = 0
        this.addChild(this.turboSwitch)

        this.textTurboTimer = new Text({
            text: this.state.turboSeconds.toFixed(1),
            style: textStyles.infoIcons })
        this.textTurboTimer.anchor.set(0.5, 1)
        this.textTurboTimer.position.x = -turboSwitchOffsetH
        this.textTurboTimer.position.y = -70
        this.addChild(this.textTurboTimer)
        
        // info panel
        this.levelPanel = new LevelPanel()
        this.levelPanel.position.x = levelPanelOffsetH
        this.levelPanel.position.y = 0
        this.addChild(this.levelPanel)

        this.textInfoClickIcon = new Text({ text: this.CTXT, style: textStyles.infoSmallIcons })
        this.textInfoClickIcon.anchor.set(0.5, 1)
        this.textInfoClickIcon.position.x = levelPanelOffsetH
        this.textInfoClickIcon.position.y = -162
        this.addChild(this.textInfoClickIcon)

        this.textInfoClickAdd = new Text({
            text: '+ ' + this.state.addPerClick.toFormat(),
            style: textStyles.infoBonus
        })
        this.textInfoClickAdd.anchor.set(0.5, 1)
        this.textInfoClickAdd.position.x = levelPanelOffsetH
        this.textInfoClickAdd.position.y = -144
        this.addChild(this.textInfoClickAdd)

        this.textInfoAutoIcon = new Text({ text: this.ATXT, style:textStyles.infoSmallIcons })
        this.textInfoAutoIcon.anchor.set(0.5, 1)
        this.textInfoAutoIcon.position.x = levelPanelOffsetH
        this.textInfoAutoIcon.position.y = -114
        this.addChild(this.textInfoAutoIcon)

        this.textInfoAutoAdd = new Text({
            text: '+ ' + this.state.addPerSecond.toFormat(),
            style: textStyles.infoBonus
        })
        this.textInfoAutoAdd.anchor.set(0.5, 1)
        this.textInfoAutoAdd.position.x = levelPanelOffsetH
        this.textInfoAutoAdd.position.y = -96
        this.addChild(this.textInfoAutoAdd)

        this.textInfoTurboBonus = new Text({
            text:`${this.TTXT} x ${this.state.level.toFormat()}`,
            style: textStyles.infoSmallIcons
        })
        this.textInfoTurboBonus.anchor.set(0.5, 1)
        this.textInfoTurboBonus.position.x = levelPanelOffsetH
        this.textInfoTurboBonus.position.y = -60
        this.addChild(this.textInfoTurboBonus)

        this.textInfoTurboPrice = new Text({
            text: this.state.turboPrice.toFormat(),
            style: textStyles.infoPrice
        })
        this.textInfoTurboPrice.anchor.set(0.5, 1)
        this.textInfoTurboPrice.position.x = levelPanelOffsetH
        this.textInfoTurboPrice.position.y = -44
        this.addChild(this.textInfoTurboPrice)

        this.screenResize( screenData )
        EventHub.on( events.screenResize, this.screenResize.bind(this) )
        EventHub.on( events.updatePoints, this.updatePoints.bind(this) )
        EventHub.on( events.updateClickPanel, this.updateClickPanel.bind(this) )
        EventHub.on( events.updateAutoPanel, this.updateAutoPanel.bind(this) )
        EventHub.on( events.updateTurboInfo, this.updateTurboInfo.bind(this) )
        EventHub.on( events.stopTurbo, this.stopTurbo.bind(this) )
        EventHub.on( events.updateTurboTimeout, this.updateTurboTimeout.bind(this) )
    }

    screenResize(screenData) {
        this.position.x = screenData.centerX
        this.position.y = screenData.height
        let scale

        if (screenData.width > screenData.height) {
            scale = controlSizeH > screenData.width ? screenData.width / controlSizeH : 1
    
            // click panel position
            this.clickPanel.position.x = -panelOffsetH
            this.clickPanel.position.y = -panelOffsetV

            this.textClickBonus.position.x = -panelOffsetH + 105
            this.textClickBonus.position.y = -panelOffsetV - 110

            this.textClickIcons.position.x = -panelOffsetH + 105
            this.textClickIcons.position.y = -panelOffsetV - 86

            this.textClickPrice.position.x = -panelOffsetH + 105
            this.textClickPrice.position.y = -panelOffsetV - 68
    
            // auto panel position
            this.timePanel.position.x = panelOffsetH
            this.timePanel.position.y = -panelOffsetV

            this.textAutoBonus.position.x = panelOffsetH + 105
            this.textAutoBonus.position.y = -panelOffsetV - 110

            this.textAutoIcons.position.x = panelOffsetH + 105
            this.textAutoIcons.position.y = -panelOffsetV - 86

            this.textAutoPrice.position.x = panelOffsetH + 105
            this.textAutoPrice.position.y = -panelOffsetV - 68
    
            // wires
            this.wireAL.position.x = -mainButtonWidth * 1.5
            this.wireAR.position.x = mainButtonWidth * 1.5
    
            this.wireALL.position.x = -mainButtonWidth * 1.5 - panelWidth
            this.wireALL.position.y = -wiresSize * 0.5
            this.wireALL.scale.x = -1
  
            this.wireARR.position.x = mainButtonWidth * 1.5 + panelWidth
            this.wireARR.position.y = -wiresSize * 0.5
            this.wireARR.scale.x = 1
        } else {
            scale = controlSizeV > screenData.width ? screenData.width / controlSizeV : 1

            // click panel position
            this.clickPanel.position.x = -panelWidth * 0.5 - distanceH * 4
            this.clickPanel.position.y = -distanceV

            this.textClickBonus.position.x = this.clickPanel.position.x + 105
            this.textClickBonus.position.y = -distanceV - 110

            this.textClickIcons.position.x = this.clickPanel.position.x + 105
            this.textClickIcons.position.y = -distanceV - 86

            this.textClickPrice.position.x = this.clickPanel.position.x + 105
            this.textClickPrice.position.y = -distanceV - 68

            // auto panel position
            this.timePanel.position.x = panelWidth * 0.5 + distanceH * 4
            this.timePanel.position.y = -distanceV

            this.textAutoBonus.position.x = this.timePanel.position.x + 105
            this.textAutoBonus.position.y = -distanceV - 110

            this.textAutoIcons.position.x = this.timePanel.position.x + 105
            this.textAutoIcons.position.y = -distanceV - 86

            this.textAutoPrice.position.x = this.timePanel.position.x + 105
            this.textAutoPrice.position.y = -distanceV - 68

            // wires
            this.wireAL.position.x = -mainButtonWidth * 2
            this.wireAR.position.x = mainButtonWidth * 2

            this.wireALL.position.x = -mainButtonWidth * 1.5
            this.wireALL.position.y = -wiresSize
            this.wireALL.scale.x = 1

            this.wireARR.position.x = mainButtonWidth * 1.5
            this.wireARR.position.y = -wiresSize
            this.wireARR.scale.x = -1
        }

        this.scale.set(scale)

        this.topDisplay.position.y = -screenData.height / scale
        this.textLevel.position.y = this.topDisplay.position.y + 14
        this.textLevelPrice.position.y = this.topDisplay.position.y + 38
        this.textScore.position.y = this.topDisplay.position.y + 72

        this.levelState.clear()
        this.levelState.roundRect(
            this.topDisplay.position.x - 293,
            this.topDisplay.position.y - 12,
            (levelStateRange / Number(this.state.levelPrice)) * Number(this.state.levelScored),
            64,
            12
        )
        this.levelState.fill(0xff7777)

        this.topButton.position.x = screenData.centerX / scale - distanceH
        this.topButton.position.y = -screenData.height / scale
    }

    updatePoints() {
        this.levelState.clear()
        this.levelState.roundRect(
            this.topDisplay.position.x - 293,
            this.topDisplay.position.y - 12,
            (levelStateRange / Number(this.state.levelPrice)) * Number(this.state.levelScored),
            64,
            12
        )
        this.levelState.fill(0xff7777)

        // top display
        this.textLevel.text = `${this.LTXT} ${this.state.level.toFormat()}`
        this.textLevelPrice.text = `${this.state.levelScored.toFormat()} / ${this.state.levelPrice.toFormat()}`
        this.textScore.text = this.state.points.toFormat()

        // info panel
        this.textInfoTurboBonus.text = `${this.TTXT} x ${this.state.level.toFormat()}`
    }

    updateClickPanel() {
        this.textClickBonus.text = '+ ' + this.state.addPerClickNextValue.toFormat()
        this.textClickPrice.text = this.state.addPerClickPrice.toFormat()
        
        // info panel
        this.textInfoClickAdd.text = '+ ' + this.state.addPerClick.toFormat()
    }

    updateAutoPanel() {
        this.textAutoBonus.text = '+ ' + this.state.addPerSecondNextValue.toFormat()
        this.textAutoPrice.text = this.state.addPerSecondPrice.toFormat()
        
        // info panel
        this.textInfoAutoAdd.text = '+ ' + this.state.addPerSecond.toFormat()
    }

    updateTurboInfo() {
        this.textInfoTurboBonus.text = `${this.TTXT} x ${this.state.level.toFormat()}`
        this.textInfoTurboPrice.text = this.state.turboPrice.toFormat()
    }

    updateTurboTimeout() {
        this.textTurboTimer.text = this.state.turboTimeout.toFixed(1)
    }

    stopTurbo() {
        this.textTurboTimer.text = this.state.turboSeconds.toFixed(1)
    }
}

export default Interface