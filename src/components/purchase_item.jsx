import React from 'react';
import "./purchase_item.css"

function Purchase_Item({name, desc, price, image, categorie}) {
    
    return (
        <div className='purchase_item'>
            <img src={image} alt='gem_image' />
            <h2>{name}</h2>
            <p>{desc}</p>
            <h3>{price}</h3>
            <p>{categorie}</p>
        </div>
    );
}

export default Purchase_Item;