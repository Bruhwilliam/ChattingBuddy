import { CreditsBar } from "../components/creditsbar"
import { HealthBar } from "../components/healthbar"
import { FoodList } from "../components/food"
import { OtterContext } from "../data/otter"
import { useContext } from "react"
import otter from "../assets/otter.png"
import React from "react"
import "../styles/global.css"

const StoreView = () => {
    const { health, credit } = useContext(OtterContext);
    return (
        <div id="bg">
            <div className="flex-container">
                <CreditsBar c_level={credit}></CreditsBar>
                <div className="flex-container-fill"></div>
                <HealthBar h_level={health}></HealthBar>
            </div>
            <img style={{ "maxWidth": "600px", "maxHeight": "600px", "margin": "0 auto", "display": "block" }} src={otter} alt=""></img>
            <FoodList></FoodList>
        </div>)
}

export { StoreView };