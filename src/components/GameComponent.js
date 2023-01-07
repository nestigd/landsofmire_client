// imports
import { useEffect } from "react";
import Phaser from "phaser";
import Scene1 from "../game/scenes/Scene1";
import Scene2 from "../game/scenes/Scene2";

export const gameSettings = {
  playerSpeed: 250,
  score : {
    initialScore: 5,
    shotCost: 1,
    killEnemy : 10,
    takeDamage : 100,
    enemyPassed : 50,   
    shotCost: 1,
  },
};

export const config = {
  width: 400,
  height: 400,
  backgroundColor: 0x000000,
  scene: [Scene1, Scene2],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  parent: "game-container",
};

function GameComponent() {
  // useEffect hook calls a cleanup function that destroys the game when the component is unmounted.
  // if the game is not destroyed, the canvas sticks to the bottom of the page

  useEffect(() => {
    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  return <p className="margin-m"></p>;
}

export default GameComponent;
