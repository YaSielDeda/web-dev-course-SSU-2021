export class MonsterTypes {
    static None = new MonsterTypes("none");
    static Dynamic = new MonsterTypes("dynamic");
    static Static = new MonsterTypes("static");
  
    constructor(name) {
      this.name = name
    }
  }