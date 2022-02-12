import { PLATFORM_HEIGHT, PLATFORM_WIDTH, CANVAS_HEIGHT } from '../../constants.js';
import { AbstractGameObject } from './AbstractGameObject.js';
import { Point } from './Point.js';

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

export class AbstractPlatform extends AbstractGameObject {
    arr = [];
    constructor(CenterPoint) {
        super(CenterPoint);
        this.#fillArr();
    }
    #fillArr() {
        let startValue = this.CenterPoint.x - PLATFORM_WIDTH / 2;

        for (let i = 0; i < PLATFORM_WIDTH; i++) {
            this.arr[i] = new Point(startValue + i, this.CenterPoint.y);
        }
    }
    drawPlatform() {
        ctx.beginPath();
        ctx.fillStyle = "green";
        ctx.fillRect (this.CenterPoint.x, CANVAS_HEIGHT - this.CenterPoint.y, PLATFORM_WIDTH, PLATFORM_HEIGHT);
    }
}