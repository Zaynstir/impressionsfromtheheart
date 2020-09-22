import React, { useContext } from 'react';
import { User } from '../../contexts/User'

import { Link } from 'react-router-dom'

import CartItem from './CartItem'

const DisplayCart = (props) => {

    const { cart } = useContext(User);
    let price = 0;
    cart.map((item) => (price += 10 * item.quantity))

    return (
        <div className="col-md-12 justify-content-center">
            {cart.map((item, idx) => (
                <div key={idx} className="row  justify-content-center"><CartItem pos={idx} data={item} /></div>
            )
            )}
            <div className="row justify-content-center">
                <div className="col-8 justify-content-center">
                    <div className="row">
                        <div className="col-6 d-flex justify-content-center">
                            <h4><b>Total Price:</b> ${price}.00</h4>
                        </div>
                        <div className="col-6 d-flex justify-content-center">
                            <Link to="/Checkout" className="btn btn-primary">Checkout</Link>
                        </div>
                    </div>
                    <div className="row">
                        <hr style={{ backgroundColor: "black", height: ".005rem", width: "100%" }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DisplayCart;