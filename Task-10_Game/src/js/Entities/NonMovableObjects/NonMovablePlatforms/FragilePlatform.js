import { AbstractPlatform } from "../../Abstract/AbstractPlatform";

export class FragilePlatform extends AbstractPlatform {
    color = "bisque";
    isBroken = false;
    constructor(CenterPoint) {
        super(CenterPoint);
    }
    //TODO:
    break() {
        this.isBroken = true;
    }
}