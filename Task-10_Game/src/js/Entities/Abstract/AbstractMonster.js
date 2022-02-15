import { CANVAS_HEIGHT, MONSTER_HEIGHT, MONSTER_WIDTH } from "../../constants";
import { AbstractMovingGameObject } from "./AbstractMovingGameObject";

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

export class AbstractMonster extends AbstractMovingGameObject {
    isMovable = false;
    isAttacking = false;
    constructor(CenterPoint) {
        super(CenterPoint);
    }
    //TODO: different proportions for different types of enemies
    drawMonster(color) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.fillRect (this.CenterPoint.x, CANVAS_HEIGHT - this.CenterPoint.y, MONSTER_WIDTH, MONSTER_HEIGHT);
    }
}