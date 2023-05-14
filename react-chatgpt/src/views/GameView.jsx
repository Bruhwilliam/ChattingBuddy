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
  const { health, credit } = useOtterSettings();
  return (
    <div className="flex-container" style={{ "position": "relative", "flex-direction": "column", "justifyContent": "center" }}>
      <CreditsBar c_level={credit}></CreditsBar>
      <div className="flex-container-fill"></div>
      <HealthBar h_level={health}></HealthBar>

      <TicTacToe />
      <Link to="/">
          <div className="flex-container">
            <button className="game-button b" style={{"margin":"auto","display": "block"}}>
              <img src={game} ></img>
            </button>
          </div>
     
      </Link>
    </div>
  );
};
export { GameView };

