import React from "react";
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import "../index.css";

function Nav() {
	const logout = (event) => {
		event.preventDefault();
		Auth.logout();
	  };
	return (
		<nav className="nav-menu">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					{Auth.loggedIn() ? (<Link to="/game">Play a Game</Link>) : (<Link to="/login">Play a Game</Link>)}
				</li>
				<li>
					{Auth.loggedIn() ? (<div onClick={logout}>Logout</div>) : (<Link to="/login">Login</Link>)}
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
