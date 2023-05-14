import {Credits} from './food'
import React, { useState } from 'react';
import "../styles/global.css"
const CreditsBar = ({c_level}) =>{
    return(
        <div className="flex-container bar">
        {
        <Credits count={c_level || 3}></Credits>
        }
        </div>)
        ;
}
export {CreditsBar};