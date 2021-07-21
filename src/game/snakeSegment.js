import Phaser from "phaser";

export default class SnakeSegment {
  constructor(scene, next, initialXPos, initialYPos, zIndex) {
    this.next = next;
    this.initialXPos = initialXPos;
    this.initialYPos = initialYPos;
    this.zIndex = zIndex;

    this.image = scene.physics.add.image(
      this.initialXPos,
      this.initialYPos,
      "circle"
    );
    this.image.setDepth(this.zIndex);
  }
}
