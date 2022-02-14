import { AbstractPlatform } from "../../Abstract/AbstractPlatform";

export class DefaultPlatform extends AbstractPlatform {
    color = 'green';
    constructor(CenterPoint) {
        super(CenterPoint);
    }
}