import React, { useState } from 'react';
import "./purchase_item.scss"

function Purchase_Item({ key, name, desc, price, image, categorie, isItemToggled, setIsItemToggled}) {

    
    function handleclickevent(e) {
        event.stopPropagation()
        console.log('gem clicked key ' + e.key);
        setIsItemToggled(!isItemToggled)
    }

    function getIndex(index) {
        console.log(index);

    }
    
    return (
        <div className={isItemToggled ? 'purchase_item_modalbox' : 'purchase_item'} onClick={handleclickevent}>
            <img src={image} alt='gem_image' />
            <div className="purchase_item__info_container">
                <h2>{name}</h2>
                <p>{desc}</p>
                {/* <h3>{price}</h3> */}
                <p>{categorie}</p>
                {isItemToggled ? <button>buy on Amazon</button> : ''}
            </div>

        </div>
    );
}

export default Purchase_Item;