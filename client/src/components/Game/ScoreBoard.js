import React from 'react'

import "./game.css"

export const ScoreBoard = ({ scores, turn }) => {
  const { xScore, oScore } = scores;

  return (
    <>
      <div className="scoreboard">
        <div className={`score x-score ${!turn && "inactive"}`}>X - {xScore}</div>
        <div className={`score o-score ${turn && "inactive"}`}>O - {oScore}</div>
      </div>

      <div className="userStats">
        
      </div>
    </>
  )
}