import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../constants";
import { MovingPlatform } from "../Entities/MovableObjects/MovablePlatforms/MovingPlatform";
import { GenerateDefaultPlatform, GenerateDoodler, GenerateFirstEightDefaultPlatforms, GenerateNotDefaultPlatform, GenerateRandomMonster, GetRandomInt } from "./GameObjectsGenerator";
import { DoodlerStateMachine } from "./StateMachines/DoodlerStateMachine";
import { MovingPlatformStateMachine } from "./StateMachines/MovingPlatformStateMachine";

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let doodler = GenerateDoodler();

let platforms = GenerateFirstEightDefaultPlatforms();

let monsters = [];

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

        if (platforms[0].CenterPoint.y <= 0){
            /* DELETING OUT OF CANVAS LOWER BOUND PLATFORMS*/
            let indexOfOutOfBoundPlatform = platforms.findIndex(platform => platform.CenterPoint.y <= 0);
            platforms.splice(indexOfOutOfBoundPlatform, 1);

            let newPlatform = GenerateDefaultPlatform(platforms[platforms.length -1].CenterPoint.y);
            platforms.push(newPlatform);

            /* GENERATING RANDOM PLATFORM */
            if(GetRandomInt(1, 2) == 1){
                let notDefaultPlatform = GenerateNotDefaultPlatform(platforms[platforms.length -2].CenterPoint.y);
                platforms.push(notDefaultPlatform);
            }
        }
    }

    /* FASTER FALLING FOR BROKEN PLATFORMS */
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

    //#region MONSTERS
    if (doodler.CenterPoint.y >= CANVAS_HEIGHT / 2) {
        monsters.forEach(monster => {
            monster.CenterPoint.y--;
        });

        let indexOfOutOfBoundMonster = monsters.findIndex(monster => monster.CenterPoint.y <= 0);
        monsters.splice(indexOfOutOfBoundMonster, 1);

        if(GetRandomInt(1, 1000) == 1){
            let monster = GenerateRandomMonster();
            monsters.push(monster);
        }
    }

    // monsters.forEach(monster => {
    //     if
    // });
    //#endregion

    /* OBJECTS RENDERING */
    platforms.forEach(platform => {
        platform.drawPlatform(platform.color);
    });


    monsters.forEach(monster => {
        monster.drawMonster('red');
    });

    doodler.drawDoodler();
};