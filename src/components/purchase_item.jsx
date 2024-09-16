import React, { useState } from 'react';
import "./purchase_item.scss"

function Purchase_Item({ key, name, selectedName, setSelectedName, desc, price, image, categorie, isItemToggled, setIsItemToggled}) {



    function handleclickevent(event, handledname) {
        event.stopPropagation()
        console.log('gem clicked key ' + handledname);
        setIsItemToggled(!isItemToggled)
        setSelectedName(handledname)
        console.log(selectedName);
    }

    function getIndex(index) {
        console.log(index);

    }
    
    return (
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
    );
}

export default Purchase_Item;