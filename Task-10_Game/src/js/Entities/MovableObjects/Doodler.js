import { DOODLER_HEIGHT, DOODLER_WIDTH, JUMP_HEIGHT, CANVAS_WIDTH, CANVAS_HEIGHT } from '../../constants.js';
import {MovingGameObject} from'../Abstract/MovingGameObject.js';
import { Point } from '../Abstract/Point.js';

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

export class Doodler extends MovingGameObject {
    constructor() {
        let point = new Point(CANVAS_WIDTH / 2, 50) // Default spawn point
        super(point);

        console.log(`doodler spawned at the point (${this.CenterPoint.x}: ${this.CenterPoint.y})`);
    }
    jump() {
        for (let i = 0; i < JUMP_HEIGHT; i++){
            super.moveUp();
            super.clear();
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
            super.clear();
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
        ctx.beginPath();
        ctx.fillRect (this.CenterPoint.x, CANVAS_HEIGHT - this.CenterPoint.y, DOODLER_WIDTH, DOODLER_HEIGHT);
        ctx.fillStyle = "red";
    }
}