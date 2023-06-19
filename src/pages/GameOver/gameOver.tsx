import React from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "store/hooks";
import { resetGame } from "store/appStateSlice";

import image from "assets/finger-up.webp";

import "./game-over.css";

function GameOver() {
  const dispatch = useAppDispatch();
  const { earnedReward } = useAppSelector((state) => state.game);

  const handleClick = () => {
    dispatch(resetGame());
  };

  return (
    <div className="game-over-page-wrapper">
      <img src={image} alt="finger up" className="finger-up-img" />
      <div className="start-game-page-text-block">
        <div className="game-over-text">
          <h2 className="game-over-sub-title">Total score:</h2>
          <h1 className="start-game-page-title">${earnedReward} earned</h1>
        </div>
        <Link to="/game" className="button" onClick={handleClick}>
          Try again
        </Link>
      </div>
    </div>
  );
}

export default GameOver;
