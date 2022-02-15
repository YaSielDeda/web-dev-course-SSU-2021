import { MoveLeft } from './MonsterStates/MoveLeft';
import { MoveRight } from './MonsterStates/MoveRight';
import { MonsterStateTypes } from '/src/js/Entities/Abstract/Enums/MonsterStateTypes.js'

export class MonsterStateMachine {
    DoCurrentStateLogic(monster) {

        switch (monster.state) {
            case MonsterStateTypes.MoveLeft:
                new MoveLeft().doNow(monster);
                break;
            case MonsterStateTypes.MoveRight:
                new MoveRight().doNow(monster);
                break;
            default:
                break;
        }
    }
}