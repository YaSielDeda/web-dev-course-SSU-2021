import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../../BrowserFeatures/GameField.js';
import {MovingGameObject} from'../Abstract/MovingGameObject.js';
import { Point } from '../Abstract/Point.js';

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

export class Doodler extends MovingGameObject {
    #jumpHeight = 150;
    constructor() {
        let point = new Point(CANVAS_WIDTH / 2, 50) // Default spawn point
        super(point);

        console.log(`doodler spawned at the point (${this.CenterPoint.x}: ${this.CenterPoint.y})`);
    }
    jump() {
        for (let i = 0; i < this.#jumpHeight; i++){
            super.moveUp();
            this.#drawDoodler();
        }

        console.log(`doodler jumped to the point (${this.CenterPoint.x}: ${this.CenterPoint.y})`);
    }
    fall(platforms) {
        let isOnSurface = false;

        do {
            platforms.forEach(platform => {
                for (let j = 0; j < platform.arr.length; j++){
                    if(platform.arr[j].x == this.CenterPoint.x && platform.arr[j].y == this.CenterPoint.y){
                        isOnSurface = true;
                        break;
                    }
                }
            });

            super.moveDown();
            this.#drawDoodler();

            if(isOnSurface)
                break;

        } while(this.CenterPoint.y > 0)

        console.log(`doodler has falled to the point (${this.CenterPoint.x}: ${this.CenterPoint.y})`);
    }
    //TODO:
    // shoot(destination) {

    // }
    #drawDoodler() {
        let doodlerWidth = 60;
        let doodlerHeight = 80;

        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect (this.CenterPoint.x, CANVAS_HEIGHT - this.CenterPoint.y, doodlerWidth, doodlerHeight);
    }
}