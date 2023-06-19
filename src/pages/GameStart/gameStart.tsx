import React from "react";

import { Link } from "react-router-dom";

import image from "assets/finger-up.webp";

import "./game-start.css";

function GameStart() {
  return (
    <div className="start-game-wrapper">
      <img src={image} alt="finger up" className="finger-up-img" />
      <div className="start-game-page-text-block">
        <h1 className="start-game-page-title">
          Who wants to be a&nbsp;millionaire?
        </h1>
        <Link to="/game" className="button">
          Start
        </Link>
      </div>
    </div>
  );
}

export default GameStart;
