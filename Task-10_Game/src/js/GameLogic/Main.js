import { GenerateDoodler, GenerateFirstFiveDefaultPlatforms } from "./GameObjectsGenerator";

let doodler = GenerateDoodler();

let platforms = GenerateFirstFiveDefaultPlatforms();

function Jump5Times (){
    for (let i = 0; i < 5; i++){
        doodler.jump();
        doodler.fall(platforms);
    }
}

Jump5Times();