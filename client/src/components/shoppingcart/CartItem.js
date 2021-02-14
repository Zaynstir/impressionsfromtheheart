import React from 'react';

const CartItem = (props) => {

    console.log(props);

    return (
        <div>
            <h1>Item</h1>
            <button onClick={(e) => { window.location.replace("#/EditItem/" + props.idx) }}>Edit Item</button>
        </div>
    );
}

export default CartItem;