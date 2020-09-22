import React, { useContext } from 'react';
import { User } from '../../contexts/User'
//import { Inventory } from '../../contexts/Inventory'

import { Link } from 'react-router-dom';

const CartItem = (props) => {

    //const { findItem } = useContext(Inventory)
    const { removeFromCart } = useContext(User);
    console.log(props);
    //let item = findItem(props.data.name)

    console.log(props);

    const deleteItem = () => {
        console.log("delete Item");
        removeFromCart(props.pos);
    }
    /*
        const editItem = () => {
            console.log("Edit Item");
    
        }
    */
    return (
        <div className="col-8 justify-content-center">
            <div className="row">
                {props.pos === 0 ? <hr style={{ backgroundColor: "black", height: ".005rem", width: "100%" }} /> : ""}
            </div>
            <div className="row">
                <div className="col-6 d-flex justify-content-end">
                    <img alt="img" style={{ width: "18rem" }} src={require("../../img/apple-shadow.png")} />
                </div>
                <div className="col-6 justify-content-start">
                    <h2><b>{props.data.name}</b></h2>
                    <h4><b>Custom Text:</b> {props.data.customText}</h4>
                    <h4><b>Address:</b> {props.data.shipAddress}</h4>
                    <h4><b>Quantity:</b> {props.data.quantity}</h4>
                    <h4><b>Total Price:</b> ${props.data.quantity * 10}.00</h4>
                    <div className="justify-content-center">
                        <Link to={`/edititem/${props.pos}`} className="btn btn-primary mr-2">Edit {props.data.quantity === 1 ? "Item" : "These Items"}</Link>
                        <button className="btn btn-danger" onClick={() => deleteItem()}>Delete {props.data.quantity === 1 ? "Item" : "These Items"}</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <hr style={{ backgroundColor: "black", height: ".005rem", width: "100%" }} />
            </div>
        </div>
    );
}

export default CartItem;