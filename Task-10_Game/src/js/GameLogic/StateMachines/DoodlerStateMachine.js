import { DoodlerStates } from "../../Entities/Abstract/Enums/DoodlerStates";
import { Fall } from "./DoodlerStates/Fall";
import { Jump } from "./DoodlerStates/Jump";
import { Bullet } from "../../Entities/MovableObjects/Bullet";

export class DoodlerStateMachine {
    DoCurrentStateLogic(doodler, platforms) {

        /* Keyboard handler */
        document.addEventListener('keydown', function(event) {
            if (event.code == 'ArrowLeft') {
                doodler.moveToLeft();
            }
            if (event.code == 'ArrowRight') {
                doodler.moveToRight();
            }
        });
        
        switch (doodler.state) {
            case DoodlerStates.Jump:
                console.log("Jumping!");
                new Jump(doodler).doNow();
                break;
            case DoodlerStates.Fall:
                console.log("Falling!");
                new Fall(doodler, platforms).doNow();
                break;
            default:
                break;
        }
    }
}