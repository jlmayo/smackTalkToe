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
  const { P1, P2 } = scores;

  return (
    <>
      <div className="scoreboard">
        <div className={`score p1-score ${!turn && "inactive"}`}>X - {P1}</div>
        <div className={`score p2-score ${turn && "inactive"}`}>O - {P2}</div>
      </div>

      <div className="userStats"> <h1>Hey, {username}! </h1>
      <h2>You're playing as X. Here are your current stats:</h2>
      <p>Wins: {wins} || Losses {losses} || Ties {ties} </p>
      </div>        
    </>
  )
}