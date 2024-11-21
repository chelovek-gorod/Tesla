import Background from './BG/background'
import { getAppScreen, sceneAdd } from './engine/application'
import { playMusic } from './engine/sound'
import Interface from './UI/interface'
import ActionScene from './map/ActionScene'
import Snow from './map/Snow'
import State from './state'

const lang = navigator.language || navigator.userLanguage
let isLangRu = !!(~lang.indexOf('ru'))
export function checkLangRu() {
    return isLangRu
}

export function startGame() {
    const screenData = getAppScreen()
    const state = new State()

    sceneAdd( new Background(screenData) )
    sceneAdd( new ActionScene(screenData, state, isLangRu) )
    sceneAdd( new Snow() )
    sceneAdd( new Interface(screenData, state, isLangRu) )
    
    playMusic()
}