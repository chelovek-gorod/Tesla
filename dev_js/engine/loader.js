import { Assets } from 'pixi.js'
import LoadingBar from './LoadingBar'

const paths = {
    sprites : './sprites/',
    sounds : './sounds/',
    music : './music/',
    fonts : './fonts/',
}

export const sprites = {
    marsGameLogo: 'mars_game_456x137px.png',

    night_sky: 'night_sky_400x400px.png',
    moon: 'moon_212x212px.png',
    snow_bg: 'snow_bg_2048x920.png',

    top_button: 'top_button_84x144px_2x1_2frames.json',
    top_screen: 'top_screen_672x126px.png',
    main_button: 'main_button_178x168px_1x2_2frames.json',
    panel: 'panel_394x164px_1x2_2frames.json',
    level_panel: 'level_panel_188x236px.png',
    turbo_switch: 'turbo_switch_192x302px_3x3_9frames.json',
    wires_angle: 'wires_angle_160x160px.png',
    wires_line: 'wires_line_160x160px.png',

    building_box: 'building_box_182x160px.png',
    tesla_tower: 'tesla_tower_214x476px_9x7_61frames.json',
    lightning_tower: 'lightning_tower_204x564px_2x1_2frames.json',
    rotor_generator: 'rotor_generator_168x200px_4x4_16frames.json',
    wind_generator: 'wind_generator_256x268px_5x2_10frames.json',
        
    broken_car: 'broken_car_250x166px.png',
    euro_cube: 'euro_cube_152x260px.png',
    transformer: 'transformer_162x364px.png',
    
    energy: 'energy_160x160px_10x7_70frames.json',
    small_fire: 'small_fire_38x50px_5x2_10frames.json',
    smoke: 'smoke_192x192px_25frames.json',
    sparks: 'splash_192x192px_20frames.json',
}
const spritesNumber = Object.keys(sprites).length
for (let sprite in sprites) sprites[sprite] = paths.sprites + sprites[sprite]

export const sounds = {
    charge: 'se_charge.mp3',
    await: 'se_await.mp3',
    bell: 'se_bell.mp3',
    keramic: 'se_keramic.mp3',
    out: 'se_out.mp3',
    slash: 'se_slash.mp3',
    sticks: 'se_sticks.mp3',
    swipe: 'se_swipe.mp3',
}
const soundsNumber = Object.keys(sounds).length
for (let se in sounds) sounds[se] = paths.sounds + sounds[se]

export const music = {
    bgm0: 'bgm_0.mp3',
    bgm1: 'bgm_1.mp3',
    bgm2: 'bgm_2.mp3',
    bgm3: 'bgm_3.mp3',
}
for (let bgm in music) music[bgm] = paths.music + music[bgm]

export const fonts = {
    digital: 'Digital.ttf',
    light: 'Handjet-Light.ttf',
    extraLight: 'Handjet-ExtraLight.ttf',
}
for (let font in fonts) fonts[font] = paths.fonts + fonts[font]

///////////////////////////////////////////////////////////////////

export function uploadAssets( loadingDoneCallback ) {
    const assetsNumber = spritesNumber + soundsNumber
    let loadedAssets = 0
    let progressPerAsset = 100 / assetsNumber

    const loadingBar = new LoadingBar()

    const loading = () => {
        loadedAssets++
        loadingBar.update(progressPerAsset * loadedAssets)
        if (loadedAssets === assetsNumber) {
            loadingBar.delete()
            loadingDoneCallback()
        }
    }

    for (let sprite in sprites) {
        Assets.add( {alias: sprite, src: sprites[sprite]} )
        Assets.load( sprite ).then(data => {
            sprites[sprite] = data
            loading()
        })
    }

    for (let se in sounds) {
        Assets.add( {alias: se, src: sounds[se]} )
        Assets.load( se ).then(data => {
            sounds[se] = data
            loading()
        })
    }
}