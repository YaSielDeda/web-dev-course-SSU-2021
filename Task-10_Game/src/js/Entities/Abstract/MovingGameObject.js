import { GameObject } from "./GameObject";

export class MovingGameObject extends GameObject {
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