import SnakeSegment from "./snakeSegment";
import { canvasWidth, canvasHeight } from "./game";
export default class Snake {
  constructor(scene, length, speed, separation) {
    this.scene = scene;
    this.length = length;
    this.speed = speed;
    this.separation = separation;
    this.segments = [];
    this.head = new SnakeSegment(
      scene,
      null,
      canvasWidth / 2,
      canvasHeight / 2,
      999
    );
    this.tail = this.head;
    this.segments.push(this.head);

    for (let i = 0; i < this.length; i++) {
      this.addSegment();
    }
  }
  addSegment() {
    this.tail = new SnakeSegment(
      this.scene,
      this.segments.length === 0 ? null : this.tail,
      canvasWidth / 2,
      this.tail.image.y + this.separation,
      this.tail.zIndex - 1
    );
    this.segments.push(this.tail);
  }
}
