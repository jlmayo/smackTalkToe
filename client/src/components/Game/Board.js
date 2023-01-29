import React from 'react'

import { Squares } from "./Squares"
import "./game.css"

export const Board = ({ cells, onClick }) => {
  return (
    <div className="cells">
      {
        cells.map((value, num) => {
          return <Squares value={value} onClick={() => value === null && onClick(num)} />;
        })
      }
    </div>
  )
}