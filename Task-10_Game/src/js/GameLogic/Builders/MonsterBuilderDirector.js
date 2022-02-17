import { GetRandomInt } from "../GameObjectsGenerator";
import { MonsterBuilder } from "./MonsterBuilder";

export class MonsterBuilderDirector {
    GetNewRandomizedMonster() {
        let monsterBuilder = new MonsterBuilder();
        
        if(GetRandomInt(1, 2) == 1){}
            monsterBuilder.makeMovable();

        if(GetRandomInt(1, 2) == 1)
            monsterBuilder.makeAttacking();

        return monsterBuilder.getResult();
    }
}