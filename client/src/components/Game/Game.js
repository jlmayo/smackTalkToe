import React, {useState} from "react";
import "./game.css";
import { Board } from "./Board";
import { RestartGame } from "./RestartGame";
import { ScoreBoard } from "./ScoreBoard";

const Game = () => {

    const gameOutcome = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],
            ]

    const [turn, setTurn] = useState(true);
    const [cells, setCells] = useState(Array(9).fill(null));
    const [scores, setScores] = useState({ P1: 0, P2: 0 })
    const [gameOver, setGameOver] = useState(false);



    const handleClick = (square) => {
        const updatedCells = cells.map((value, num) => {
            if (num === square) {
                return turn ? "X" : "O";
            } else {
                return value;
            }
        })
        setCells(updatedCells);

        const winner = whoWon(updatedCells);

        if (winner) {
            if(winner === 'O') {
                let { P2 } = scores;
                P2 += 1;
                setScores({ ...scores, P2 })
            } else {
                let { P1 } = scores;
                P1 += 1;
                setScores({ ...scores, P1 })
            }
        }

        setTurn(!turn);
    };

    const whoWon = (cells) => {
        for (let i = 0; i <gameOutcome.length; i++) {
            const [a,b,c] = gameOutcome[i];

            if (cells[a] && cells[a] === cells[b] && cells[b] === cells[c]) {
                setGameOver(true);
                return cells[a];
            }

        }
    }
    const handleRestart = () => {
        setGameOver(false);
        setCells(Array(9).fill(null));
    }

    return (
        <div className="Game">
            <ScoreBoard scores={scores} turn={turn} />
            <Board cells={cells} onClick={gameOver ? handleRestart : handleClick} />
            <RestartGame handleRestart={handleRestart} />
        </div>
    );

};

export default Game;