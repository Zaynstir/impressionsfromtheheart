import react, { useContext } from 'react';

import { UserCart } from '../../contexts/UserCart';
import CartItem from './CartItem';


const DisplayCart = () => {

    const { cart } = useContext(UserCart);

    return (
        <div>
            <h1>Display Cart</h1>
            {
                cart.map((item, idx) => (
                    <CartItem idx={idx} />
                ))
            }
            <button onClick={(e) => { window.location.replace("#/Checkout") }}>Checkout</button>
        </div>
    );
}

export default DisplayCart;