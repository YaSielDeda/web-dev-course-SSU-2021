import { CANVAS_WIDTH } from "../../../constants";
import { AbstractState } from "../../../Entities/Abstract/AbstractState";
import { MovingPlatformStates } from "../../../Entities/Abstract/Enums/MovingPlatformStates";

export class MoveRight extends AbstractState {
    constructor(platform) {
        super(platform);
    }
    doNow() {
        if (this.abstractGameObject.RightBorder != CANVAS_WIDTH){
            this.abstractGameObject.CenterPoint.x++;
            this.abstractGameObject.LeftBorder++;
            this.abstractGameObject.RightBorder++;
        }
        else
            this.doNext();
    }
    doNext() {
        this.abstractGameObject.state = MovingPlatformStates.MoveLeft;
    }
}