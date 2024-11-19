import Background from './BG/background'
import { getAppScreen, sceneAdd } from './engine/application'
import { playMusic } from './engine/sound'
import Interface from './UI/interface'
import ActionScene from './map/ActionScene'
import Snow from './map/Snow'
import State from './state'

BigInt.prototype.toFormat = function() {
    return this.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')
}

BigInt.prototype.increase = function() {
    return (this.toString()[0] === '2') ? this*25n/10n : this*2n
}

const lang = navigator.language || navigator.userLanguage
let isLangRu = !!(~lang.indexOf('ru'))
export function checkLangRu() {
    return isLangRu
}

export function startGame() {
    const screenData = getAppScreen()
    const state = new State()

    sceneAdd( new Background(screenData) )
    sceneAdd( new ActionScene(screenData, state) )
    sceneAdd( new Snow() )
    sceneAdd( new Interface(screenData, state, isLangRu) )
    
    playMusic()
}