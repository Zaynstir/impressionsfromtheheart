import React, { useState, useEffect, useContext } from 'react';

import { UserCart } from '../../contexts/UserCart';

const EditItem = ({ match }) => {


    const { cart, updateItemInCart } = useContext(UserCart);

    const [item, setItem] = useState(cart[match.params.id]);
    const [details, setDetails] = useState({
        quantity: item.details.quantity || "",
        customText: item.details.customText || "",
        shipAddress: item.details.shipAddress || ""
    });


    const updateValue = (e) => {
        if (e.target.type == "text") {
            //injection protection
            setDetails({ ...details, [e.target.id]: e.target.value });
        }
        else if (e.target.type == "number") {
            //injection again lol
            setDetails({ ...details, [e.target.id]: e.target.value });
        }
    }

    const validate = () => {
        //let itemObj = item.children[Object.keys(item.children)[0]];
        let itemObj = item;
        itemObj.details = details;
        console.log(itemObj);
        updateItemInCart(match.params.id, itemObj);
        //addToCart(itemObj);
        window.location.replace("#/cart");
    }

    return (
        <div className="offset">
            {
                <div>
                    <h1>{item.name}</h1>
                    <h2>{item.baseprice}</h2>
                    <hr />
                    Quantity: <input type="text" id="quantity" value={details.quantity} onChange={updateValue}></input>
                    Custom Text: <input type="text" id="customText" value={details.customText} onChange={updateValue}></input>
                    Shipping Address: <input type="text" id="shipAddr" value={details.shipAddress} onChange={updateValue}></input>
                    <button onClick={validate}>thing</button>
                </div>
            }
        </div>
    );
}

export default EditItem;