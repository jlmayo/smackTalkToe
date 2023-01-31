import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../utils/queries';
//import { useAccountContext } from '../utils/globalstate';
import "../index.css";



function HomePage () {
    const { data } = useQuery(GET_USER);
    const username = data?.user.username || [];
    const wins = data?.user.wins || 0;
    const losses = data?.user.losses || 0;
    const ties = data?.user.ties || 0;

    return (
            <div className="d-flex justify-content-center row">
                <div className="title">
                <h1>Welcome, {username}!</h1>
                </div>                    

                <div className="col-12 text-center">You've lost {losses} games!</div>
                <div className="col-12 text-center">You've only won {wins} games. </div>
                <div className="col-12 text-center">And you've tied {ties} times.</div>
                <div className="container d-flex justify-content-center m-5 row">
                    <div className="col-12 text-center">Let your opponent know what Room ID to use.</div>
                            <input type="text" className="form-control row m-0" placeholder="RoomID" aria-label="RoomID" aria-describedby="button-addon2"  id="room"></input>
                            <Link className="btn btn-outline-secondary row m-0" type="button" id="button-addon2"  to={'/game'}>Enter</Link>
                </div>
            </div>
    )
}

export default HomePage;