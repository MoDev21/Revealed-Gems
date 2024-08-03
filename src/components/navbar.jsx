import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '../assets/react.svg'
import './navbar.css';





function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    
    const DropdownMenu = (
        <div className="dropdown_menu">
            <ul>
                <li onClick={(e) => {
                    e.stopPropagation();
                    setIsDropdownOpen(!isDropdownOpen);
                    console.log('theme changed')
                }}>web dev</li>
                <li>mobile dev</li>
                <li>design</li>
                <li>more</li>
            </ul>
        </div>
    )

    function DropdownMenu_drop(){
        console.log('drop ' + isDropdownOpen);
        setIsDropdownOpen(!isDropdownOpen);
    }
    

    return (
        <>
            <nav className="navbar">
                <img src={reactLogo} alt="logo" className="nav_logo" />

                <div className="button_row">
                    <input type="text" className="text" />
                    
                    <button className='navbar_button' onClick={() => DropdownMenu_drop()}>Home{isDropdownOpen ? DropdownMenu : ''}</button>
                    
                    <button className='navbar_button'>About</button>
                </div>
                
            </nav>
            
        </>

    )
}

export default Navbar;