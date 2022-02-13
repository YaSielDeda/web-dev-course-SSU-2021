import { Doodler } from "../Entities/MovableObjects/Doodler";
import { Point } from "../Entities/Abstract/Point";
import { DefaultPlatform } from "../Entities/NonMovableObjects/NonMovablePlatforms/DefaultPlatform";
import { CANVAS_WIDTH, PLATFORM_WIDTH } from "../constants";
// import { MovingPlatform } from "../Entities/MovableObjects/MovablePlatforms/MovingPlatform";
// import { FragilePlatform } from "../Entities/NonMovableObjects/NonMovablePlatforms/FragilePlatform";

export function GenerateDoodler() {
    return new Doodler();
}

export function GenerateFirstFiveDefaultPlatforms() {
    let distanceBetweenPlatforms = 120;
    
    let platforms = [];

    let firstPlatform = new DefaultPlatform(new Point(CANVAS_WIDTH / 2, 50)); // Platform under doodler;
    platforms.push(firstPlatform);

    for (let i = 1; i < 5; i++) {
        let centerPoint = new Point(getRandomArbitrary(0, CANVAS_WIDTH), distanceBetweenPlatforms * i + 50);

        let platform = new DefaultPlatform(centerPoint);
        platforms.push(platform);
    }

    return platforms;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}