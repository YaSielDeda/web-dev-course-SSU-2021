import { MONSTER_MOVEMENT_DIAPASON } from "../../../constants";
import { MonsterStateTypes } from "../../../Entities/Abstract/Enums/MonsterStateTypes";

export class MoveRight {
    doNow(monster) {
        if(monster.SpawnPoint.x + MONSTER_MOVEMENT_DIAPASON / 2 >= monster.CenterPoint.x)
            monster.CenterPoint.x++;
        else
            this.#doNext(monster);
    }
    #doNext(monster) {
        monster.state = MonsterStateTypes.MoveLeft;
    }
}