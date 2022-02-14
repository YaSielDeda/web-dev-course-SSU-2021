import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../../constants';
import { Point } from '../../Entities/Abstract/Point';
import { GetRandomInt } from '../GameObjectsGenerator';
import { AbstractMonster } from 'C:/Users/bereg/Documents/web-dev-course-SSU-2021/Task-10_Game/src/js/Entities/Abstract/AbstractMonster.js';

export class MonsterBuilder {
    constructor(){
        let CenterPoint = new Point(GetRandomInt(0, CANVAS_WIDTH), CANVAS_HEIGHT);
        this.abstractMonster = new AbstractMonster(CenterPoint);
    }
    makeMovable() {
        this.abstractMonster.isMovable = true;
    }
    makeAttacking() {
        this.abstractMonster.isAttacking = true;
    }
    getResult() {
        return this.abstractMonster;
    }
}