import React from 'react'

import "./game.css"

export const ScoreBoard = ({ scores, turn }) => {
  const { xScore, oScore } = scores;

  return (
    <div className="scoreboard">
      <span className={`score x-score ${!turn && "inactive"}`}>X - {xScore}</span>
      <span className={`score o-score ${turn && "inactive"}`}>O - {oScore}</span>
    </div>
  )
}