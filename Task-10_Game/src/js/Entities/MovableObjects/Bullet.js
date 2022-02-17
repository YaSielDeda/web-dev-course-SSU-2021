import { BULLET_HEIGHT, BULLET_WIDTH, CANVAS_HEIGHT, SPEED } from "../../constants";
import { AbstractMovingGameObject } from "../Abstract/AbstractMovingGameObject";
import { Point } from "../Abstract/Point";
import { Vector } from '/src/js/Entities/Abstract/Vector.js'

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

export class Bullet extends AbstractMovingGameObject{
    way;
    constructor(CenterPoint) {
        super(new Point(CenterPoint.x, CenterPoint.y));
    }
    AddVector(vector) {
        this.way = new Vector(0, 0);

        this.way.x += vector.x;
        this.way.y += vector.y;
    }
    Normalize() {
        this.way.x *= 1 / SPEED;
        this.way.y *= 1 / SPEED;
    }
    Move() {
        this.CenterPoint.x += this.way.x;
        this.CenterPoint.y += this.way.y;
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.fillRect (this.CenterPoint.x, CANVAS_HEIGHT - this.CenterPoint.y, BULLET_WIDTH, BULLET_HEIGHT);
    }
}