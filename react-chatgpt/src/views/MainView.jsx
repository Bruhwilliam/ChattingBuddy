import { CreditsBar } from "../components/creditsbar"
import { HealthBar } from "../components/healthbar"
import { Dialogs } from "../components/dialog"
import { Input } from "../components/input"
import otter from "../assets/otter.png"
import { Link } from "react-router-dom"
import React, { useState, useContext, useEffect } from "react"
import { OtterContext, useOtterSettings } from "../data/otter"
import { animateIdle, animateEat, animateSleep } from '../animations/otter.js';
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
    const { health, credit,addHealth} = useOtterSettings();

    setInterval(()=>{
        addHealth(-1);
    },30*1000);

    useEffect(() => {
        animateIdle();
        document.getElementById("bg").addEventListener("mouseenter", animateIdle);
        document.getElementById("bg").addEventListener("mouseleave", animateSleep);
    });

    return (
        <div id="bg">
            <div className="flex-container">
                <CreditsBar c_level={credit}></CreditsBar>
                <div className="flex-container-fill"></div>
                <HealthBar h_level={health}></HealthBar>
            </div>


            <div className="flex-container" id="chatbox">
                <Dialogs></Dialogs>
                <div className="flex-container-fill"></div>
                {showForm ? <Input></Input> : null}
            </div>

            <img id="otter" style={{"margin-top":"5rem","maxHeight": "400px", "margin": "0 auto", "display": "block" }} src="assets/Sleep_sprite_00.png" alt=""></img>
            <div className="flex-container button-list">
                <button className="game-button a" onClick={() => {
                    setShowForm(switchState(showForm));
                }}>
                    <img src={chat}></img>
                </button>
                <Link to="/game">
                    <button className="game-button b">
                        <img src={game}></img>
                    </button>
                </Link>
                <Link to="/store">
                    <button className="game-button c">
                        <img src={food}></img>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export { MainView };
