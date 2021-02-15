import React, { useContext } from 'react';

import { UserCart } from '../../contexts/UserCart';

const CartItem = (props) => {

    console.log(props);
    return (
        <div className="d-flex justify-content-center">
            <div className="card card-item flex-grow-1" style={{ maxWidth: "40rem" }}>
                <div className="card-header">
                    <h1>{props.item.name}</h1>
                </div>
                <div className="card-body">
                    <div className="float-left">
                        <div className="row">
                            <div className="col">
                                <b>Quantity: </b>
                                {props.item.details.quantity}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <b>Custom Text: </b>
                                {props.item.details.customText}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <b>Shipping Address: </b>
                                {props.item.details.shipAddress}
                            </div>
                        </div>
                    </div>
                    <div className="float-right">
                        <div className="row">
                            <div className="col d-flex justify-content-end">
                                <div className="btn btn-outline-primary" onClick={(e) => { window.location.replace("#/EditItem/" + props.item.id) }}>Edit Item</div>
                            </div>
                        </div>
                        <div className="row d-flex align-items-end">
                            <div className="col d-flex justify-content-end">
                                ${props.item.details.price}
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
}

export default CartItem;