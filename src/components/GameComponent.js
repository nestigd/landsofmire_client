import { useEffect, useCallback } from "react";
import Phaser from "phaser";
import { useBeforeUnload } from "react-router-dom";

function GameComponent() {
  useEffect(() => {
    const configs = {
      width: 500,
      height: 500,
      backgroundColor: "#555",
      type: Phaser.AUTO,

      physics: {
        default: "matter",
      },
    };

    const game = new Phaser.Game({
      ...configs,
      parent: "game-container",
    });

    return () => {
      console.log("cleaning up game canvas");
      game.destroy(true);
    };
  }, []);

  return <p className="margin-m"></p>;
}

export default GameComponent;
