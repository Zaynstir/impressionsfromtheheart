import React, { useState, useContext } from 'react';

import { UserCart } from '../../contexts/UserCart';

const Checkout = () => {

    const [contactDetails, setContactDetails] = useState({
        name: "asdf",
        email: "",
        phone: ""
    })

    const { cart } = useContext(UserCart);

    const updateDetails = (e) => {
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
            .then(data => console.log(data))
            .catch(err => console.error(err));
    }

    return (
        <div className="offset">
            <h1>Checkout</h1>
            <button onClick={checkoutCart}>Checkout</button>
        </div>
    );
}

export default Checkout;