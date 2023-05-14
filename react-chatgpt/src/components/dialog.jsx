import "../styles/global.css";
import React from "react"
import { useEffect } from "react";
import { useContext } from "react";
import { OtterContext,useOtterSettings } from "../data/otter";

const SingleDialog = ({ props }) => {
    return (<div className="dialogBox">
        {props ? props : "I'm hungry!!!"}
    </div>)
};

const Dialogs = () => {
    const { responses } = useOtterSettings();
    
    return (<div className="box-container">{
        responses.map((message, i) => <SingleDialog props={message}></SingleDialog>)
    }
    </div>
    );
};

export { Dialogs };