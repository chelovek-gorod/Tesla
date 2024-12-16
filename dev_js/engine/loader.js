import { Assets } from 'pixi.js'
import LoadingBar from './LoadingBar'

const paths = {
    sprites : './sprites/',
    sounds : './sounds/',
    music : './music/',
    voices : './voices/',
    fonts : './fonts/',
}

export const sprites = {
    finger: 'finger_220x220px.webp',

    night_sky: 'night_sky_400x400px.webp',
    moon: 'moon_212x212px.webp',
    snow_bg: 'snow_bg_2048x920.webp',

    close_button: 'close_button_280x202px.webp',
    ad_screens: 'ad_screens_360x480px_3x1_3frames.json',
    ad_button: 'ad_button_84x144px_2x1_2frames.json',
    restart_button: 'restart_button_84x124px.webp',
    top_screen: 'top_screen_672x126px.webp',
    main_button: 'main_button_178x168px_1x2_2frames.json',
    panel: 'panel_394x164px_1x2_2frames.json',
    level_panel: 'level_panel_188x236px.webp',
    turbo_switch: 'turbo_switch_192x302px_3x3_9frames.json',
    wires_angle: 'wires_angle_160x160px.webp',
    wires_line: 'wires_line_160x160px.webp',

    building_box: 'building_box_182x160px.webp',
    tesla_tower: 'tesla_tower_214x476px_9x7_61frames.json',
    lightning_tower: 'lightning_tower_204x490px_2x1_2frames.json',
    rotor_generator: 'rotor_generator_168x200px_4x4_16frames.json',
    wind_generator: 'wind_generator_256x268px_5x2_10frames.json',
    time_machine_base: 'time_machine_base_200x220px_4x1_4frames.json',
    time_machine: 'time_machine_200x562px_10x3_28frames.json',
    time_machine_lamps: 'time_machine_lamps_98x84px_1x7_7frames.json',
    time_machine_progress: 'time_machine_progress_98x84px_4x8_32frames.json',
        
    broken_car: 'broken_car_250x166px.webp',
    truck: 'truck_364x264px.webp',
    euro_cube: 'euro_cube_152x260px.webp',
    transformer: 'transformer_162x364px.webp',

    spy_bot: 'spy_bot_154x114px_7x8_56_frames.json',
    
    energy: 'energy_160x160px_10x7_70frames.json',
    smoke: 'smoke_192x192px_25frames.json',
    sparks: 'splash_192x192px_20frames.json',
    explosion: 'explosion_192x192px_5x5_25frames.json',
    ball_lightning: 'ball_lightning_156x156px_4x3_12frames.json',
}
const spritesNumber = Object.keys(sprites).length
for (let sprite in sprites) sprites[sprite] = paths.sprites + sprites[sprite]

export const sounds = {
    upgrade: 'se_upgrade.mp3',
    alarm: 'se_alarm.mp3',
    charge: 'se_charge.mp3',
    se_sparks: 'se_sparks.mp3',
    sticks: 'se_sticks.mp3',
    se_explosion: 'se_explosion.mp3',
    se_time_acc: 'se_time_acc.mp3',
}
const soundsNumber = Object.keys(sounds).length
for (let se in sounds) sounds[se] = paths.sounds + sounds[se]

export const voices = {
    en_start_first: 'voice_en_start_first.mp3',
    en_start_second: 'voice_en_start_second.mp3',
    en_lets_do_it: 'voice_en_lets_do_it.mp3',
    en_available_auto_upgrade: 'voice_en_available_auto_upgrade.mp3',
    en_available_click_upgrade: 'voice_en_available_click_upgrade.mp3',
    en_available_turbo: 'voice_en_available_turbo.mp3',
    en_next_level: 'voice_en_next_level.mp3',
    en_no_money: 'voice_en_no_money.mp3',
    en_not_available: 'voice_en_not_available.mp3',
    en_turbo_upgrade: 'voice_en_turbo_upgrade.mp3',
    en_extra_electricity: 'voice_en_extra_electricity.mp3',
    en_spy_kill: 'voice_en_spy_kill.mp3',
    en_spy: 'voice_en_spy.mp3',
    en_time_acc_build_1: 'voice_en_time_acc_build_1.mp3',
    en_time_acc_build_2: 'voice_en_time_acc_build_2.mp3',
    en_time_acc_start: 'voice_en_time_acc_start.mp3',

    ru_start_first: 'voice_ru_start_first.mp3',
    ru_start_second: 'voice_ru_start_second.mp3',
    ru_lets_do_it: 'voice_ru_lets_do_it.mp3',
    ru_available_auto_upgrade: 'voice_ru_available_auto_upgrade.mp3',
    ru_available_click_upgrade: 'voice_ru_available_click_upgrade.mp3',
    ru_available_turbo: 'voice_ru_available_turbo.mp3',
    ru_next_level: 'voice_ru_next_level.mp3',
    ru_no_money: 'voice_ru_no_money.mp3',
    ru_not_available: 'voice_ru_not_available.mp3',
    ru_turbo_upgrade: 'voice_ru_turbo_upgrade.mp3',
    ru_extra_electricity: 'voice_ru_extra_electricity.mp3',
    ru_spy_kill: 'voice_ru_spy_kill.mp3',
    ru_spy: 'voice_ru_spy.mp3',
    ru_time_acc_build_1: 'voice_ru_time_acc_build_1.mp3',
    ru_time_acc_build_2: 'voice_ru_time_acc_build_2.mp3',
    ru_time_acc_start: 'voice_ru_time_acc_start.mp3',
}
const voicesNumber = Object.keys(voices).length
for (let vs in voices) voices[vs] = paths.voices + voices[vs]

export const music = {
    bgm0: 'bgm_0.mp3',
    bgm1: 'bgm_1.mp3',
    bgm2: 'bgm_2.mp3',
    bgm3: 'bgm_3.mp3',
    bgm4: 'bgm_2.mp3',
    bgm5: 'bgm_3.mp3',
}
for (let bgm in music) music[bgm] = paths.music + music[bgm]

export const fonts = {
    light: 'Handjet-Light.ttf',
    normal: 'Handjet-Regular.ttf',
}
for (let font in fonts) fonts[font] = paths.fonts + fonts[font]

///////////////////////////////////////////////////////////////////

export function uploadAssets( loadingDoneCallback ) {
    const assetsNumber = spritesNumber + soundsNumber + voicesNumber
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

    for (let vs in voices) {
        Assets.add( {alias: vs, src: voices[vs]} )
        Assets.load( vs ).then(data => {
            voices[vs] = data
            loading()
        })
    }
}