import { MovingPlatformStates } from "../../Entities/Abstract/Enums/MovingPlatformStates";
import { MoveLeft } from 'C:/Users/bereg/Documents/web-dev-course-SSU-2021/Task-10_Game/src/js/GameLogic/StateMachines/MovingPlatformStates/MoveLeft.js';
import { MoveRight } from 'C:/Users/bereg/Documents/web-dev-course-SSU-2021/Task-10_Game/src/js/GameLogic/StateMachines/MovingPlatformStates/MoveRight.js';

export class MovingPlatformStateMachine {
    DoCurrentStateLogic(platform) {
        switch (platform.state) {
            case MovingPlatformStates.MoveLeft:
                console.log("Platform moves left!");
                new MoveLeft(platform).doNow();
                break;
            case MovingPlatformStates.MoveRight:
                console.log("Platform moves right!");
                new MoveRight(platform).doNow();
                break;
            default:
                break;
        }
    }
}