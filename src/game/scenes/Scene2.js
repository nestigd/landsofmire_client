import { Scene, Input, Math as PhaserMath } from "phaser";
import { config, gameSettings } from "../../components/GameComponent";

/** MAIN GAME SCENE **/
export default class Scene2 extends Scene {
  constructor() {
    super("playGame");
  }

  create() {
    // BACKGROUND
    this.background = this.add.tileSprite(
      0,
      0,
      config.width,
      config.height,
      "background"
    );
    this.background.setOrigin(0, 0);

    // add PLAYER
    this.player = this.physics.add.sprite(
      config.width / 2,
      (config.height / 10) * 8.5,
      "player"
    );
    // player animation
    this.player.play("player_anim");
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.player.setCollideWorldBounds(true);

    this.spacebar = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.SPACE);

    // add ENEMY objects
    this.ship1 = this.add.sprite(
      PhaserMath.Between(0, config.width) - 15,
      -20,
      "ship1"
    );
    this.ship2 = this.add.sprite(
      PhaserMath.Between(0, config.width),
      -450,
      "ship2"
    );
    this.ship3 = this.add.sprite(
      PhaserMath.Between(0, config.width),
      -900,
      "ship3"
    );
    // enemy animation
    this.ship1.play("ship1_anim");
    this.ship2.play("ship2_anim");
    this.ship3.play("ship3_anim");

    // make enemy interactive
    this.ship1.setInteractive();
    this.ship2.setInteractive();
    this.ship3.setInteractive();

    // destroy ship on interaction
    this.input.on("gameobjectdown", this.destroyShip, this);

    // add POWER-UPS
    this.powerUps = this.physics.add.group();

    const maxObjects = 4;
    for (let i = 0; i < maxObjects; i++) {
      var powerUp = this.physics.add.sprite(16, 16, "power-up");
      this.powerUps.add(powerUp);

      //random position & random animation
      powerUp.setRandomPosition();
      powerUp.setVelocity(
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200
      );
      if (Math.random() > 0.5) {
        powerUp.play("red");
      } else {
        powerUp.play("gray");
      }

      // power-up physics
      powerUp.setCollideWorldBounds(true);
      powerUp.setBounce(1);
    }
  }

  update() {
    // background movement
    this.background.tilePositionY -= 0.5;
    this.background.tilePositionX += 0.1;

    this.movePlayerManager();
    if (Input.Keyboard.JustDown(this.spacebar)) {
      console.log("fire");
    }

    // enemy movement
    this.moveShip(this.ship1, 1);
    this.moveShip(this.ship2, 1.5);
    this.moveShip(this.ship3, 2);
  }

  // helper functions
  moveShip(ship, speed) {
    ship.y += speed;
    if (ship.y > config.height + 15) {
      this.resetShipPos(ship);
    }
  }

  resetShipPos(ship) {
    ship.y = -15;
    ship.x = PhaserMath.Between(0, config.width);
  }

  destroyShip(pointer, gameObject) {
    gameObject.setTexture("explosion");
    gameObject.play("explode");
  }

  movePlayerManager() {
    if (this.cursorKeys.left.isDown) {
      this.player.setVelocityX(-gameSettings.playerSpeed);
    } else if (this.cursorKeys.right.isDown) {
      this.player.setVelocityX(gameSettings.playerSpeed);
    } else {
      this.player.setVelocityX(0);
    }

    if (this.cursorKeys.up.isDown) {
      this.player.setVelocityY(-gameSettings.playerSpeed);
    } else if (this.cursorKeys.down.isDown) {
      this.player.setVelocityY(gameSettings.playerSpeed);
    } else {
      this.player.setVelocityY(0);
    }
  }
}
