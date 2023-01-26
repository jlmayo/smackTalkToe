import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { UPDATE_USER_NAME } from '../utils/mutations';
import { GET_USER } from '../utils/queries';
import { useAccountContext } from '../utils/globalstate';
import Game from '../components/Game.js';

const styles = {
    input: {
        height: 'auto',
        width: '100px',
    },
    btn: {
        height: 'auto',
        width: 'auto',
    }
}

function HomePage () {
    const { data } = useQuery(GET_USER);
    const [state, dispatch] = useAccountContext('', '');
    const [name, setName] = useState(state.name);
    const [wins, setWins] = useState(state.wins);
    const [draws, setDraws] = useState(state.draws);
    const [losses, setLosses] = useState(state.losses);
    const [room, setRoom] = useState('');
    const enterRoom = () => {
            const roomInput = document.getElementById('room');
            const roomId = roomInput.value;
            setRoom(roomId);
            console.log(room);
    }
    return (
        <>
            <div className="d-flex justify-content-center row">
                <h2 className="col-12 text-center">Congratulations {name}!</h2>
                <div className="col-12 text-center">You've lost {losses} games!</div>
                <div className="col-12 text-center">You've only won {wins}!</div>
                <div className="col-12 text-center">And you've Drawn {draws} times...</div>
                <div className="container d-flex justify-content-center m-5 row">
                    <div className="col-12 text-center">Let your opponent know what Room ID to use.</div>
                    <input type="text" className="form-control row m-0" placeholder="RoomID" aria-label="RoomID" aria-describedby="button-addon2" style={styles.input} id="room"></input>
                    <Link className="btn btn-outline-secondary row m-0" type="button" id="button-addon2" style={styles.btn} to={'/game'}>Enter</Link>
                </div>
            </div>  
        </>
    )
}

export default HomePage;