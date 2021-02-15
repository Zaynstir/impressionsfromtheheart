import React, { useState, useContext, useEffect } from 'react';
import defaultIMG from '../../img/apple-shadow.png'
import Swal from 'sweetalert2';

import { UserCart } from '../../contexts/UserCart';

const Checkout = () => {

    const [contactDetails, setContactDetails] = useState({
        name: "asdf",
        email: "",
        phone: ""
    })

    useEffect(() => {
    }, [])

    const { cart } = useContext(UserCart);

    const updateValue = (e) => {
        if (e.target.type == "text") {
            //injection protection
            setContactDetails({ ...contactDetails, [e.target.id]: e.target.value });
        }
        else if (e.target.type == "number") {
            //injection again lol
            setContactDetails({ ...contactDetails, [e.target.id]: e.target.value });
        }
    }


    const checkoutCart = () => {
        let ray = {
            userDetails: contactDetails,
            userCart: cart
        }
        console.log(ray)
        let test = JSON.stringify(ray);
        console.log(test);
        fetch('http://localhost:5000/store/insertOrder', {
            method: 'post',
            body: test,
            headers: { "Content-Type": "application/json" }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.newID == -1) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'There seemed to be an issue regarding your order. If this keeps happening, please give us an email.',
                        showCloseButton: true
                    })
                } else {
                    Swal.fire({
                        icon: 'success',
                        title: 'Your order has been recieved.',
                        text: 'We will be in touch with you shortly. Your order id is ' + data.newID + '.',
                        showCloseButton: true,
                        onClose: orderSubmitted
                    });
                }
            })
            .catch(err => console.error(err));
    }

    const orderSubmitted = () => {
        window.location.replace('#/store')
    }

    return (
        <div className="offset">
            <div className="row pb-2">
                <div className="col">
                    <div className="store-title">
                        <h1>Checkout</h1>
                    </div>
                    <div className="cart-icon" onClick={() => { window.location.replace('#/Cart') }} >
                        <i className="fas fa-shopping-cart" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="d-flex justify-content-center">
                        <div className="card flex-md-row card-item" style={{ width: "40rem" }}>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Contact Information</h5>
                                <p className="card-text">This is used to contact you so that we can proceed with payment.</p>
                                <div className="form-group row">
                                    <label htmlFor="name" className="col-sm-6 col-form-label card-text">Name:</label>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control" id="name" value={contactDetails.name} onChange={updateValue} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="email" className="col-sm-6 col-form-label card-text">Email:</label>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control" id="email" value={contactDetails.email} onChange={updateValue} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="phone" className="col-sm-6 col-form-label card-text">Phone Number:</label>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control" id="phone" value={contactDetails.phone} onChange={updateValue} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col d-flex justify-content-center">
                    <div className="btn btn-outline-danger mr-5" style={{ width: "10rem" }} onClick={(e) => { window.location.replace("#/store") }}>Back to Store</div>
                    <div className="btn btn-outline-success" style={{ width: "10rem" }} onClick={checkoutCart}>Checkout</div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;