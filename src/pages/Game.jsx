import { useState } from "react";
import PlayerCard from "../components/PlayerCard";

function Game (){
    const [menuState, setMenuState] = useState(true);

    const toggleMenu = () => {
        console.log("toggled " + menuState);
        if (menuState) {
          setMenuState(false);
        } else {
          setMenuState(true);
        }
      };
    const [dude, setDude] = useState(
        {
            name : "Dude",
            health : 10,
            attack : 10,
            defense : 10,
            speed : 10,
        }
    )
    const [enemy, setEnemy] = useState(
        {
            name : "Enemy",
            health : 10,
            attack : 8,
            defense : 7,
            speed : 8,
        }
    )

    const battleRound = (dude, enemy)=>{
        let enemyHitDude = enemy.attack - dude.defense;
        let dudeHitEnemy = dude.attack - enemy.defense;

        enemyHitDude = enemyHitDude < 0 ? 0 : enemyHitDude;
        dudeHitEnemy = dudeHitEnemy < 0 ? 0 : dudeHitEnemy


        setDude({
            ...dude,
            health : (dude.health - enemyHitDude)
        });
        setEnemy({
            ...enemy,
            health : (enemy.health - dudeHitEnemy)
        })
    }

    return(
        <div className="game container-l">
            <button onClick={toggleMenu}>display menu</button>
            <menu className={"game-menu flex-center " + (menuState ? "test" : "menu-hide")}>
                <span>MENU</span>
                <button>New Game</button>
                <button>Scoreboard</button>
                <button>Options</button>
            </menu>
            <main className="game-main">
                <PlayerCard {...dude}/>
                <button onClick={()=>{battleRound(dude, enemy)}}>Battle!</button>
                <PlayerCard {...enemy}/>
            </main>
        </div>
    )
}

export default Game