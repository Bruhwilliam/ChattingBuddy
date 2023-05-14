import "../styles/global.css";
import React from "react"


const messages = [];

const SingleDialog = ({ props }) => {
    return (<div className="dialogBox">
        {props ? props : "I'm hungry!!!"}
    </div>)
};

const Dialogs = () => {
    return (<div className="box-container">{
        messages.map((message, i) => <SingleDialog props={message}></SingleDialog>)
        }
        </div>
    )
};

const insert_dialog = (response) => {
    if (messages.length > 3)
        messages.shift();
    messages.push(response);
};

insert_dialog("I'm hungry!!!");
insert_dialog("I'm hungry!!!");

export { Dialogs, insert_dialog };