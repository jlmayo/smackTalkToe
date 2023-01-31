import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../utils/queries';
import "./game.css"

export const ScoreBoard = ({ scores, turn }) => {
  const { data } = useQuery(GET_USER);
  const username = data?.user.username || [];
  const wins = data?.user.wins || 0;
  const losses = data?.user.losses || 0;
  const ties = data?.user.ties || 0;
  const { xScore, oScore } = scores;

  return (
    <>
      <div className="scoreboard">
        <div className={`score x-score ${!turn && "inactive"}`}>X - {xScore}</div>
        <div className={`score o-score ${turn && "inactive"}`}>O - {oScore}</div>
      </div>

      <div className="userStats"> <h1>Hey, {username}! </h1>
      <h2>You're playing as X. Here are your current stats:</h2>
      <p>Wins: {wins} || Losses {losses} || Ties {ties} </p>
      </div>        
    </>
  )
}