import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '../assets/react.svg'
import RevealedGemsLogo from '../assets/RevealedGemsDocumentLogo.png'
import search from '../assets/search.svg'
import './navbar.css';





function Navbar({isDropdownOpen, setIsDropdownOpen, setCategories, buttonName, setButtonName, sortOptions, setSortOptions, sortedItems, setSearchText, searchText }) {

    const dropDownMenuCategoryArray = ['all', 'health', 'figdets', 'electronics', 'fitness'];
    const dropdownMenuSortOptionsArray = ['default', 'name ↥', 'name ↧', 'price ↥', 'price ↧', 'date ↥', 'date ↧'];
    const [categorieText, setCategorieText] = useState('');
    const [sortText, setSortText] = useState('');
    // const dropdownMenu = isDropdownOpen? DropdownMenu : '';


    useEffect(() => {
        function handleClickOutside(event) {
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
            setCategorieText(e.target.innerText);

            
        }}>{Option}</li>
    ))

    const sortMenuMapping = dropdownMenuSortOptionsArray.map((Option, index) => (
        <li id='sort_dropdown_li' key={index} onClick={(e) => {
            e.stopPropagation();
            setIsDropdownOpen(!isDropdownOpen);
            setSortOptions(e.target.innerText);
            setSortText(e.target.innerText);

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
        setIsDropdownOpen(true);

    }

    function handleSearchInput(e) {
        setSearchText(e.target.value);
        console.log(searchText);
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
                            value={searchText}
                            onChange={handleSearchInput}
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
                                transform: categorieText === 'all' || categorieText === "" ? 'translateY(0)' : 'translateY(-10px)',
                                color: categorieText === 'all' || categorieText === "" ? 'white' : 'rgb(213, 149, 172)',
                                fontSize: categorieText === 'all' || categorieText === "" ? '1rem' : '.9rem',
                            }}
                        >
                            Categorie{categorieText === 'all' || categorieText === "" ? '' : ':'}
                        </p>
                        <p
                            style={{
                                transform: categorieText === 'all' ? 'translateY(0px)' : 'translateY(5px)',
                            }}
                        >
                            {categorieText === 'all' ?  '' : categorieText}
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
                                color: sortText === 'default' || sortText === "" ? 'white' : 'rgb(213, 149, 172)',
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