import { AbstractState } from "../../../Entities/Abstract/AbstractState";

export class MoveLeft extends AbstractState {
    constructor(doodler) {
        super(doodler);
    }
    doNow() {
        this.abstractGameObject.moveLeft();
        //this.#doNext();
    }
    // #doNext() {
    //     this.abstractGameObject.state = this.previousState;
    // }
}