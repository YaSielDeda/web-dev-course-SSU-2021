import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../../constants';
import { MonsterStateTypes } from '../../Entities/Abstract/Enums/MonsterStateTypes';
import { Point } from '../../Entities/Abstract/Point';
import { GetRandomInt } from '../GameObjectsGenerator';
import { AbstractMonster } from '/src/js/Entities/Abstract/AbstractMonster.js';

export class MonsterBuilder {
    constructor(){
        let CenterPoint = new Point(GetRandomInt(0, CANVAS_WIDTH), CANVAS_HEIGHT);
        this.abstractMonster = new AbstractMonster(CenterPoint);
    }
    makeMovable() {
        this.abstractMonster.isMovable = true;
        this.abstractMonster.state = MonsterStateTypes.MoveLeft;
    }
    makeAttacking() {
        this.abstractMonster.isAttacking = true;
    }
    getResult() {
        return this.abstractMonster;
    }
}