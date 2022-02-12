import { AbstractGameObject } from "./AbstractGameObject";

export class MovingGameObject extends AbstractGameObject {
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
    this.CenterPoint.y += 1;
  }
  moveDown() {
    this.CenterPoint.y -= 1;
  }
}