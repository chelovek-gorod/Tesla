import { Graphics } from "pixi.js"
import { EventHub, events } from '../engine/events'
import { tickerAdd } from "../engine/application"
import { moveSprite } from "../engine/functions"

let isSnow = true
let isAcceleratedTime = false
const snowTimeout = 30000
function updateSnowCount() {
    isSnow = !isSnow
    setTimeout(updateSnowCount, snowTimeout + Math.floor(Math.random() * snowTimeout))
}

EventHub.on( events.timeAcceleration, (isAccelerated) => isAcceleratedTime = isAccelerated )

let snowflakes = []
let reserve = []

const minSize = 0.0001

const minSpeed = 0.00001
const maxSpeed = 0.00005

let maxX = 0
let maxY = 0

EventHub.on( events.screenResize, (screenData) => {
    maxX = screenData.width
    maxY = screenData.height
})

EventHub.on( events.clearSnow, () => {
    while (snowflakes.length) {
        reserve.push( snowflakes.pop() )
    }
})

class Snowflake {
    constructor() {
        this.init()
    }

    init() {
        this.isExist = true
        this.size = minSize
        this.speed = minSpeed + (Math.random() * (maxSpeed - minSpeed))
        this.increaseSpeed = minSpeed + (Math.random() * (maxSpeed - minSpeed)) 
        this.position ={
            x: maxX * 0.4 + Math.random() * (maxX * 0.2),
            y: -maxY * 0.2 - Math.random() * (maxY * 0.3)
        }
        this.rotation = Math.random() * (Math.PI)
        snowflakes.push(this)
    }

    tick(time) {
        const increase = time.elapsedMS * this.increaseSpeed
        moveSprite(this, time.elapsedMS * this.speed)
        this.speed += increase * 0.1
        this.size += increase * 2
        if (this.position.x > maxX
        || this.position.x < 0
        || this.position.y > maxY ) {
            this.isExist = false
            reserve.push(this)
        }

        if (isAcceleratedTime) this.speed *= 2
    }
}

class Snow extends Graphics {
    constructor() {
        super()

        updateSnowCount()
        tickerAdd(this)
    }

    addSnowflake() {
        if (reserve.length) reserve.pop().init()
        else new Snowflake()
    }

    tick(time) {
        if (isSnow) this.addSnowflake()
        this.clear()
        snowflakes.forEach(s => {
            s.tick(time)
            this.circle(s.position.x, s.position.y, s.size)
            this.fill('white')

        })
        snowflakes = snowflakes.filter( s => s.isExist )
    }
}

export default Snow