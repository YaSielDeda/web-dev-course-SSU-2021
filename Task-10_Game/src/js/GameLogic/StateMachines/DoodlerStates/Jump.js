import { JUMP_HEIGHT } from "../../../constants";
import { AbstractState } from "../../../Entities/Abstract/AbstractState";
import { DoodlerStates } from "../../../Entities/Abstract/Enums/DoodlerStates";
import { Doodler } from "../../../Entities/MovableObjects/Doodler";

export class Jump extends AbstractState {
    constructor(doodler) {
        super(doodler);
    }
    doNow() {
        this.abstractGameObject.jump();
        this.#doNext();
    }
    //TODO: add shoot event handler and turn "if" into switch
    #doNext() {
        if(this.abstractGameObject.currentJumpPointsNumber >= JUMP_HEIGHT) {
            this.abstractGameObject.state = DoodlerStates.Fall;
            this.abstractGameObject.currentJumpPointsNumber = 0;
        }
    }
}