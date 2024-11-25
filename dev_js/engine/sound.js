import { sound } from '@pixi/sound'
import { music, voices } from './loader'

let isSoundOn = true
let isStartFromRandomMusic = true

const voicesSet = new Set()
let voiceInstance = null
export function playVoice( vs ) {
    if (!isSoundOn) return

    if (voiceInstance) return voicesSet.add(vs)

    voiceInstance = vs.play()
    voiceInstance.on('end', () => {
        voiceInstance = null

        if (voicesSet.size === 0) return
        
        const nextVoice = voicesSet.values().next().value
        voicesSet.delete( nextVoice )
        playVoice( nextVoice )
    })
}
export function stopVoices() {
    if (voiceInstance) voiceInstance.stop()
    voiceInstance = null
    voicesSet.clear()
}

export function playSound( se ) {
    if (!isSoundOn) return

    se.stop()
    se.play()
}

let bgMusicList = null
let bgMusicIndex = 0
let bgMusic = null

export function stopMusic() {
    if (!bgMusic) return
    bgMusic.pause()
}

export function playMusic() {
    if (bgMusic) return bgMusic.isPlaying ? null : bgMusic.resume()

    if (!bgMusicList) bgMusicList = Object.values(music)
    bgMusicPlay()
}

function bgMusicPlay() {
    if (isStartFromRandomMusic) {
        isStartFromRandomMusic = false
        bgMusicIndex = Math.floor(Math.random() * bgMusicList.length)
    }

    bgMusic = sound.add('bgm', bgMusicList[bgMusicIndex] )
    bgMusic.play({ volume: 0.36 }).then( instance => instance.on('end', nextBgMusic) )
}

function nextBgMusic() {
    bgMusicIndex++
    if (bgMusicIndex === bgMusicList.length) bgMusicIndex = 0
    sound.remove('bgm')
    bgMusicPlay()
}