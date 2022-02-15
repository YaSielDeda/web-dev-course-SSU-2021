import { AbstractGameObject } from "./AbstractGameObject";

export class AbstractMovingGameObject extends AbstractGameObject {
  constructor(CenterPoint) {
    super(CenterPoint);
  }
  moveToLeft() {
    this.CenterPoint.x--;
  }
  moveToRight() {
    this.CenterPoint.x++;
  }
  moveUp() {
    this.CenterPoint.y++;
  }
  moveDown() {
    this.CenterPoint.y--;
  }
}