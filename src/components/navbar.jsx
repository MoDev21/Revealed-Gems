import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '../assets/react.svg'
import RevealedGemsLogo from '../assets/RevealedGemsDocumentLogo.png'
import search from '../assets/search.svg'
import './navbar.css';





function Navbar({isDropdownOpen, setIsDropdownOpen, setCategories, buttonName, setButtonName, sortOptions, setSortOptions, sortedItems }) {

    const dropDownMenuCategoryArray = ['all', 'health', 'figdets', 'electronics', 'fitness'];
    const dropdownMenuSortOptionsArray = ['default', 'name ↥', 'name ↧', 'price ↥', 'price ↧', 'date ↥', 'date ↧'];
    const [searchText, setSearchText] = useState('');
    const [sortText, setSortText] = useState('');
    // const dropdownMenu = isDropdownOpen? DropdownMenu : '';

    console.log('searchText ', searchText);
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
            setSearchText(e.target.innerText);
            console.log(searchText);
            
        }}>{Option}</li>
    ))

    const sortMenuMapping = dropdownMenuSortOptionsArray.map((Option, index) => (
        <li id='sort_dropdown_li' key={index} onClick={(e) => {
            e.stopPropagation();
            setIsDropdownOpen(!isDropdownOpen);
            setSortOptions(e.target.innerText);
            setSortText(e.target.innerText);
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
                        <button>
                            <img src={search} alt="react_logo" className="react_logo" />
                        </button>
                        <input 
                            value={''}
                            onChange={() => {}}
                            placeholder="Search"
                            type="text" 
                            className="text" 
                        />
                    </div>
                    
                    
                    <button 
                        className='navbar_button' 
                        id='category_dropdown' 
                        onClick={(e) => DropdownMenu_drop(e)}
                        
                    >
                        <p
                            style={{
                                transform: searchText === 'all' || searchText === "" ? 'translateY(0)' : 'translateY(-10px)',
                                color: searchText === 'all' || searchText === "" ? 'white' : 'rgb(159, 177, 193)',
                                fontSize: searchText === 'all' || searchText === "" ? '1rem' : '.9rem',
                            }}
                        >
                            Categorie{searchText === 'all' || searchText === "" ? '' : ':'}
                        </p>
                        <p
                            style={{
                                transform: searchText === 'all' ? 'translateY(0px)' : 'translateY(5px)',
                            }}
                        >
                            {searchText === 'all' ? '' : searchText}
                        </p>
                        {isDropdownOpen && buttonName === 'category_dropdown' ? DropdownMenu : ''}
                        {/* {DropdownMenu} */}
                    </button>
                    
                    <button 
                        className='navbar_button' 
                        id='sort_dropdown' 
                        onClick={(e) => DropdownMenu_drop(e)}
                    >
                        <p
                            style={{
                                transform: sortText === 'default' || sortText === "" ? 'translateY(0)' : 'translateY(-10px)',
                                color: sortText === 'default' || sortText === "" ? 'white' : 'rgb(159, 177, 193)',
                                fontSize: sortText === 'default' || sortText === "" ? '1rem' : '.9rem',
                            }}
                        >
                            Sort{sortText === 'default' || sortText === ""  ? '' : ':'}
                        </p>
                        <p
                            style={{
                                transform: sortText === 'default' ? 'translateY(0px)' : 'translateY(5px)',
                            }}
                        >
                            {sortText === 'default' ? '' : sortText}
                        </p>
                        {isDropdownOpen && buttonName === 'sort_dropdown' ? DropdownMenu : ''}
                        {/* {DropdownMenu} */}
                    </button>
                </div>
                
            </nav>
            
        </>

    )
}

export default Navbar;