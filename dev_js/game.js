import Background from './BG/background'
import { getAppScreen, sceneAdd } from './engine/application'
import { playMusic } from './engine/sound'
import Interface from './UI/interface'
import ActionScene from './map/ActionScene'
import Snow from './map/Snow'
import State from './state'
import Yandex from './Yandex/Yandex'

const lang = navigator.language || navigator.userLanguage
let isLangRu = !!(~lang.indexOf('ru'))
export function checkLangRu() {
    return isLangRu
}

export function startGame() {
    if (Yandex.isRealYandex) isLangRu = Yandex.isLangRu

    const savedState = Yandex ? Yandex.getSave() : null

    const screenData = getAppScreen()
    const state = new State(savedState, isLangRu)
    Yandex.startAutoSave( state.getStateDataForSave.bind(state) )

    sceneAdd( new Background(screenData) )
    sceneAdd( new ActionScene(screenData, state, isLangRu) )
    sceneAdd( new Snow() )
    sceneAdd( new Interface(screenData, state, isLangRu) )
    
    playMusic()
}