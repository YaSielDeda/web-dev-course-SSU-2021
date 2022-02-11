import { CANVAS_WIDTH } from '../../../BrowserFeatures/GameField';
import { AbstractPlatform } from '../../Abstract/AbstractPlatform';

export class MovingPlatform extends AbstractPlatform {
    constructor(CenterPoint) {
        super(CenterPoint);
    }
    moveLeft() {
        while(this.arr[0] != 0) {
            arr.forEach(element => {
                element.x--;
            });
            super.drawPlatform();
        }
    }
    moveRight() {
        while(this.arr[-1] != CANVAS_WIDTH) {
            arr.forEach(element => {
                element.x++;
            });
            super.drawPlatform();
        }
    }
}