import React, {useState} from "react";
import "./game.css";
import { useAccountContext } from '../utils/globalstate';
//import { useQuery } from '@apollo/client';

/*const styles = {
    td: {
        border: '1px solid #999',
        width: '100px',
        height: '100px'
    },
    tdBig: {
        border: '33px solid',
        borderColor: 'transparent, #858585, none, #858585',
        width: '100px',
        height: '100px'
    },
    chat: {
        height: '60%',
        width: '30%',
    }
}*/
function Game () {
    const [state] = useAccountContext('');
    const [turn, setTurn] = useState('User');
    const [onDeck, setOnDeck] = useState('Opponent');
    const [cells, setCells] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState('');
    const [loser, setLoser] = useState('');
    const [tie, setTie] = useState('');
    const [count, setCount] = useState(1);
    const [name, setName] = useState(state.name);
    const [wins, setWins] = useState(state.wins);
    const [draws, setDraws] = useState(state.draws);
    const [losses, setLosses] = useState(state.losses);

    const gameOutcome = (table) => {
        let winners = {
            across: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8]
            ],
            down: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8]

            ],
            diagonal: [
                [0, 4, 8],
                [2, 4, 6]
            ]
        }
        for (let winner in winners) {
          winners[winner].forEach((pattern) =>{
            if (
                table[pattern[0]] === '' ||
                table[pattern[1]] === '' ||
                table[pattern[2]] === ''
            ) {} else if (
                table[pattern[0]] === table[pattern[1]] &&
                table[pattern[1]] === table[pattern[2]]
            ) {
                setWinner(turn);
                
                setLoser(onDeck);
                return;
            } else if (count === 9) {
                setTie('True');
            }
          })  
        }
    }

    const handleClick = (num) => {
        if (cells[num] !== '') {
            alert('Already taken you fool!!');
            return;
        }
        let table = [...cells];
        if (turn === 'User') {
            table[num] = 'X';
            setTurn('Opponent');
            setOnDeck('User');
            setCount((count + 1));
            console.log(count)
        } else {
            table[num] = 'O';
            setTurn('User');
            setOnDeck('Opponent')
            setCount((count + 1));
            console.log(count)
        }
        gameOutcome(table)
        setCells(table);
    };
    const handleRestart = () => {
        setWinner('');
        setCells(Array(9).fill(''));
        setCount(1);
        const elP = document.getElementById("resultP");
        const elBtn = document.getElementById("resultBtn");
        const elTie = document.getElementById("resultTie");
        const elTieBtn = document.getElementById("resultTieBtn");
        if (elP != null) { 
            elP.remove();
            elBtn.remove();
        } else {
        elTie.remove();
        elTieBtn.remove();
        }
    }

    const Cell = ({ num }) => {
        if (winner === ('') && count <= 9) {
        return <td onClick={() => handleClick(num)} className="text-center">{cells[num]}</td>
        } else {
        return <td className="text-center">{cells[num]}</td>    
        }
    }
    return (
        <div className="col">
            <div className="row">
                <div className="d-flex align-content-center col-4">
                    <div className="col">
                        <div className="row text-center m-3">
                            {(turn === 'User') ? <h1>User</h1> : <h5>User</h5>}
                            <h4>Wins: 2 Losses: 0 Draw: 2</h4>
                        </div>
                        <div className="row text-center m-3">
                            {(turn === 'Opponent') ? <h1>Opponent</h1> : <h5>Opponent</h5>}
                            <h4>Wins: 3 Losses: 1 Draw: 0</h4>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <table className="d-flex justify-content-center m-2">
                        <tbody>
                            <tr>
                                <Cell num={0}/>
                                <Cell num={1}/>
                                <Cell num={2}/>
                            </tr>
                            <tr>
                                <Cell num={3}/>
                                <Cell num={4}/>
                                <Cell num={5}/>
                            </tr>
                            <tr>
                                <Cell num={6}/>
                                <Cell num={7}/>
                                <Cell num={8}/>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="container border border-2 border-light rounded col-4" style={styles.chat}>
                    <p>This is where chat will be</p>
                </div>
            </div>
            {winner && (
                    <div className="row d-flex justify-content-center">
                        <p className="row d-flex justify-content-center m-2" id="resultP">{loser} Loses!!!!</p>
                        <button className="col-2 m-2" onClick={handleRestart} id="resultBtn">Play Again</button>
                    </div>
            )}
            {tie && (
                    <div className="row d-flex justify-content-center">
                        <p className="row d-flex justify-content-center m-2" id="resultTie">YOU BOTH MANAGED TO LOSE!!!!</p>
                        <button className="col-2 m-2" onClick={handleRestart} id="resultTieBtn">Play Again</button>
                    </div>
            )}
        </div>
    )
};

export default Game;