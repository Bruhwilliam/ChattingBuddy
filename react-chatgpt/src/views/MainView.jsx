import { CreditsBar } from "../components/creditsbar"
import { HealthBar } from "../components/healthbar"
import { Dialogs } from "../components/dialog"
import { Input } from "../components/input"
import otter from "../assets/otter.png"
import React, { useState, useContext } from "react"
import {OtterContext,useOtterSettings} from "../data/otter"
import "../styles/global.css"
import chat from "../assets/chat.svg"
import game from "../assets/game.svg"
import food from "../assets/food.svg"

const switchState = (state) => {
    if (state == true)
        return false
    else
        return true
};

const MainView = () => {

    const [showForm, setShowForm] = useState(false);
    const { health, credit, changeHealth} = useOtterSettings();

    return (
            <div id="bg">
                <div className="flex-container">
                    <CreditsBar c_level={credit}></CreditsBar>
                    <div className="flex-container-fill"></div>
                    <HealthBar h_level={health}></HealthBar>
                </div>
                <Dialogs></Dialogs>

                {showForm ? <Input></Input> : null}

                <img style={{ "maxHeight": "300px", "margin": "0 auto", "display": "block" }} src={otter} alt=""></img>
                <div className="flex-container button-list">
                    <button className="game-button a" onClick={() => {
                        setShowForm(switchState(showForm));
                    }}>
                        <img src={chat}></img>
                    </button>
                    <button className="game-button b">
                        <img src={game}></img>
                    </button>
                    <button className="game-button c">
                        <img src={food}></img>
                    </button>
                </div>
            </div>
        )
}

export { MainView };