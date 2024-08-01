import React from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '../assets/react.svg'
import './navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <img src={reactLogo} alt="logo" className="nav_logo" />

            <div className="button_row">
                <input type="text" className="text" />
                <button>Home</button>
                <button>About</button>
            </div>
        </nav>
    )
}

export default Navbar;