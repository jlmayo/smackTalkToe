import React from "react";
import { Link } from 'react-router-dom';
import AuthService from '../utils/auth';
import "../index.css";

function Navbar() {
	const logout = (event) => {
		event.preventDefault();
		AuthService.logout();
	  };
	return (
		<nav className="nav-menu">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					{AuthService.loggedIn() ? (<Link to="/homepage">Player Home</Link>) : (<Link to="/">Play a Game</Link>)}
				</li>
				<li>
					{AuthService.loggedIn() ? (<div onClick={logout}>Logout</div>) : (<Link to="/">Login</Link>)}
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
