import { DOODLER_HEIGHT } from "../../../constants";
import { AbstractState } from "../../../Entities/Abstract/AbstractState";
import { DoodlerStates } from "../../../Entities/Abstract/Enums/DoodlerStates";

export class Fall extends AbstractState {
    #platforms;
    constructor(doodler, platforms) {
        super(doodler);
        this.#platforms = platforms;
    }
    doNow() {
        this.abstractGameObject.fall(this.#platforms);
        this.#doNext();
    }
    #doNext() {
        let isOnSurface = false;

        this.#platforms.forEach(platform => {
            for (let j = 0; j < platform.arr.length; j++){
                
                if(platform.arr[j].x == this.abstractGameObject.CenterPoint.x && platform.arr[j].y == this.abstractGameObject.CenterPoint.y - DOODLER_HEIGHT){
                    isOnSurface = true;
                    break;
                }
            }
        });

        if(isOnSurface) {
            this.abstractGameObject.state = DoodlerStates.Jump;
        }

        /* GAME OVER */
        if(this.abstractGameObject.CenterPoint.y <= 0) {
            this.abstractGameObject.state = DoodlerStates.None;
        }
    }
}