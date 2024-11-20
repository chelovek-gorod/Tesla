import { EventEmitter } from "pixi.js";

/*
getClick, setAutoCharge, setTurboCharge, requestAD,
requestUpgradeClick, requestUpgradeAuto, requestStartTurbo, responseStopTurbo

updateUILevel, updateUIPoints, updateUIClickPanel, updateUIAutoPanel, updateUITurboPanel, updateUITurboTimeout
updateBuildingAuto, updateBuildingTurbo, updateTowerTurbo, updateTowerAuto, updateTowerClick
drawCharge
*/

export const EventHub = new EventEmitter()

export const events = {
    screenResize: 'screenResize',
    clearSnow: 'clearSnow',

    needVoiceDoIt: 'needVoiceDoIt',

    getClick: 'getClick',
    setAutoCharge: 'setAutoCharge',
    setTurboCharge: 'setTurboCharge',
    requestAD: 'requestAD',
    requestUpgradeClick: 'requestUpgradeClick',
    requestUpgradeAuto: 'requestUpgradeAuto',
    requestStartTurbo: 'requestStartTurbo',
    responseStopTurbo: 'responseStopTurbo',

    updateUILevel: 'updateUILevel',
    updateUIPoints: 'updateUIPoints',
    updateUIClickPanel: 'updateUIClickPanel',
    updateUIAutoPanel: 'updateUIAutoPanel',
    updateUITurboPanel: 'updateUITurboPanel',
    updateUITurboTimeout: 'updateUITurboTimeout',

    updateBuildingAuto: 'updateBuildingAuto',
    updateBuildingTurbo: 'updateBuildingTurbo',
    updateTowerTurbo: 'updateTowerTurbo',
    updateTowerAuto: 'updateTowerAuto',
    updateTowerClick: 'updateTowerClick',

    drawCharge: 'drawCharge',
}

export function screenResize( data ) {
    EventHub.emit( events.screenResize, data )
}
export function clearSnow() {
    EventHub.emit( events.clearSnow )
}

export function needVoiceDoIt() {
    EventHub.emit( events.needVoiceDoIt )
}

export function getClick() {
    EventHub.emit( events.getClick )
}
export function setAutoCharge() {
    EventHub.emit( events.setAutoCharge )
}
export function setTurboCharge() {
    EventHub.emit( events.setTurboCharge )
}
export function requestAD() {
    EventHub.emit( events.requestAD )
}
export function requestUpgradeClick() {
    EventHub.emit( events.requestUpgradeClick )
}
export function requestUpgradeAuto() {
    EventHub.emit( events.requestUpgradeAuto )
}
export function requestStartTurbo() {
    EventHub.emit( events.requestStartTurbo )
}
export function responseStopTurbo() {
    EventHub.emit( events.responseStopTurbo )
}

export function updateUILevel() {
    EventHub.emit( events.updateUILevel )
}
export function updateUIPoints() {
    EventHub.emit( events.updateUIPoints )
}
export function updateUIClickPanel() {
    EventHub.emit( events.updateUIClickPanel )
}
export function updateUIAutoPanel() {
    EventHub.emit( events.updateUIAutoPanel )
}
export function updateUITurboPanel() {
    EventHub.emit( events.updateUITurboPanel )
}
export function updateUITurboTimeout() {
    EventHub.emit( events.updateUITurboTimeout )
}

export function updateBuildingAuto(data) {
    EventHub.emit( events.updateBuildingAuto, data )
}
export function updateBuildingTurbo(data) {
    EventHub.emit( events.updateBuildingTurbo, data )
}
export function updateTowerTurbo(data) {
    EventHub.emit( events.updateTowerTurbo, data )
}
export function updateTowerAuto(data) {
    EventHub.emit( events.updateTowerAuto, data )
}
export function updateTowerClick(data) {
    EventHub.emit( events.updateTowerClick, data )
}

export function drawCharge(data) {
    EventHub.emit( events.drawCharge, data )
}


/*
USAGE

Init:
anyFunction( data )

Subscribe:
EventHub.on( events.eventKey, ( event ) => {
    // event actions 
})

*/

