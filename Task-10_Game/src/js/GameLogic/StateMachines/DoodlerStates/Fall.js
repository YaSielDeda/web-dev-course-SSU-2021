import { DOODLER_HEIGHT } from "../../../constants";
import { AbstractState } from "../../../Entities/Abstract/AbstractState";
import { DoodlerStates } from "../../../Entities/Abstract/Enums/DoodlerStates";

export class Fall extends AbstractState {
    platforms;
    constructor(doodler, platforms) {
        super(doodler);
        this.platforms = platforms;
    }
    doNow() {
        this.abstractGameObject.moveDown(this.platforms);
        this.#doNext();
    }
    #doNext() {
        let isOnSurface = false;

        this.platforms.forEach(platform => {
            if (platform.LeftBorder <= this.abstractGameObject.CenterPoint.x && platform.RightBorder >= this.abstractGameObject.CenterPoint.x) {
                if (platform.CenterPoint.y == this.abstractGameObject.CenterPoint.y - DOODLER_HEIGHT){
                    isOnSurface = true;
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