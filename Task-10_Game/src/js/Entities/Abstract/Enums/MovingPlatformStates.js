export class MovingPlatformStates {
    static None = new MovingPlatformStates("none");
    static MoveLeft = new MovingPlatformStates("moveLeft");
    static MoveRight = new MovingPlatformStates("moveRight");
  
    constructor(name) {
      this.name = name
    }
  }