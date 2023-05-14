import heart from "../assets/heart.svg"
import React, { useState } from 'react';
import "../styles/global.css"

const Heart = () => {
    return <img className="heart" src={heart} alt="" />
  };
  
const Hearts = ({ count }) => {
    return Array.from({ length: count }).map((_item, index) => <Heart index={index} />)}

const HealthBar = ({h_level}) =>{
    return(
        <div className="flex-container bar">
        {
        <Hearts count={h_level || 3}></Hearts>
        }
        </div>)
        ;
}

export {HealthBar};