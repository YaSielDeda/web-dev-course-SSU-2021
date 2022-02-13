import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../constants";
import { GenerateDoodler, GenerateFirstFiveDefaultPlatforms } from "./GameObjectsGenerator";
import { DoodlerStateMachine } from "./StateMachines/DoodlerStateMachine";

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let doodler = GenerateDoodler();

let platforms = GenerateFirstFiveDefaultPlatforms();

requestAnimationFrame(tick);

function tick() {
    requestAnimationFrame(tick);

    /* CLEAR FIELD */
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    /* OBJECTS POSITIONS AT CANVAS UPDATING */
    let doodlerStateMachine = new DoodlerStateMachine(doodler, platforms);
    doodlerStateMachine.DoCurrentStateLogic();

    /* OBJECTS RENDERING */
    platforms.forEach(element => {
        element.drawPlatform();
    });

    doodler.drawDoodler();
};