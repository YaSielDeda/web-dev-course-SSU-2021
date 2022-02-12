import { GenerateDoodler, GenerateFirstFiveDefaultPlatforms } from "./GameObjectsGenerator";

let doodler = GenerateDoodler();

let platforms = GenerateFirstFiveDefaultPlatforms();

requestAnimationFrame(tick);

function tick() {
    requestAnimationFrame(tick);

    // platforms.forEach(element => {
    //     element.drawPlatform();
    // });

    doodler.jump();
    doodler.fall(platforms);
};