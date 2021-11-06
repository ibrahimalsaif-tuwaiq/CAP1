import React from "react";
import { Link, useParams } from "react-router-dom";
import "./style.css";

const FinishMenu = () => {
  const { status, turns, score } = useParams();
  return (
    <div>
      <div className="finishMenuWrapper">
        <div className="finishMenu">
          <div className="finishMenuStatus">
            <h1>{status}</h1>
          </div>
          <div className="turnsAndScore">
            <div className="finishMenuScore">
              <h1>SCORE:</h1>
              <h1>{score}</h1>
            </div>
            <div className="finishMenuTurns">
              <h1>TURNS:</h1>
              <h1>{turns}</h1>
            </div>
          </div>
          <div className="finishMenuButtons">
            <button>
              <Link to="/levels" className="finishMenuButton">
                RESTART THE GAME
              </Link>
            </button>
            <button>
              <Link to="/" className="finishMenuButton">
                BACK TO MENU
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishMenu;
