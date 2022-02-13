import { PLATFORM_HEIGHT, PLATFORM_WIDTH, CANVAS_HEIGHT } from '../../constants.js';
import { AbstractGameObject } from './AbstractGameObject.js';
import { Point } from './Point.js';

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

export class AbstractPlatform extends AbstractGameObject {
    LeftBorder;
    RightBorder;
    constructor(CenterPoint) {
        super(CenterPoint);
        this.LeftBorder = this.CenterPoint.x - PLATFORM_WIDTH / 2;
        this.RightBorder = this.CenterPoint.x + PLATFORM_WIDTH / 2;
    }
    drawPlatform() {
        ctx.beginPath();
        ctx.fillStyle = "green";
        ctx.fillRect (this.CenterPoint.x - PLATFORM_WIDTH / 2, CANVAS_HEIGHT - this.CenterPoint.y, PLATFORM_WIDTH, PLATFORM_HEIGHT);
    }
}