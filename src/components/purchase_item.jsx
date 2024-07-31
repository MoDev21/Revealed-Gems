import React from 'react';
import "./purchase_item.css"

function Purchase_Item(params) {
    return (
        <div className='purchase_item'>
            <img src='src\assets\RevealedGems.png' alt='gem_image' />
            <h2>Gem Name</h2>
            <p>This is a list of gems that have been revealed throughout the book.</p>
            <h3>10.99</h3>
        </div>
    );
}

export default Purchase_Item;