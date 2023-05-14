import React, { useState } from 'react';
import axios from "axios";
import "../styles/global.css"
import { insert_dialog } from './dialog';
import { useContext } from 'react';
import { OtterContext,useOtterSettings } from '../data/otter';

const Input = ({}) => {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const {responses,addResponse} = useOtterSettings();

    const apiKey = "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";
    const client = axios.create({
        headers: {
            Authorization: "Bearer " + apiKey,
        },
    });

    const params = {
        prompt: "Pretend you are a otter, please respond to" + prompt,
        model: "text-davinci-003",
        max_tokens: 40,
        temperature: 0,
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send a request to the server with the prompt
        client
            .post("https://api.openai.com/v1/completions", params)
            .then((res) => {
                // Update the response state with the server's response
                setResponse(res.data.choices[0].text);
                addResponse(res.data.choices[0].text);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div id="prompt-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="prompt-box" id="prompt-text">Say something to the otter!</label>
                <button id="submit-button" type="submit">Submit</button>
                <div>
                <input id="prompt-box"
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                />
                </div>
                
            </form>
        </div>
    );
}

export { Input };
