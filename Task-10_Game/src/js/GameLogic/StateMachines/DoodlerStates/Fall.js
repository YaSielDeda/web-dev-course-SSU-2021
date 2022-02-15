import { DOODLER_HEIGHT, POSSIBLE_DIAPASONE_BY_Y } from "../../../constants";
import { AbstractState } from '../../../Entities/Abstract/AbstractState';
import { DoodlerStates } from "../../../Entities/Abstract/Enums/DoodlerStates";
import { FragilePlatform } from "../../../Entities/NonMovableObjects/NonMovablePlatforms/FragilePlatform";

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
            /* Checks if doodler in range of some platform by X axis */
            if (platform.LeftBorder <= this.abstractGameObject.CenterPoint.x &&
                platform.RightBorder >= this.abstractGameObject.CenterPoint.x) {

                /* Checks if doodler in range of some platform by Y axis */
                if (platform.CenterPoint.y - POSSIBLE_DIAPASONE_BY_Y <= this.abstractGameObject.CenterPoint.y - DOODLER_HEIGHT &&
                    platform.CenterPoint.y + POSSIBLE_DIAPASONE_BY_Y >= this.abstractGameObject.CenterPoint.y - DOODLER_HEIGHT){
                        
                    platform instanceof FragilePlatform ? platform.break() : isOnSurface = true;
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