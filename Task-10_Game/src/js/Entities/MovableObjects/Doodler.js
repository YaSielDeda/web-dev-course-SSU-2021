import { DOODLER_HEIGHT, DOODLER_WIDTH, JUMP_HEIGHT, CANVAS_WIDTH, CANVAS_HEIGHT, DEFAULT_SPAWN_POINT } from '../../constants.js';
import { AbstractMovingGameObject } from'../Abstract/AbstractMovingGameObject.js';
import { Point } from '../Abstract/Point.js';
import { DoodlerStates } from '/src/js/Entities/Abstract/Enums/DoodlerStates.js';

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

export class Doodler extends AbstractMovingGameObject {
    state;
    //previousState;
    currentJumpPointsNumber;
    constructor() {
        let point = new Point(CANVAS_WIDTH / 2, 50); // Default spawn point
        super(point);

        this.currentJumpPointsNumber = 0;
        this.state = DoodlerStates.Jump;

        console.log(`doodler spawned at the point (${this.CenterPoint.x}: ${this.CenterPoint.y})`);
    }
    moveUp() {
        this.CenterPoint.y += 2;
        this.currentJumpPointsNumber += 2;

        console.log(`doodler jumped to the point (${this.CenterPoint.x}: ${this.CenterPoint.y})`);
    }
    moveDown() {
        this.CenterPoint.y -= 2;

        console.log(`doodler has falled to the point (${this.CenterPoint.x}: ${this.CenterPoint.y})`);
    }
    moveToLeft() {
        this.CenterPoint.x -= 0.02
    }
    moveToRight() {
        this.CenterPoint.x += 0.02
    }
    // TODO:
    // shoot(destination) {

    // }
    drawDoodler() {
        ctx.beginPath();
        ctx.fillStyle = "violet";
        ctx.fillRect (this.CenterPoint.x, CANVAS_HEIGHT - this.CenterPoint.y, DOODLER_WIDTH, DOODLER_HEIGHT);
    }
}