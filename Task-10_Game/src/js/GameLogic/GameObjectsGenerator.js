import { Doodler } from "../Entities/MovableObjects/Doodler";
import { Point } from "../Entities/Abstract/Point";
import { DefaultPlatform } from "../Entities/NonMovableObjects/NonMovablePlatforms/DefaultPlatform";
import { FragilePlatform } from "C:/Users/bereg/Documents/web-dev-course-SSU-2021/Task-10_Game/src/js/Entities/NonMovableObjects/NonMovablePlatforms/FragilePlatform.js";
import { MovingPlatform } from "../Entities/MovableObjects/MovablePlatforms/MovingPlatform";
import { CANVAS_WIDTH, DISTANCE_BETWEEN_PLATFORMS } from "../constants";

export function GenerateDoodler() {
    return new Doodler();
}

export function GenerateDefaultPlatform(highestPlatformHeight) {
    let centerPoint = new Point(GetRandomInt(0, CANVAS_WIDTH), highestPlatformHeight + DISTANCE_BETWEEN_PLATFORMS);

    let platform = new DefaultPlatform(centerPoint);
    return platform;
}

export function GenerateNotDefaultPlatform(highestPlatformHeight) {
    let centerPoint = new Point(GetRandomInt(0, CANVAS_WIDTH), highestPlatformHeight + DISTANCE_BETWEEN_PLATFORMS - 30);

    let numberOfTypeOfPlatform = GetRandomInt(2, 3);

    let platform;

    switch (numberOfTypeOfPlatform) {
        case 2:
            platform = new MovingPlatform(centerPoint);
            break;
        case 3:
            platform = new FragilePlatform(centerPoint);
            break;
        default:
            break;
    }

    return platform;
}

export function GenerateFirstEightDefaultPlatforms() {
    let platforms = [];

    let firstPlatform = new DefaultPlatform(new Point(CANVAS_WIDTH / 2, 50)); // Platform under doodler;
    platforms.push(firstPlatform);

    for (let i = 1; i < 8; i++) {
        let centerPoint = new Point(GetRandomInt(0, CANVAS_WIDTH), DISTANCE_BETWEEN_PLATFORMS * i + 50);

        let platform = new DefaultPlatform(centerPoint);
        platforms.push(platform);
    }

    return platforms;
}

export function GetRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}