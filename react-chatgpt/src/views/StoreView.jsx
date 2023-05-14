import { CreditsBar } from "../components/creditsbar"
import { HealthBar } from "../components/healthbar"
import { FoodList } from "../components/food"
import { Dialogs } from "../components/dialog"
import { useOtterSettings } from "../data/otter"
import { useContext } from "react"
import otter from "../assets/otter.png"
import React from "react"
import "../styles/global.css"

const StoreView = () => {
    const { health, credit } = useOtterSettings();
    return (
        <div id="bg">
            <div className="flex-container">
                <CreditsBar c_level={credit}></CreditsBar>
                <div className="flex-container-fill"></div>
                <HealthBar h_level={health}></HealthBar>
            </div>

            <div className="flex-container">
                <Dialogs></Dialogs>
                <div className="flex-container-fill"></div>
            

            <div className="flex-container">
            <img style={{ "maxWidth": "400px", "maxHeight": "400px", "margin": "5rem auto", "display": "block" }} src={otter} alt=""></img>
            </div>
            </div>
            <FoodList></FoodList>
        </div>)
}

export { StoreView };