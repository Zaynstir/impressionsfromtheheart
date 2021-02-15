import React, { useContext } from 'react';

import { UserCart } from '../../contexts/UserCart';

const CartItem = (props) => {

    console.log(props);

    return (
        <div>
            <h1>{props.item.name}</h1>
            <p>{props.item.details.customText}</p>
            <p>{props.item.details.shipAddr}</p>
            <p>{props.item.details.quantity}</p>
            <p>{props.item.baseprice}</p>
            <button onClick={(e) => { window.location.replace("#/EditItem/" + props.idx) }}>Edit Item</button>
        </div>
    );
}

export default CartItem;