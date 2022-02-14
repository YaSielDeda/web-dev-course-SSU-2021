import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../constants";
import { MovingPlatform } from "../Entities/MovableObjects/MovablePlatforms/MovingPlatform";
import { FragilePlatform } from "../Entities/NonMovableObjects/NonMovablePlatforms/FragilePlatform";
import { GenerateDefaultPlatform, GenerateDoodler, GenerateFirstEightDefaultPlatforms, GenerateNotDefaultPlatform, GetRandomInt } from "./GameObjectsGenerator";
import { DoodlerStateMachine } from "./StateMachines/DoodlerStateMachine";
import { MovingPlatformStateMachine } from "./StateMachines/MovingPlatformStateMachine";

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let doodler = GenerateDoodler();

let platforms = GenerateFirstEightDefaultPlatforms();

let dodlerStateMachine = new DoodlerStateMachine();

let movingPlatformStateMachine = new MovingPlatformStateMachine(); 

requestAnimationFrame(tick);

function tick() {
    requestAnimationFrame(tick);

    /* CLEAR FIELD */
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    /* OBJECTS POSITIONS AT CANVAS UPDATING */

    //#region DOODLER
    dodlerStateMachine.DoCurrentStateLogic(doodler, platforms)
    //#endregion

    //#region PLATFORMS
    if (doodler.CenterPoint.y >= CANVAS_HEIGHT / 2) {
        platforms.forEach(platform => {
            platform.CenterPoint.y--;
        });

        // TODO: replace 0 element removing by findIndex method
        if (platforms[0].CenterPoint.y <= 0){
            platforms.splice(0, 1);

            let newPlatform = GenerateDefaultPlatform(platforms[platforms.length -1].CenterPoint.y);
            platforms.push(newPlatform);

            if(GetRandomInt(1, 2) == 1){
                let notDefaultPlatform = GenerateNotDefaultPlatform(platforms[platforms.length -2].CenterPoint.y)
                platforms.push(notDefaultPlatform);
            }
        }
    }

    platforms.forEach(platform => {
        if(platform.isBroken) {
            platform.CenterPoint.y -= 2;
        }
    });

    platforms.forEach(platform => {
        if(platform instanceof MovingPlatform) {
            movingPlatformStateMachine.DoCurrentStateLogic(platform);
        }
    });
    //#endregion

    /* OBJECTS RENDERING */
    platforms.forEach(platform => {
        platform.drawPlatform(platform.color);
    });

    doodler.drawDoodler();
};