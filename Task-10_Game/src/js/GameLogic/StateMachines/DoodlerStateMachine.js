import { DoodlerStates } from "../../Entities/Abstract/Enums/DoodlerStates";
import { Fall } from "./DoodlerStates/Fall";
import { Jump } from "./DoodlerStates/Jump";
import { MoveLeft } from "./DoodlerStates/MoveLeft";

export class DoodlerStateMachine {
    DoCurrentStateLogic(doodler, platforms) {
        //#region doesn't work
        // if(doodler.previousState == undefined) {
        //     document.addEventListener('keydown', function(event) {
        //         if (event.code == 'ArrowLeft') {
        //             doodler.previousState = doodler.state;  // => prevstate = jump
        //             doodler.state = DoodlerStates.MoveLeft; // => curstate = left
        //         }
        //         if (event.code == 'ArrowRight') {
        //             doodler.state = DoodlerStates.MoveRight;
        //         }
        //     });
        // }
        // else {
        //     doodler.state = doodler.previousState;
        //     doodler.previousState = undefined;
        // }
        //#endregion

        if(doodler.previousState == undefined) {
            document.addEventListener('keydown', function(event) {
                if (event.code == 'ArrowLeft') {
                    doodler.moveToLeft();
                }
                if (event.code == 'ArrowRight') {
                    doodler.moveToRight();
                }
            });
        }
        
        switch (doodler.state) {
            case DoodlerStates.Jump:
                console.log("Jumping!");
                new Jump(doodler).doNow();
                break;
            case DoodlerStates.Fall:
                console.log("Falling!");
                new Fall(doodler, platforms).doNow();
                break;
            // case DoodlerStates.MoveLeft:
            //     console.log("Moving Left");
            //     new MoveLeft(doodler).doNow();
            //     break;
            // case DoodlerStates.MoveRight:
            //     console.log("Moving Right");

            //     break;
            //TODO: shoot, move left, move right cases
            default:
                break;
        }
    }
}