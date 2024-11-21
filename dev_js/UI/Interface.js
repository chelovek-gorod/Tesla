import { Container, Text, Sprite, Graphics } from "pixi.js"
import { EventHub, events, requestUpgradeClick, requestUpgradeAuto } from '../engine/events'
import { textStyles } from '../engine/fonts'
import { sprites, voices } from "../engine/loader"
import LevelPanel from "./LevelPanel"
import MainButton from "./MainButton"
import Panel from "./Panel"
import TopButton from "./TopButton"
import TurboSwitch from "./TurboSwitch"
import Wire from "./Wire"
import { distanceH, distanceV, mainButtonWidth, mainButtonOffsetV,
    turboSwitchOffsetH, levelPanelOffsetH, panelWidth, panelOffsetH, panelOffsetV,
    wiresSize, wiresOffset, controlSizeH, controlSizeV, levelStateRectRange} from "../constants"
import { playVoice } from "../engine/sound"
import Pointer from "./Pointer"
import HelpFinger from "./HelpFinger"
import FlyingText from "./FlyingText"

class Interface extends Container {
    constructor( screenData, state, isLangRu ) {
        super()

        this.finger = new HelpFinger(this)

        this.voices_next_level = isLangRu ? voices.ru_next_level : voices.en_next_level
        this.voice_extra_electricity = isLangRu ? voices.ru_extra_electricity : voices.en_extra_electricity
        this.voice_turbo_upgrade = isLangRu ? voices.ru_turbo_upgrade : voices.en_turbo_upgrade

        if (state.points === 0n) playVoice(isLangRu ? voices.ru_start_first : voices.en_start_first)
        else playVoice(isLangRu ? voices.ru_start_second : voices.en_start_second)
        this.voice_lets_do_it = isLangRu ? voices.ru_lets_do_it : voices.en_lets_do_it
        playVoice(this.voice_lets_do_it)

        this.LTXT = isLangRu ? 'Уровень:' : 'Level:'
        this.CTXT = isLangRu ? 'За клик' : 'Per click'
        this.ATXT = isLangRu ? 'В секунду' : 'Per second'
        this.TTXT = isLangRu ? 'ТУРБО' : 'TURBO'
        this.TtTXT = isLangRu ? 'Секунд' : 'Seconds'

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
            style: textStyles.level
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

        this.textScore = new Text({ text: this.state.points.toFormat(), style: textStyles.score })
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

        // click panel
        const isClickPanelOn = this.state.points >= this.state.addPerClickPrice
        const readyViceCP = isLangRu ? voices.ru_available_click_upgrade : voices.en_available_click_upgrade
        const disabledVoiceCP = isLangRu ? voices.ru_no_money : voices.en_no_money
        this.clickPanel = new Panel( requestUpgradeClick, isClickPanelOn, readyViceCP, disabledVoiceCP )
        this.addChild(this.clickPanel)

        this.textClickBonus = new Text({
            text: '+ ' + this.state.addPerClickNextValue.toFormat(),
            style: textStyles.infoBonus
        })
        this.textClickBonus.anchor.set(0.5)
        this.addChild(this.textClickBonus)

        this.textClickIcons = new Text({ text: this.CTXT, style: textStyles.label })
        this.textClickIcons.anchor.set(0.5)
        this.addChild(this.textClickIcons)

        this.textClickPrice = new Text({
            text: this.state.addPerClickPrice.toFormat(),
            style: textStyles.infoPrice
        })
        this.textClickPrice.anchor.set(0.5)
        this.addChild(this.textClickPrice)

        // auto panel
        const isAutoPanelOn = this.state.points >= this.state.addPerSecondPrice
        const readyViceAP = isLangRu ? voices.ru_available_auto_upgrade : voices.en_available_auto_upgrade
        const disabledVoiceAP = isLangRu ? voices.ru_no_money : voices.en_no_money
        this.timePanel = new Panel( requestUpgradeAuto, isAutoPanelOn, readyViceAP, disabledVoiceAP )
        this.addChild(this.timePanel)

        this.textAutoBonus = new Text({
            text: '+ ' + this.state.addPerSecondNextValue.toFormat(),
            style: textStyles.infoBonus
        })
        this.textAutoBonus.anchor.set(0.5)
        this.addChild(this.textAutoBonus)

        this.textAutoIcons = new Text({ text: this.ATXT, style: textStyles.label })
        this.textAutoIcons.anchor.set(0.5)
        this.addChild(this.textAutoIcons)

        this.textAutoPrice = new Text({
            text: this.state.addPerSecondPrice.toFormat(),
            style: textStyles.infoPrice
        })
        this.textAutoPrice.anchor.set(0.5)
        this.addChild(this.textAutoPrice)

        // turbo switch
        const turboState = this.state.points >= this.state.turboPrice ? "ready" : "idle"
        const readyViceTP = isLangRu ? voices.ru_available_turbo : voices.en_available_turbo
        const disabledVoiceTP = isLangRu ? voices.ru_not_available : voices.en_not_available
        this.turboSwitch = new TurboSwitch(turboState, readyViceTP, disabledVoiceTP)
        this.turboSwitch.position.x = -turboSwitchOffsetH
        this.turboSwitch.position.y = 0
        this.addChild(this.turboSwitch)

        this.textTurboTimer = new Text({
            text: this.state.turboSeconds.toFixed(1),
            style: textStyles.score })
        this.textTurboTimer.anchor.set(0.5)
        this.textTurboTimer.position.x = -turboSwitchOffsetH
        this.textTurboTimer.position.y = -90
        this.addChild(this.textTurboTimer)

        this.textTurboLabel = new Text({
            text: this.TtTXT,
            style: textStyles.label})
        this.textTurboLabel.anchor.set(0.5)
        this.textTurboLabel.position.x = -turboSwitchOffsetH
        this.textTurboLabel.position.y = -62
        this.addChild(this.textTurboLabel)
        
        // info panel
        this.levelPanel = new LevelPanel()
        this.levelPanel.position.x = levelPanelOffsetH
        this.levelPanel.position.y = 0
        this.addChild(this.levelPanel)

        this.textInfoClickIcon = new Text({ text: this.CTXT, style: textStyles.label })
        this.textInfoClickIcon.anchor.set(0.5)
        this.textInfoClickIcon.position.x = levelPanelOffsetH
        this.textInfoClickIcon.position.y = -172
        this.addChild(this.textInfoClickIcon)

        this.textInfoClickAdd = new Text({
            text: '+ ' + this.state.addPerClick.toFormat(),
            style: textStyles.infoBonus
        })
        this.textInfoClickAdd.anchor.set(0.5)
        this.textInfoClickAdd.position.x = levelPanelOffsetH
        this.textInfoClickAdd.position.y = -150
        this.addChild(this.textInfoClickAdd)

        this.textInfoAutoIcon = new Text({ text: this.ATXT, style:textStyles.label })
        this.textInfoAutoIcon.anchor.set(0.5)
        this.textInfoAutoIcon.position.x = levelPanelOffsetH
        this.textInfoAutoIcon.position.y = -126
        this.addChild(this.textInfoAutoIcon)

        this.textInfoAutoAdd = new Text({
            text: '+ ' + this.state.addPerSecond.toFormat(),
            style: textStyles.infoBonus
        })
        this.textInfoAutoAdd.anchor.set(0.5)
        this.textInfoAutoAdd.position.x = levelPanelOffsetH
        this.textInfoAutoAdd.position.y = -102
        this.addChild(this.textInfoAutoAdd)

        this.textInfoTurboBonus = new Text({
            text:`${this.TTXT} x ${this.state.level.toFormat()}`,
            style: textStyles.label
        })
        this.textInfoTurboBonus.anchor.set(0.5)
        this.textInfoTurboBonus.position.x = levelPanelOffsetH
        this.textInfoTurboBonus.position.y = -74
        this.addChild(this.textInfoTurboBonus)

        this.textInfoTurboPrice = new Text({
            text: this.state.turboPrice.toFormat(),
            style: textStyles.infoPrice
        })
        this.textInfoTurboPrice.anchor.set(0.5)
        this.textInfoTurboPrice.position.x = levelPanelOffsetH
        this.textInfoTurboPrice.position.y = -54
        this.addChild(this.textInfoTurboPrice)

        this.screenResize( screenData )
        EventHub.on( events.screenResize, this.screenResize.bind(this) )
        
        EventHub.on( events.updateUILevel, this.updateLevel.bind(this) )
        EventHub.on( events.updateUIPoints, this.updatePoints.bind(this) )
        EventHub.on( events.updateUIClickPanel, this.updateClickPanel.bind(this) )
        EventHub.on( events.updateUIAutoPanel, this.updateAutoPanel.bind(this) )
        EventHub.on( events.updateUITurboPanel, this.updateTurboPanel.bind(this) )
        EventHub.on( events.updateUITurboTimeout, this.updateTurboTimeout.bind(this) )
        EventHub.on( events.showBonusUI, this.showBonusText.bind(this) )

        EventHub.on( events.needVoiceDoIt, () => playVoice(this.voice_lets_do_it) )

        if (this.state.help.has('button')) {
            setTimeout( () => {
                this.state.help.delete('button')
                this.finger.showHelp(this.mainButton)
            }, 5000 )
        }
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
            this.textClickBonus.position.y = -panelOffsetV - 116

            this.textClickIcons.position.x = -panelOffsetH + 105
            this.textClickIcons.position.y = -panelOffsetV - 97

            this.textClickPrice.position.x = -panelOffsetH + 105
            this.textClickPrice.position.y = -panelOffsetV - 76
    
            // auto panel position
            this.timePanel.position.x = panelOffsetH
            this.timePanel.position.y = -panelOffsetV

            this.textAutoBonus.position.x = panelOffsetH + 105
            this.textAutoBonus.position.y = -panelOffsetV - 116

            this.textAutoIcons.position.x = panelOffsetH + 105
            this.textAutoIcons.position.y = -panelOffsetV - 97

            this.textAutoPrice.position.x = panelOffsetH + 105
            this.textAutoPrice.position.y = -panelOffsetV - 76
    
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
            this.textClickBonus.position.y = -distanceV - 116

            this.textClickIcons.position.x = this.clickPanel.position.x + 105
            this.textClickIcons.position.y = -distanceV - 97

            this.textClickPrice.position.x = this.clickPanel.position.x + 105
            this.textClickPrice.position.y = -distanceV - 76

            // auto panel position
            this.timePanel.position.x = panelWidth * 0.5 + distanceH * 4
            this.timePanel.position.y = -distanceV

            this.textAutoBonus.position.x = this.timePanel.position.x + 105
            this.textAutoBonus.position.y = -distanceV - 116

            this.textAutoIcons.position.x = this.timePanel.position.x + 105
            this.textAutoIcons.position.y = -distanceV - 97

            this.textAutoPrice.position.x = this.timePanel.position.x + 105
            this.textAutoPrice.position.y = -distanceV - 76

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
        this.textLevel.position.y = this.topDisplay.position.y + 16
        this.textLevelPrice.position.y = this.topDisplay.position.y + 46
        this.textScore.position.y = this.topDisplay.position.y + 78

        this.redrawLevelProgressRect()

        this.topButton.position.x = screenData.centerX / scale - distanceH
        this.topButton.position.y = -screenData.height / scale
    }

    redrawLevelProgressRect() {
        this.levelState.clear()
        this.levelState.roundRect(
            this.topDisplay.position.x - 293,
            this.topDisplay.position.y - 8,
            (levelStateRectRange / Number(this.state.levelPrice)) * Number(this.state.levelScored),
            64,
            8
        )
        this.levelState.fill(0xff7777)
    }

    updateLevel() {
        this.redrawLevelProgressRect()

        // top display
        this.textLevel.text = `${this.LTXT} ${this.state.level.toFormat()}`
        this.textLevelPrice.text = `${this.state.levelScored.toFormat()} / ${this.state.levelPrice.toFormat()}`
        this.addChild( new Pointer(this.textLevel.position) )

        // info panel
        this.textInfoTurboBonus.text = `${this.TTXT} x ${this.state.level.toFormat()}`
        this.addChild( new Pointer(this.textInfoTurboBonus.position) )

        playVoice( this.voices_next_level )
    }
    
    updatePoints( ADBonus ) {
        this.redrawLevelProgressRect()

        // top display
        this.textLevelPrice.text = `${this.state.levelScored.toFormat()} / ${this.state.levelPrice.toFormat()}`
        this.textScore.text = this.state.points.toFormat()
        if (ADBonus) {
            playVoice( this.voice_extra_electricity )
            this.addChild( new Pointer(this.textScore.position) )
            new FlyingText({ text: '+ ' + ADBonus.toFormat(), style: textStyles.score })
        }

        // check click panel
        this.clickPanel.activation( this.state.points >= this.state.addPerClickPrice )
        if (this.state.help.has('click') && this.clickPanel.isOn) {
            this.state.help.delete('click')
            this.finger.showHelp(this.clickPanel)
        }

        // check auto panel
        this.timePanel.activation( this.state.points >= this.state.addPerSecondPrice )
        if (this.state.help.has('auto') && this.timePanel.isOn) {
            this.state.help.delete('auto')
            this.finger.showHelp(this.timePanel)
        }

        // check turbo panel
        if (this.turboSwitch.state === "ready" || this.turboSwitch.state === "idle") {
            const turboState = this.state.points >= this.state.turboPrice ? "ready" : "idle"
            this.turboSwitch.updateState(turboState)

            if (this.turboSwitch.state === "ready" && this.state.help.has('turbo')) {
                this.state.help.delete('turbo')
                this.finger.showHelp(this.turboSwitch)
            }
        }

        if (this.state.help.has('boost')
        && (this.turboSwitch.state === "active" || this.turboSwitch.state === "on")) {
            this.state.help.delete('boost')
            this.finger.showHelp(this.mainButton)
        }
    }

    showBonusText(text) {
        new FlyingText({ text: text, style: textStyles.score })
    }
    
    updateClickPanel() {
        this.textClickBonus.text = '+ ' + this.state.addPerClickNextValue.toFormat()
        this.textClickPrice.text = this.state.addPerClickPrice.toFormat()
        
        // info panel
        this.textInfoClickAdd.text = '+ ' + this.state.addPerClick.toFormat()
        this.addChild( new Pointer(this.textInfoClickAdd.position) )
    }
    
    updateAutoPanel() {
        this.textAutoBonus.text = '+ ' + this.state.addPerSecondNextValue.toFormat()
        this.textAutoPrice.text = this.state.addPerSecondPrice.toFormat()
        
        // info panel
        this.textInfoAutoAdd.text = '+ ' + this.state.addPerSecond.toFormat()
        this.addChild( new Pointer(this.textInfoAutoAdd.position) )
    }
    
    updateTurboPanel() {        
        this.textInfoTurboBonus.text = `${this.TTXT} x ${this.state.level.toFormat()}`
        this.textInfoTurboPrice.text = this.state.turboPrice.toFormat()
    }
    
    updateTurboTimeout( isUpgrade ) {
        this.textTurboTimer.text = this.state.turboTimeout.toFixed(1)
        if (isUpgrade) {
            this.addChild( new Pointer(this.textTurboTimer.position) )
            playVoice( this.voice_turbo_upgrade )
        }
    }
}

export default Interface