import { CreditsBar } from "../components/creditsbar"
import { HealthBar } from "../components/healthbar"
import otter from "../assets/otter.png"
import React from "react"
import "../styles/global.css"

const MainView = ({ props }) => {
    return (
        <div id="bg">
            <div className="flex-container">
                <CreditsBar c_level={props ? props.c_level : 2}></CreditsBar>
                <div className="flex-container-fill"></div>
                <HealthBar h_level={props ? props.h_level :3}></HealthBar>
            </div>
            <div style={{"width":"200px","height":"200px","margin": "0 auto"}}></div>
            <img style={{"maxWidth":"300px","maxHeight":"300px","margin": "0 auto", "display": "block"}} src={otter}  alt=""></img>
        </div>)
}

export { MainView };