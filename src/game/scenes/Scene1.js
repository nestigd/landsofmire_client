import { Scene } from "phaser";

/** LOADING SCREEN **/
export default class Scene1 extends Scene {
  constructor() {
    super("bootGame");
  }

  // load assets
  preload() {
    this.load.image(
      "background",
      process.env.PUBLIC_URL + "assets/images/background.jpg"
    );
    this.load.spritesheet(
      "player",
      process.env.PUBLIC_URL + "assets/spritesheets/player.png",
      {
        frameWidth: 16,
        frameHeight: 24,
      }
    );
    this.load.spritesheet(
      "ship1",
      process.env.PUBLIC_URL + "assets/spritesheets/ship.png",
      {
        frameWidth: 16,
        frameHeight: 16,
      }
    );
    this.load.spritesheet(
      "ship2",
      process.env.PUBLIC_URL + "assets/spritesheets/ship2.png",
      {
        frameWidth: 32,
        frameHeight: 16,
      }
    );
    this.load.spritesheet(
      "ship3",
      process.env.PUBLIC_URL + "assets/spritesheets/ship3.png",
      {
        frameWidth: 32,
        frameHeight: 32,
      }
    );
    this.load.spritesheet(
      "explosion",
      process.env.PUBLIC_URL + "assets/spritesheets/explosion.png",
      {
        frameWidth: 16,
        frameHeight: 16,
      }
    );
    this.load.spritesheet(
      "power-up",
      process.env.PUBLIC_URL + "assets/spritesheets/power-up.png",
      {
        frameWidth: 16,
        frameHeight: 16,
      }
    );

    this.load.spritesheet(
      "beam",
      process.env.PUBLIC_URL + "assets/spritesheets/power-up.png",
      {
        frameWidth: 16,
        frameHeight: 16,
      }
    );
  }

  create() {
    // loading screen text

    this.add.text(20, 20, "Loading game...");
    this.scene.start("playGame");

    // MAKE ANIMATIONS
    // helper function creates animations called NAME_ANIM
    const animate = (name, framerate, repeat) => {
      this.anims.create({
        key: name + "_anim",
        frames: this.anims.generateFrameNumbers(name),
        frameRate: framerate ? framerate : 20,
        // infinite loop
        repeat: repeat ? repeat : 20,
      });
    };
    // create ship animations w/ the helper function
    animate("player", 20, -1);
    animate("beam");
    animate("ship1", 20, -1);
    animate("ship2", 20, -1);
    animate("ship3", 20, -1);

    // the explosion animation doesn't loop and the sprite get hidden
    this.anims.create({
      key: "explode",
      frames: this.anims.generateFrameNumbers("explosion"),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true,
    });
    // power up animations
    this.anims.create({
      key: "red",
      frames: this.anims.generateFrameNumbers("power-up", {
        start: 0,
        end: 1,
      }),
      frameRate: 2,
      repeat: -1,
    });
    this.anims.create({
      key: "gray",
      frames: this.anims.generateFrameNumbers("power-up", {
        start: 2,
        end: 3,
      }),
      frameRate: 2,
      repeat: -1,
    });
  }
}
