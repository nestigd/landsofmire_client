// imports
import { useEffect } from "react";
import Phaser from "phaser";

// ****** SCENES ****** //

function GameComponent() {
  // instantiate game
  useEffect(() => {
    class Scene1 extends Phaser.Scene {
      constructor() {
        super("bootGame");
      }

      preload() {
        this.load.image(
          "background",
          process.env.PUBLIC_URL + "assets/images/background.png"
        );
        this.load.image(
          "ship",
          process.env.PUBLIC_URL + "assets/images/ship.png"
        );
        this.load.image(
          "ship2",
          process.env.PUBLIC_URL + "assets/images/ship2.png"
        );
        this.load.image(
          "ship3",
          process.env.PUBLIC_URL + "assets/images/ship3.png"
        );
      }

      create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
      }
    }

    class Scene2 extends Phaser.Scene {
      constructor() {
        super("playGame");
      }

      create() {
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0, 0);

        this.ship1 = this.add.image(
          config.width / 2 - 50,
          config.height / 2,
          "ship"
        );
        this.ship2 = this.add.image(
          config.width / 2,
          config.height / 2,
          "ship2"
        );
        this.ship3 = this.add.image(
          config.width / 2 + 50,
          config.height / 2,
          "ship3"
        );
      }

      resetShipPos(ship) {
        ship.y = 0;
        ship.x = Phaser.Math.Between(0, config.width);
      }

      moveShip(ship, speed) {
        ship.y += speed;
        if (ship.y > config.height) {
          this.resetShipPos(ship);
        }
      }

      update() {
        this.moveShip(this.ship1, 0.8);
        this.moveShip(this.ship2, 1);
        this.moveShip(this.ship3, 1.2);
      }
    }

    const config = {
      width: 256,
      height: 272,
      backgroundColor: 0x000000,
      scene: [Scene1, Scene2],
      pixelArt: true,
      parent: "game-container",
    };

    const game = new Phaser.Game(config);

    //clean up game canvas
    return () => {
      game.destroy(true);
    };
  }, []);

  return <p className="margin-m"></p>;
}

export default GameComponent;
