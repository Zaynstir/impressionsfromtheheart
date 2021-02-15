import React, { useState, useEffect, useContext } from 'react';
import defaultIMG from '../../img/apple-shadow.png'

import { UserCart } from '../../contexts/UserCart';

const EditItem = ({ match }) => {


    const { cart, updateItemInCart } = useContext(UserCart);

    const [item, setItem] = useState(cart[match.params.id - 1]);
    const [details, setDetails] = useState({
        quantity: item.details.quantity || "",
        customText: item.details.customText || "",
        shipAddress: item.details.shipAddress || "",
        price: item.details.price || 0
    });


    const updateValue = (e) => {
        if (e.target.type == "text") {
            //injection protection
            setDetails({ ...details, [e.target.id]: e.target.value });
        }
        else if (e.target.type == "number") {
            //injection again lol

            if (e.target.id == "quantity") {
                let newPrice = item.baseprice * e.target.value;
                setDetails({ ...details, [e.target.id]: e.target.value, price: newPrice });
            }
            else {
                setDetails({ ...details, [e.target.id]: e.target.value });
            }
        }
    }

    const validate = () => {
        //let itemObj = item.children[Object.keys(item.children)[0]];
        let itemObj = item;
        itemObj.details = details;
        console.log(itemObj);
        updateItemInCart(match.params.id - 1, itemObj);
        //addToCart(itemObj);
        window.location.replace("#/cart");
    }

    return (
        <div className="offset">
            {
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col  ">
                                <div className="d-flex justify-content-center">
                                    <div className="card flex-md-row card-item" style={{ width: "40rem" }}>
                                        <img className="card-img-left d-flex align-self-center flex-auto align-center" src={defaultIMG} width="250px" height="250px" alt={"Image of a "} />
                                        <div className="card-body d-flex flex-column">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <div className="form-group row">
                                                <label htmlFor="quantity" className="col-sm-6 col-form-label card-text">Quantity:</label>
                                                <div className="col-sm-6">
                                                    <input type="number" min="1" className="form-control" id="quantity" value={details.quantity} onChange={updateValue} />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="customText" className="col-sm-6 col-form-label card-text">Custom Text:</label>
                                                <div className="col-sm-6">
                                                    <input type="text" className="form-control" id="customText" value={details.customText} onChange={updateValue} />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="shipAddress" className="col-sm-6 col-form-label card-text">Shipping Address:</label>
                                                <div className="col-sm-6">
                                                    <input type="text" className="form-control" id="shipAddress" value={details.shipAddress} onChange={updateValue} />
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <label className="cart-text float-left">Price:</label>
                                                <label className="card-text float-right">${details.price}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col d-flex justify-content-center">

                                        <div className="btn btn-outline-danger mr-5" style={{ width: "10rem" }} onClick={(e) => { window.location.replace("#/cart") }}>Back to Cart</div>
                                        <div className="btn btn-outline-success" style={{ width: "10rem" }} onClick={validate}>Update Item{details.quantity != 1 ? "s" : ""}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default EditItem;