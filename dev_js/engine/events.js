import { EventEmitter } from "pixi.js";

export const EventHub = new EventEmitter()

export const events = {
    screenResize: 'screenResize',
    getClick: 'getClick',
    getAuto: 'getAuto',
    getDischarge: 'getDischarge',

    stateUpdated: 'stateUpdated',
    updatePoints: 'updatePoints',
    requestUpdateClick: 'requestUpdateClick',
    updateClickPanel: 'updateClickPanel',
    requestUpdateAuto: 'requestUpdateAuto',
    updateAutoPanel: 'updateAutoPanel',
    updateTurboInfo: 'updateTurboInfo',

    startTurbo: 'startTurbo',
    stopTurbo: 'stopTurbo',
    updateTurboTimeout: 'updateTurboTimeout',
}

export function screenResize( data ) {
    EventHub.emit( events.screenResize, data )
}

export function getClick() {
    EventHub.emit( events.getClick )
}

export function getAuto(data) {
    EventHub.emit( events.getAuto, data )
}

export function getDischarge(data) {
    EventHub.emit( events.getDischarge, data )
}

export function updatePoints(data) {
    EventHub.emit( events.updatePoints, data )
}

export function stateUpdated(data) {
    EventHub.emit( events.stateUpdated, data )
}

export function requestUpdateClick() {
    EventHub.emit( events.requestUpdateClick )
}

export function updateClickPanel(data) {
    EventHub.emit( events.updateClickPanel, data )
}

export function requestUpdateAuto() {
    EventHub.emit( events.requestUpdateAuto )
}

export function updateAutoPanel(data) {
    EventHub.emit( events.updateAutoPanel, data )
}

export function updateTurboInfo() {
    EventHub.emit( events.updateTurboInfo )
}

export function startTurbo() {
    EventHub.emit( events.startTurbo )
}

export function stopTurbo() {
    EventHub.emit( events.stopTurbo )
}

export function updateTurboTimeout() {
    EventHub.emit( events.updateTurboTimeout )
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

