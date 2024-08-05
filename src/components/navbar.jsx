import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '../assets/react.svg'
import './navbar.css';





function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropDownMenuCategoryArray = ['web dev', 'mobile dev', 'design', 'more'];
    const dropdownMenuSortOptionsArray = ['name ↥', 'name ↧', 'price ↥', 'price ↧', 'date ↥', 'date ↧'];
    const [buttonName, setButtonName] = useState('');
    // const dropdownMenu = isDropdownOpen? DropdownMenu : '';

    const categoryMenuMapping = dropDownMenuCategoryArray.map((Option, index) => (
        <li key={index} onClick={(e) => {
            e.stopPropagation();
            setIsDropdownOpen(!isDropdownOpen);
            console.log('theme changed')
        }}>{Option}</li>
    ))

    const sortMenuMapping = dropdownMenuSortOptionsArray.map((Option, index) => (
        <li key={index} onClick={(e) => {
            e.stopPropagation();
            setIsDropdownOpen(!isDropdownOpen);
        }}>{Option}</li>
    ))
    
    const DropdownMenu = (
        <div className="dropdown_menu">
            <ul>
                {buttonName === 'category_dropdown' ? categoryMenuMapping : sortMenuMapping}
            </ul>
        </div>
    )
    

    function DropdownMenu_drop(e){
        const buttonId = e.currentTarget.id;
        setButtonName(buttonId);
        console.log('buttonId: ' + buttonId);
        console.log('drop ' + isDropdownOpen);
        setIsDropdownOpen(!isDropdownOpen);
    }
    

    return (
        <>
            <nav className="navbar">
                <img src={reactLogo} alt="logo" className="nav_logo" />

                <div className="button_row">
                    <input type="text" className="text" />
                    
                    <button className='navbar_button' id='category_dropdown' onClick={(e) => DropdownMenu_drop(e)}>Categories{isDropdownOpen && buttonName === 'category_dropdown' ? DropdownMenu : ''}</button>
                    
                    <button className='navbar_button' id='sort_dropdown' onClick={(e) => DropdownMenu_drop(e)}>Sort{isDropdownOpen && buttonName === 'sort_dropdown' ? DropdownMenu : ''}</button>
                </div>
                
            </nav>
            
        </>

    )
}

export default Navbar;