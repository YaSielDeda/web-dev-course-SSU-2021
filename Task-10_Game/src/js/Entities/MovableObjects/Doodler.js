import { DOODLER_HEIGHT, DOODLER_WIDTH, JUMP_HEIGHT, CANVAS_WIDTH, CANVAS_HEIGHT } from '../../constants.js';
import {AbstractMovingGameObject} from'../Abstract/AbstractMovingGameObject.js';
import { Point } from '../Abstract/Point.js';
import { DoodlerStates } from '/src/js/Entities/Abstract/Enums/DoodlerStates.js';

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

export class Doodler extends AbstractMovingGameObject {
    state;
    currentJumpPointsNumber;
    constructor() {
        let point = new Point(CANVAS_WIDTH / 2, 50) // Default spawn point
        super(point);

        this.currentJumpPointsNumber = 0;
        this.state = DoodlerStates.Jump;

        console.log(`doodler spawned at the point (${this.CenterPoint.x}: ${this.CenterPoint.y})`);
    }
    jump() {
        super.moveUp();
        this.currentJumpPointsNumber++;

        console.log(`doodler jumped to the point (${this.CenterPoint.x}: ${this.CenterPoint.y})`);
    }
    fall() {
        super.moveDown();

        console.log(`doodler has falled to the point (${this.CenterPoint.x}: ${this.CenterPoint.y})`);
    }
    //TODO:
    // shoot(destination) {

    // }
    drawDoodler() {
        ctx.beginPath();
        ctx.fillStyle = "violet";
        ctx.fillRect (this.CenterPoint.x, CANVAS_HEIGHT - this.CenterPoint.y, DOODLER_WIDTH, DOODLER_HEIGHT);
    }
}