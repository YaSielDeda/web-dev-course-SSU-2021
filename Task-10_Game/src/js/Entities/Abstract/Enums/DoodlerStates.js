export class DoodlerStates {
    static None = new DoodlerStates("none");
    static Jump = new DoodlerStates("jump");
    static Fall = new DoodlerStates("fall");
    static Shoot = new DoodlerStates("shoot");
    static MoveLeft = new DoodlerStates("moveLeft");
    static MoveRight = new DoodlerStates("moveLeft");
  
    constructor(name) {
      this.name = name
    }
  }