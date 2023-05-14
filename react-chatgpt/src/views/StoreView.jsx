import { CreditsBar } from "../components/creditsbar"
import { HealthBar } from "../components/healthbar"
import { FoodList } from "../components/food"
import otter from "../assets/otter.png"
import React from "react"
import "../styles/global.css"

const StoreView = ({ props }) => {
    return (
        <div id="bg">
            <div className="flex-container">
                <CreditsBar c_level={props ? props.c_level : 2}></CreditsBar>
                <div className="flex-container-fill"></div>
                <HealthBar h_level={props ? props.h_level :3}></HealthBar>
            </div>
            <img style={{"maxWidth":"600px","maxHeight":"600px","margin": "0 auto", "display": "block"}} src={otter}  alt=""></img>
            <FoodList></FoodList>
        </div>)
}

export { StoreView };