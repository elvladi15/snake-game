import Phaser from "phaser";
import Snake from "./snake";
import utils from "./utils";

export const canvasWidth = 800;
export const canvasHeight = 500;
let ts, snake;
class MainScene extends Phaser.Scene {
  constructor() {
    super();
  }
  preload() {
    this.load.image("circle", "assets/circle.png");
    this.load.image("tile", "assets/tile.png");
  }
  create() {
    ts = this.add.tileSprite(
      200,
      500,
      2 * canvasWidth,
      2 * canvasHeight,
      "tile"
    );
    snake = new Snake(this, 20, 100, 15);
    //this.cameras.main.startFollow(snake.head.image);
  }
  update() {
    this.physics.moveToObject(
      snake.head.image,
      this.input.activePointer,
      snake.speed
    );
    let current = snake.tail;
    while (current !== null) {
      if (
        current.next &&
        utils.getDistance(
          current.image.x,
          current.image.y,
          current.next.image.x,
          current.next.image.y
        ) > snake.separation
      ) {
        this.physics.moveToObject(
          current.image,
          current.next.image,
          snake.speed
        );
      }

      current = current.next;
    }
  }
}
const game = new Phaser.Game({
  type: Phaser.AUTO,
  width: canvasWidth,
  height: canvasHeight,
  backgroundColor: "#444",
  parent: "game-container",
  physics: {
    default: "arcade",
    arcade: { debug: false },
  },
  scene: [MainScene],
});
