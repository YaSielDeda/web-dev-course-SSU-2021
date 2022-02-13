export class PlatformType {
    static None = new PlatformType("none");
    static Default = new PlatformType("default");
    static Moving = new PlatformType("moving");
    static Fragile = new PlatformType("fragile");
  
    constructor(name) {
      this.name = name
    }
  }