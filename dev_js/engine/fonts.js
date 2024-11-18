import { TextStyle } from "pixi.js"
import { fonts } from "./loader"

// https://pixijs.io/pixi-text-style/

export let textStyles = null

export function initFontStyles() {
    // add font family, after update font values in loader
    textStyles = {
        loading: new TextStyle({
            fontFamily: fonts.light,
            fontSize: 80,
            fill: '#00ff00',
        
            dropShadow: true,
            dropShadowColor: '#777777',
            dropShadowBlur: 4,
            dropShadowAngle: 0,
            dropShadowDistance: 0,
        }),

        AD: new TextStyle({
            fontFamily: fonts.light,
            fontSize: 36,
            fill: '#00ff00',
            align: 'center',
        }),

        level: new TextStyle({
            fontFamily: fonts.light,
            fontSize: 18,
            fill: '#00ff00',
            align: 'center',
        }),

        score: new TextStyle({
            fontFamily: fonts.light,
            fontSize: 24,
            fill: '#00ff00',
            align: 'center',
        }),

        infoBonus: new TextStyle({
            fontFamily: fonts.light,
            fontSize: 18,
            fill: '#00ff00',
            align: 'center',
        }),

        infoIcons: new TextStyle({
            fontFamily: fonts.light,
            fontSize: 32,
            fill: '#ffff00',
            align: 'center',
        }),
        infoSmallIcons: new TextStyle({
            fontFamily: fonts.light,
            fontSize: 24,
            fill: '#ffff00',
            align: 'center',
        }),

        infoPrice: new TextStyle({
            fontFamily: fonts.light,
            fontSize: 16,
            fill: '#ffffff',
            align: 'center',
        }),

        // EXAMPLES
        /*
        gradientText: new TextStyle({
            fontFamily: fontKeys.RobotoBlack,
            fontSize: 32,
            fill: ['#000000', '#ff0064', '#000000'],

            dropShadow: true,
            dropShadowColor: '#ffffff',
            dropShadowBlur: 6,
            dropShadowAngle: 0,
            dropShadowDistance: 0,

            wordWrap: true,
            wordWrapWidth: 400,
        }),

        textWithShadow: new TextStyle({
            fontFamily: fontKeys.RobotoBlack,
            fontSize: 18,
            fontStyle: 'normal',
            fontWeight: 'normal',
            fill: ['#ff0000', '#ffff00'],
            
            stroke: '#ffffff',
            strokeThickness: 2,

            dropShadow: true,
            dropShadowColor: '#ff00ff',
            dropShadowBlur: 3,
            dropShadowDistance: 4,
            
            wordWrap: true,
            wordWrapWidth: 440,
            lineJoin: 'round',
        }),
        */
    }
}