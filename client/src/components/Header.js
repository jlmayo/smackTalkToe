import React from "react";
import "./headerStyles.css";
import IntroImg from "../assets/sttBackground.png";


/* const styles = {
    h1: {
        fontSize: '500%',
        textShadow: '2px 2px 4px #858585',
    }
} */

const Header = () => {
    return (
        <div className="hero" id="hero">
            <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg" />
            </div>
        </div>
    );
};

export default Header;
