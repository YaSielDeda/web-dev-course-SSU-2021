import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../../constants";

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

export class AbstractGameObject {
  constructor(point){
      this.CenterPoint = point;
  }
  clear() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  };
  update() {

  };
  render() {

  };
};