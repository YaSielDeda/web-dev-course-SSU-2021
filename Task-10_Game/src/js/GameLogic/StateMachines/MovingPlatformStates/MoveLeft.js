import { AbstractState } from "../../../Entities/Abstract/AbstractState";
import { MovingPlatformStates } from "../../../Entities/Abstract/Enums/MovingPlatformStates";

export class MoveLeft extends AbstractState {
    constructor(platform) {
        super(platform);
    }
    doNow() {
        if (this.abstractGameObject.LeftBorder != 0){
            this.abstractGameObject.CenterPoint.x--;
            this.abstractGameObject.LeftBorder--;
            this.abstractGameObject.RightBorder--;
        }
        else
            this.doNext();
    }
    doNext() {
        this.abstractGameObject.state = MovingPlatformStates.MoveRight;
    }
}