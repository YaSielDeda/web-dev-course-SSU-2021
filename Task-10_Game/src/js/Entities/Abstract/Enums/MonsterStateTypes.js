export class MonsterStateTypes {
    static None = new MonsterStateTypes("none");
    static MoveLeft = new MonsterStateTypes("moveLeft");
    static MoveRight = new MonsterStateTypes("moveRight");
    static Shoot = new MonsterStateTypes("shoot");
  
    constructor(name) {
      this.name = name
    }
  }