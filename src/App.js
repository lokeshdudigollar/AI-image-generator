import React, { useState } from "react";
import "./App.css";
import { Configuration, OpenAIApi } from "openai";

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const VITE_Open_AI_Key =
    "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";
  const configuration = new Configuration({
    apiKey: VITE_Open_AI_Key
  });

  const openai = new OpenAIApi(configuration);
  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024"
    });

    setResult(res.data.data[0].url);
  };

  return (
    <div className="main">
      <h1>Generate image using AI</h1>
      <input
        className="user-input"
        placeholder="Type something to generate image"
        onChange={(e) => setPrompt(e.target.value)}
      ></input>
      <button onClick={generateImage}>Generate Image</button>
      {result.length > 0 ? (
        <img className="result-img" src={result} alt="result" />
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default App;
