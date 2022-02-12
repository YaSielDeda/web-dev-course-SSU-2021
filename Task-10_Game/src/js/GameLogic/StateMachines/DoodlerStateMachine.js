import { DoodlerStates } from "../../Entities/Abstract/Enums/DoodlerStates";
import { Fall } from "./DoodlerStates/Fall";
import { Jump } from "./DoodlerStates/Jump";

export class DoodlerStateMachine {
    #platforms;
    constructor(doodler, platforms) {
        this.doodler = doodler;
        this.#platforms = platforms;
    }
    DoCurrentStateLogic() {
        switch (this.doodler.state) {
            case DoodlerStates.Jump:
                console.log("Jumping!");
                new Jump(this.doodler).doNow();
                break;
            case DoodlerStates.Fall:
                console.log("Falling!");
                new Fall(this.doodler, this.#platforms).doNow();
                break;
            //TODO: shoot, move left, move right cases
            default:
                break;
        }
    }
}