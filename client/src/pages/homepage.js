import React from 'react';
import { Link } from 'react-router-dom';
//import { useQuery } from '@apollo/client';
//import { GET_USER } from '../utils/queries';
//import { useAccountContext } from '../utils/globalstate';
import "../index.css";



function HomePage () {
    //const { data } = useQuery(GET_USER);
    //const [state, dispatch] = useAccountContext('', '');
    //const [name, setName] = useState(state.name);
    //const [wins, setWins] = useState(state.wins);
    //const [draws, setDraws] = useState(state.draws);
   // const [losses, setLosses] = useState(state.losses);
    //const [room, setRoom] = useState('');
    //const enterRoom = () => {
            //const roomInput = document.getElementById('room');
           // const roomId = roomInput.value;
           // setRoom(roomId);
            //console.log(room);
    //}
    return (
        <>
            <div className="d-flex justify-content-center row">
                <h2 className="col-12 text-center">Congratulations !</h2>
                <div className="col-12 text-center">You've lost games!</div>
                <div className="col-12 text-center">You've only won </div>
                <div className="col-12 text-center">And you've Drawn times...</div>
                <div className="container d-flex justify-content-center m-5 row">
                    <div className="col-12 text-center">Let your opponent know what Room ID to use.</div>
                    <input type="text" className="form-control row m-0" placeholder="RoomID" aria-label="RoomID" aria-describedby="button-addon2"  id="room"></input>
                    <Link className="btn btn-outline-secondary row m-0" type="button" id="button-addon2"  to={'/game'}>Enter</Link>
                </div>
            </div>  
        </>
    )
}

export default HomePage;