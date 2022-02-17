import { CANVAS_HEIGHT, CANVAS_WIDTH, DOODLER_HEIGHT, DOODLER_WIDTH } from "../constants";
import { DoodlerStates } from "../Entities/Abstract/Enums/DoodlerStates";
import { Bullet } from "../Entities/MovableObjects/Bullet";
import { MovingPlatform } from "../Entities/MovableObjects/MovablePlatforms/MovingPlatform";
import { DefaultPlatform } from "../Entities/NonMovableObjects/NonMovablePlatforms/DefaultPlatform";
import { FragilePlatform } from "../Entities/NonMovableObjects/NonMovablePlatforms/FragilePlatform";
import { GenerateDefaultPlatform, GenerateDoodler, GenerateFirstEightDefaultPlatforms, GenerateNotDefaultPlatform, GenerateRandomMonster, GetRandomInt } from "./GameObjectsGenerator";
import { DoodlerStateMachine } from "./StateMachines/DoodlerStateMachine";
import { MonsterStateMachine } from "./StateMachines/MonsterStateMachine";
import { MovingPlatformStateMachine } from "./StateMachines/MovingPlatformStateMachine";
import { Vector } from '/src/js/Entities/Abstract/Vector.js';

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let doodler;

let platforms;

let monsters;

let bullets;

let dodlerStateMachine;

let monsterStateMachine;

let movingPlatformStateMachine;

// localStorage.setItem('highscore', 0);

let score;
let highscore;

/* Start game button */
let startButton = document.getElementsByClassName("start-game-button")[0];
startButton.addEventListener('click', init, false);

let retryButton = document.getElementsByClassName("retry-button")[0];
retryButton.addEventListener('click', init, false);
retryButton.hidden = true;

// let font = new FontFace('Gagalin', 'url(/src/fonts/Gagalin-Regular.otf)');
// document.fonts.add(font);

function init(){
    startButton.hidden = true;
    retryButton.hidden = true;

    doodler = GenerateDoodler();

    platforms = GenerateFirstEightDefaultPlatforms();

    monsters = [];

    bullets = [];

    dodlerStateMachine = new DoodlerStateMachine();

    monsterStateMachine = new MonsterStateMachine();

    movingPlatformStateMachine = new MovingPlatformStateMachine();

    score = 0;

    highscore = localStorage.getItem('highscore');

    tick();
}

function tick() {
    if (doodler.state !== DoodlerStates.None)
        requestAnimationFrame(tick);
    else {
        retryButton.hidden = false;
        if (highscore < score)
        localStorage.setItem('highscore', score);
    }

    /* CLEAR FIELD */
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    /* OBJECTS POSITIONS AT CANVAS UPDATING */

    //#region DOODLER
    dodlerStateMachine.DoCurrentStateLogic(doodler, platforms)

    /* ADD NEW BULLET */
    // document.addEventListener('click', logKey);

    // function logKey(e) {
    //     console.log(`Screen X/Y: ${e.screenX}, ${e.screenY}`);
    // }
    //#endregion

    //#region PLATFORMS
    if (doodler.CenterPoint.y >= CANVAS_HEIGHT / 2) {
        score++;
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
            if(GetRandomInt(1, 2) === 1){
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

        /* DELETING FROM THE CANVAS LOWER THAN LOWER BOUND MONSTERS */
        let indexOfOutOfBoundMonster = monsters.findIndex(monster => monster.CenterPoint.y <= 0);
        if (indexOfOutOfBoundMonster !== -1)
            monsters.splice(indexOfOutOfBoundMonster, 1);

        /* GENERATING RANDOM MONSTER */
        if(GetRandomInt(1, 1000) === 1){
            let monster = GenerateRandomMonster();

            let number = GetRandomInt(1, 3);
            monster.numberOfPic = number;

            monsters.push(monster);
        }
    }

    /* Shooting at the doodler */
    if(monsters.length > 0){
        if(GetRandomInt(1, 100) === 1) {
            let index = GetRandomInt(0, monsters.length - 1);

            let bullet = new Bullet(monsters[index].CenterPoint);

            let vector = new Vector(doodler.CenterPoint.x - monsters[index].CenterPoint.x,
                                    doodler.CenterPoint.y - monsters[index].CenterPoint.y);
            
            bullet.AddVector(vector);
            bullet.Normalize();
            bullets.push(bullet);
        }
    }

    monsters.forEach(monster => {
        if(monster.isMovable || monster.isAttacking)
            monsterStateMachine.DoCurrentStateLogic(monster, bullets);
    });
    //#endregion

    //#region BULLETS
    bullets.forEach(bullet => {
        bullet.Move();
    });

    bullets.forEach(bullet => {
        let indexOfOutOfBoundBullet = bullets.findIndex(bullet => bullet.CenterPoint.x <= 0 || bullet.CenterPoint.x >= CANVAS_WIDTH ||
                                                                  bullet.CenterPoint.y <= 0 || bullet.CenterPoint.y >= CANVAS_HEIGHT);
        
        if(indexOfOutOfBoundBullet !== -1)                                                                  
            bullets.splice(indexOfOutOfBoundBullet, 1);
    });

    bullets.forEach(bullet => {
        if (bullet.CenterPoint.x >= doodler.CenterPoint.x - DOODLER_WIDTH / 2 && bullet.CenterPoint.x <= doodler.CenterPoint.x + DOODLER_WIDTH / 2){
            if (bullet.CenterPoint.y >= doodler.CenterPoint.y - DOODLER_HEIGHT / 2 && bullet.CenterPoint.y <= doodler.CenterPoint.y + DOODLER_HEIGHT / 2){
                doodler.state = DoodlerStates.None;
                let index = bullets.findIndex(x => x.CenterPoint.x === bullet.CenterPoint.x && x.CenterPoint.y === bullet.CenterPoint.y);
                bullets.splice(index, 1);
            }
        }
    });
    //#endregion

    /* OBJECTS RENDERING */
    monsters.forEach(monster => {
        if(monster.isMovable) {
            monster.draw(`moving monster ${monster.numberOfPic}.png`)
        }
        else {
            monster.draw(`static monster ${monster.numberOfPic}.png`)
        }
    });

    platforms.forEach(platform => {
        switch (platform.color) {
            case "green":
                platform.draw("platform.png");
                break;
            case "blue":
                platform.draw("moving platform.png");
                break;
            case "bisque":
                platform.draw("fragile platform.png");
                break;
            default:
                break;
        }
    });

    bullets.forEach(bullet => {
        bullet.draw();
    });

    doodler.draw("default.png");

    ctx.font = "30px Gagalin";
    ctx.fillText(score, CANVAS_WIDTH - 70, CANVAS_HEIGHT - 50);

    ctx.font = "30px Gagalin";
    ctx.fillText(highscore, CANVAS_WIDTH - 70, CANVAS_HEIGHT - 20);
};