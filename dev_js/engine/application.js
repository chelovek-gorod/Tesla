import { Application } from 'pixi.js'
import { playMusic, stopMusic } from './sound'
import { screenResize } from './events'

const app = new Application()

const appSettings = {
    background: 0x000000,
    antialias: true, // сглаживание
    resolution: 2,
    resizeTo: window
}

Promise.all( [app.init( appSettings )] ).then( appReady )
function appReady() {
    app.ticker.add( time => {
        // if (delta = 1) -> FPS = 60 (16.66ms per frame)
        tickerArr.forEach( element => element.tick(time) )
        // time.elapsedMS - in milliseconds
        // time.deltaMS   - ???
        // time.deltaTime - in frame
    })
    document.body.append( app.canvas )
    resize()
}

let tickerArr = [] // entities for update (need e.tick(delta) method)

const appScreen = {}

function resize() {
    appScreen.width = app.screen.width
    appScreen.height = app.screen.height
    appScreen.centerX = app.screen.width / 2
    appScreen.centerY = app.screen.height / 2
    appScreen.minSize = app.screen.width > app.screen.height ? app.screen.height : app.screen.width
    appScreen.offsetX = (appScreen.width - appScreen.minSize) / 2
    appScreen.offsetY = (appScreen.height - appScreen.minSize) / 2

    screenResize( appScreen )
}


export function getAppScreen() {
    return appScreen
}

export function sceneAdd(element) {
    app.stage.addChild( element )
}

export function sceneRemove(element) {
    app.stage.removeChild( element )
}

let orientation = window.matchMedia("(orientation: portrait)");
orientation.addEventListener("change", () => setTimeout(resize, 0))
window.addEventListener('resize', () => setTimeout(resize, 0))

window.addEventListener('focus', playMusic)
window.addEventListener('blur', stopMusic)
if ('hidden' in document) document.addEventListener('visibilitychange', visibilityOnChange)
function visibilityOnChange( isHide ) {
    if (isHide) stopMusic()
    else playMusic()
}

export function tickerAdd( element ) {
    if ('tick' in element) tickerArr.push( element )
    else console.warn( 'TRY TO ADD ELEMENT IN TICKER WITHOUT .tick() METHOD:', element)
}

export function tickerRemove( element ) {
    tickerArr = tickerArr.filter( e => e !== element )
}

