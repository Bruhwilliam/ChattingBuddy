import { CreditsBar } from "../components/creditsbar"
import { HealthBar } from "../components/healthbar"
import { FoodList } from "../components/food"
import { useOtterSettings } from "../data/otter"
import { useContext } from "react"
import otter from "../assets/otter.png"
import React from "react"
import "../styles/global.css"
import TicTacToe from "../TicTacToe";
import { Link } from "react-router-dom"
import game from "../assets/game.svg"


const GameView = () => {
  return (
    <div className="GameView">
      <TicTacToe />
        <Link to="/">
            <button className="game-button b">
                <img src={game}></img>
            </button>
        </Link>
    </div>
  );
};
export {GameView};

