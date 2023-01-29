import React from 'react';

import "./game.css";

export const RestartGame = ({ handleRestart }) => {
    return (
        <button className="restart-btn" onClick={handleRestart}>Play Again</button>
    )
}