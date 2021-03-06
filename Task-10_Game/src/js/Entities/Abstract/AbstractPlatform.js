import { PLATFORM_HEIGHT, PLATFORM_WIDTH, CANVAS_HEIGHT, DOODLER_WIDTH } from '../../constants.js';
import { AbstractGameObject } from './AbstractGameObject.js';

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
    draw(platformName) {
        // ctx.beginPath();
        // ctx.fillStyle = color;
        // ctx.fillRect (this.CenterPoint.x - PLATFORM_WIDTH / 2 + DOODLER_WIDTH, CANVAS_HEIGHT - this.CenterPoint.y, PLATFORM_WIDTH - DOODLER_WIDTH, PLATFORM_HEIGHT);

        var img = new Image();

        img.src = "./images/content/sprites/platforms/" + platformName;

        ctx.drawImage(img, this.CenterPoint.x - PLATFORM_WIDTH / 2 + DOODLER_WIDTH * 0.5, CANVAS_HEIGHT - this.CenterPoint.y, PLATFORM_WIDTH - DOODLER_WIDTH * 0.5, PLATFORM_HEIGHT);
    }
}