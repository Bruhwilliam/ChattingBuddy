import { CreditsBar } from "../components/creditsbar"
import { HealthBar } from "../components/healthbar"
import { Dialogs } from "../components/dialog"
import otter from "../assets/otter.png"
import React from "react"
import "../styles/global.css"
import chat from "../assets/chat.svg"
import game from "../assets/game.svg"
import food from "../assets/food.svg"

const MainView = ({ props }) => {
    return (
        <div id="bg">
            <div className="flex-container">
                <CreditsBar c_level={props ? props.c_level : 2}></CreditsBar>
                <div className="flex-container-fill"></div>
                <HealthBar h_level={props ? props.h_level :3}></HealthBar>
            </div>
            <Dialogs></Dialogs>
            <img style={{"maxHeight":"300px","margin": "0 auto", "display": "block"}} src={otter}  alt=""></img>
            <div className="flex-container button-list">
                <button className="game-button a">
                    <img src={chat}></img>
                </button>
                <button className="game-button b">
                    <img src={game}></img>
                </button>
                <button className="game-button c">
                    <img src={food}></img>
                </button>
            </div>
        </div>)
}

export { MainView };