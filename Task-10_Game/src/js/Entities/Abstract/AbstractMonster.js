import { CANVAS_HEIGHT, MONSTER_HEIGHT, MONSTER_WIDTH } from "../../constants";
import { AbstractMovingGameObject } from "./AbstractMovingGameObject";
import { Point } from "./Point";

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

export class AbstractMonster extends AbstractMovingGameObject {
    isMovable = false;
    isAttacking = false;
    state;
    SpawnPoint;
    numperOfPic;
    constructor(CenterPoint) {
        super(CenterPoint);
        this.SpawnPoint = new Point(CenterPoint.x, CenterPoint.y);
    }
    draw(name) {
        // ctx.beginPath();
        // ctx.fillStyle = color;
        // ctx.fillRect (this.CenterPoint.x, CANVAS_HEIGHT - this.CenterPoint.y, MONSTER_WIDTH, MONSTER_HEIGHT);

        var img = new Image();

        img.src = "./images/content/sprites/monsters/" + name;

        ctx.drawImage(img, this.CenterPoint.x, CANVAS_HEIGHT - this.CenterPoint.y, MONSTER_WIDTH, MONSTER_HEIGHT);
    }
}