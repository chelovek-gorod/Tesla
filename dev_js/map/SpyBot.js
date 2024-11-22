import { AnimatedSprite } from "pixi.js"
import { drawCharge, spyBotGetDamage } from "../engine/events"
import { sounds, sprites } from "../engine/loader"
import Smoke from "./Smoke"
import Sparks from "./Sparks"
import Explosion from "./Explosion"
import { tickerAdd, tickerRemove } from "../engine/application"
import { playSound, playVoice } from "../engine/sound"

const spyBotRateX = 0.35

const botFlyTimeout = 5 * 1000
const botAwaitTimeout = 50 * 1000
const botFlySpeedPerRange = 0.001

class SpyBot extends AnimatedSprite {
    constructor(spyDetectedVoice, spyFirstVoice, stateHelpRemove) {
        super(sprites.spy_bot.animations.go)
        this.anchor.set(0.5, 1)

        this.animationSpeed = 0.5
        this.stop()

        this.hp = 10

        this.turnRate = Math.random() < 0.5 ? -1 : 1
        this.offsetRateX = spyBotRateX * this.turnRate // -0.35 or 0.35
        this.offsetRateY = 0 // 1 - max visible; 0 - hidden

        this.topPoint = 0
        this.distance = 0
        this.isVisible = false

        this.isSmoke = false

        this.halfHeight = this.height * 0.5
        this.halfOffset = this.halfHeight

        this.spyDetectedVoice = spyDetectedVoice
        this.spyFirstVoice = spyFirstVoice
        this.stateHelpRemove = stateHelpRemove

        this.eventMode = 'static'
        this.on('pointerdown', this.getClick.bind(this) )

        this.flyTimeout = (stateHelpRemove) ? botFlyTimeout * 3 : botFlyTimeout


        setTimeout( () => this.showBot(), (stateHelpRemove) ? botAwaitTimeout * 9 : botAwaitTimeout )
    }

    updateOnMap(mapScale, mapWidth, bottomPoint, topPoint) {
        this.scale.set(mapScale)
        this.scale.x *= this.turnRate

        this.topPoint = topPoint
        this.distance = bottomPoint - topPoint
        this.halfOffset = this.halfHeight * mapScale

        this.position.x = this.offsetRateX * mapWidth
        if (this.offsetRateY > 0) this.position.y = this.topPoint + this.distance * this.offsetRateY
        else this.position.y = topPoint
    }

    getClick() {
        drawCharge({
            point: {
                position: { x: this.position.x, y: this.position.y - this.halfOffset },
                index: 0
            },
            count: 3,
            scale: this.scale.y})

        this.hp--
        
        if (this.hp > 0) {
            this.isSmoke = !this.isSmoke
            if (this.isSmoke) this.parent.addChild( new Smoke(this.position, this.scale.y * 0.5) )
            else this.parent.addChild( new Sparks({
                x: this.position.x,
                y: this.position.y - this.height * this.scale.y
            }, this.scale.y) )

            spyBotGetDamage(false)
        } else {
            tickerRemove(this)

            this.parent.addChild( new Sparks({
                x: this.position.x,
                y: this.position.y - this.height * this.scale.y
            }, this.scale.y) )
            this.parent.addChild( new Explosion(this.position, this.scale.y) )
            playSound(sounds.se_explosion)

            this.offsetRateY = 0
            this.position.y = this.topPoint
            this.isVisible = false

            setTimeout( () => this.showBot(), botAwaitTimeout )
            spyBotGetDamage(true)
        }
    }

    showBot() {
        this.hp = 10

        this.turnRate *= -1
        this.scale.x *= -1
        this.offsetRateX *= -1
        this.position.x *= -1
        
        this.isVisible = true
        this.play()
        setTimeout( () => this.isVisible = false, this.flyTimeout )
        tickerAdd(this)

        playVoice(this.spyDetectedVoice)
        if (this.stateHelpRemove) {
            playVoice(this.spyFirstVoice)
            this.stateHelpRemove()
            this.stateHelpRemove = null
            this.flyTimeout = botFlyTimeout
        }
    }

    tick(time) {
        if (this.isVisible) {
            if (this.offsetRateY < 1) {
                this.offsetRateY += botFlySpeedPerRange * time.elapsedMS
                this.position.y = this.topPoint + this.distance * this.offsetRateY
            }
        } else {
            if (this.offsetRateY > 0) {
                this.offsetRateY -= botFlySpeedPerRange * time.elapsedMS
                this.position.y = this.topPoint + this.distance * this.offsetRateY
            } else {
                this.stop()
                tickerRemove(this)
                setTimeout( () => this.showBot(), botAwaitTimeout )
            }
        }
    }
}

export default SpyBot