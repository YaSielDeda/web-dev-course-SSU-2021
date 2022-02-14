import { CANVAS_WIDTH } from '../../../constants';
import { AbstractPlatform } from '../../Abstract/AbstractPlatform';
import { MovingPlatformStates } from 'C:/Users/bereg/Documents/web-dev-course-SSU-2021/Task-10_Game/src/js/Entities/Abstract/Enums/MovingPlatformStates.js';

export class MovingPlatform extends AbstractPlatform {
    state;
    color = 'blue';
    constructor(CenterPoint) {
        super(CenterPoint);
        this.state = MovingPlatformStates.MoveLeft;
    }
}