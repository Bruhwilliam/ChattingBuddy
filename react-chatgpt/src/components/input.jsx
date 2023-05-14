import React, { useState } from 'react';
import axios from "axios";
import "../styles/global.css"
import { OtterContext, useOtterSettings } from '../data/otter';
import Animalese from '../external/animalese';

const Input = ({ }) => {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const { addResponse, health } = useOtterSettings();

    const apiKey = "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";
    const client = axios.create({
        headers: {
            Authorization: "Bearer " + apiKey,
        },
    });

    const params = {
        prompt: "Pretend you are a otter, please respond to " + prompt,
        model: "text-davinci-003",
        max_tokens: 40,
        temperature: health / 10.0,
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

                var synth = new Animalese('../assets/animalese.wav', function () {
                });

                async function generateWav() {
                    return synth.Animalese(params.prompt,
                        true,
                        2).then(data => data.dataURI);
                }

                async function preview() {
                    
                    var src = await generateWav();
                    var audio = new Audio(src);
                    const promise = audio.play();

                    if (promise !== undefined) { 
                        promise.then(() => {
                            console.log("Audio is playing.");
                        })
                        .catch(error => {
                            console.log(error);
                        });
                    }
                }
                preview();
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
