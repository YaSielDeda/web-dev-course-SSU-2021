import { GameObject } from './GameObject.js';
import { Point } from './Point.js';
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "/src/js/BrowserFeatures/GameField.js"

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

export class AbstractPlatform extends GameObject {
    arr = [];
    #width = 300;
    constructor(CenterPoint) {
        super(CenterPoint);
        this.#fillArr();
    }
    #fillArr() {
        let startValue = this.CenterPoint.x - this.#width / 2;

        for (let i = 0; i < this.#width; i++) {
            this.arr[i] = new Point(startValue + i, this.CenterPoint.y);
        }
    }
    drawPlatform() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        ctx.fillStyle = "rgb(0,0,200)";
        ctx.fillRect (this.CenterPoint.x, CANVAS_HEIGHT - this.CenterPoint.y, 85, 15);
    }
}