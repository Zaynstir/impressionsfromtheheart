import React, { useState, useContext, useEffect } from 'react';
import { User } from '../../contexts/User'
//import { Inventory } from '../../contexts/Inventory'
import { useHistory } from 'react-router-dom'

const EditItem = ({ match }, props) => {

    const history = useHistory();
    const { cart, updateItemInCart } = useContext(User);

    let i = cart[match.params.id];

    useEffect(() => {
        setName(i.name);
        setQuantity(i.quantity);
        setCustomText(i.customText);
        setShipAddr(i.shipAddress);
    }, [])

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [customText, setCustomText] = useState("");
    const [shipAddr, setShipAddr] = useState("");

    const validate = () => {
        let flag = false;
        if (customText === "") {
            alert("text empty");
            flag = true;
        }
        if (quantity < 1) {
            alert("Quantity is less than 1");
            flag = true;
        }
        if (quantity % 1 !== 0) {
            alert("Quantity has a decimal");
            flag = true;
        }
        if (shipAddr === "") {
            alert("Empty Address");
            flag = true;
        }
        if (!flag) {
            let ray = {
                name: name,
                quantity: quantity,
                customText: customText,
                shipAddress: shipAddr
            }
            updateItemInCart(match.params.id, ray);
            history.push('/cart');
        }
        else {
            alert("Something is wrong, did not add to cart.")
        }
    }

    return (
        <div >
            <div className="row justify-content-center">
                <div>
                    <div className="card card-item" >
                        <div className="card-body row justify-content-center">
                            <div className="col-md-6">
                                <img className="card-img-top" src={require("../../img/apple-shadow.png")} alt="Card image cap" />
                            </div>
                            <div className="col-md-6">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">Item Price: $10.00</p>
                                <div className="form-group row">
                                    <label for="quantity" className="col-md-4 col-form-label">Quantity: </label>
                                    <div className="col-md-6"><input className="form-control" type="number" id="quantity" min="1" value={quantity} onChange={(e) => (setQuantity(e.target.value))} ></input></div>
                                </div>
                                <div className="form-group row">
                                    <label for="customtext" className="col-md-4 col-form-label">Custom Text: </label>
                                    <div className="col-md-6"><input className="form-control" type="text" id="customText" value={customText} onChange={(e) => (setCustomText(e.target.value))} placeholder="Text Here" ></input></div>
                                </div>
                                <div className="form-group row">
                                    <label for="shipAddr" className="col-md-4 col-form-label">Shipping Address: </label>
                                    <div className="col-md-6"><input className="form-control" type="text" id="shipAddr" value={shipAddr} onChange={(e) => (setShipAddr(e.target.value))} placeholder="Shipping Address" ></input></div>
                                </div>
                                <p className="card-text">Total Price: ${10 * quantity}.00</p>
                                <button className="btn btn-primary" onClick={() => { validate(); }}>Update Item</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default EditItem;