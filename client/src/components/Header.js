import React from "react";
import Navbar from './Navbar';


function Header () {
    return (
        <header>
            <Navbar />
            <div className="d-flex text-center row m-5">
                <h1 className="col-12" id="App">Smack Talk Toe</h1>
            </div>
        </header>
    )
}

export default Header;
