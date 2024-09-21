import React, { useState } from 'react';
import "./purchase_item.scss"

function Purchase_Item({ key, name, selectedName, setSelectedName, desc, price, image, categorie, isItemToggled, setIsItemToggled}) {



    function handleclickevent(event, handledname) {
        event.stopPropagation()
        console.log('gem clicked key ' + handledname);
        setIsItemToggled(!isItemToggled)
        setSelectedName(handledname)
        console.log(selectedName);
        getMousePosition(event);

        
    }

    const getMousePosition = (event) => {
        // const { clientX, clientY } = event;
        // console.log(clientX, clientY);
        const x = event.clientX;
        const y = event.clientY;
        document.documentElement.style.setProperty('--mouse-x', `${x}px`);
        document.documentElement.style.setProperty('--mouse-y', `${y}px`);
    }


    return (
        <div className='purchase_item_container'>
            <div className={isItemToggled && selectedName === name ? 'purchase_item_modalbox' : 'purchase_item'} onClick={(event) => handleclickevent(event, name)}>
                <img src={image} alt='gem_image' />
                <div className="purchase_item__info_container">
                    <h2>{name}</h2>
                    <p>{desc}</p>
                    {/* <h3>{price}</h3> */}
                    <p>{categorie}</p>
                    {isItemToggled && selectedName === name ? <button>buy on Amazon</button> : ''}
                </div>
            </div>
        </div>
    );
}

export default Purchase_Item;