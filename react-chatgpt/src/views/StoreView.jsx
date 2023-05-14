import { CreditsBar } from "../components/creditsbar"
import { HealthBar } from "../components/healthbar"
import { FoodList } from "../components/food"
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
            <img style={{ "maxWidth": "500px", "maxHeight": "600px", "margin": "0 auto", "display": "block" }} src={otter} alt=""></img>
            </div>
            <FoodList></FoodList>
        </div>)
}

export { StoreView };