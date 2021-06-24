import React from "react";
import ReactDOM from "react-dom";
import Confetti from "react-confetti";
import greet from "./greet.js";
import "./styles.css";

const GreetingMessage = greet("Aleia");

function App() {
  return (
    <div className="App">
      <h1>{GreetingMessage}</h1>
      <Confetti />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
