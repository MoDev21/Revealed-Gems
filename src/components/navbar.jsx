import React from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '../assets/react.svg'
import './navbar.css';

function DropdownMenu() {
    return (
        <div className="dropdown_menu">
            <ul>
                <li>web dev</li>
                <li>mobile dev</li>
                <li>design</li>
                <li>more</li>
            </ul>
        </div>
    )
}

function Navbar() {
    return (
        <nav className="navbar">
            <img src={reactLogo} alt="logo" className="nav_logo" />

            <div className="button_row">
                <input type="text" className="text" />
                <button className='navbar_button'>Home</button>
                <button className='navbar_button'>About</button>
            </div>
            <DropdownMenu />
        </nav>
    )
}

export default Navbar;