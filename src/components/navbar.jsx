import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '../assets/react.svg'
import RevealedGemsLogo from '../assets/RevealedGemsDocumentLogo.png'
import './navbar.css';





function Navbar({isDropdownOpen, setIsDropdownOpen, setCategories, buttonName, setButtonName, sortOptions, setSortOptions, sortedItems }) {

    const dropDownMenuCategoryArray = ['all', 'health', 'figdets', 'electronics', 'fitness'];
    const dropdownMenuSortOptionsArray = ['name ↥', 'name ↧', 'price ↥', 'price ↧', 'date ↥', 'date ↧'];
    
    // const dropdownMenu = isDropdownOpen? DropdownMenu : '';
    useEffect(() => {
        function handleClickOutside(event) {
            console.log(event.target.id + ' press outside navbar');
            if(event.target.id !== 'category_dropdown' && event.target.id !== 'sort_dropdown' && event.target.id !== 'category_dropdown_li' && event.target.id !== 'sort_dropdown_li'){
                setIsDropdownOpen(false);
            }
        }
        

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setIsDropdownOpen]);

    const categoryMenuMapping = dropDownMenuCategoryArray.map((Option, index) => (
        <li id='category_dropdown_li' key={index} onClick={(e) => {
            e.stopPropagation();
            setCategories(e.target.innerText);
            setIsDropdownOpen(!isDropdownOpen);
            console.log(e.target.innerText);
            
        }}>{Option}</li>
    ))

    const sortMenuMapping = dropdownMenuSortOptionsArray.map((Option, index) => (
        <li id='sort_dropdown_li' key={index} onClick={(e) => {
            e.stopPropagation();
            setIsDropdownOpen(!isDropdownOpen);
            setSortOptions(e.target.innerText);
            console.log(sortedItems);
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
        setIsDropdownOpen(true);

    }
    

    return (
        <>
            <nav className="navbar">
                <img src={RevealedGemsLogo} alt="logo" className="nav_logo"  style={{width: '3dvw'}}/>

                <div className="button_row">
                    <div className="search_containter">
                        <img src={reactLogo} alt="react_logo" className="react_logo" />
                        <input type="text" className="text" />
                    </div>
                    
                    
                    <button className='navbar_button' id='category_dropdown' onClick={(e) => DropdownMenu_drop(e)}>Categories{isDropdownOpen && buttonName === 'category_dropdown' ? DropdownMenu : ''}</button>
                    
                    <button className='navbar_button' id='sort_dropdown' onClick={(e) => DropdownMenu_drop(e)}>Sort{isDropdownOpen && buttonName === 'sort_dropdown' ? DropdownMenu : ''}</button>
                </div>
                
            </nav>
            
        </>

    )
}

export default Navbar;