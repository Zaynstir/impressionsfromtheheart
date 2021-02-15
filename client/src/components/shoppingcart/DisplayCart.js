import react, { useContext } from 'react';

import { UserCart } from '../../contexts/UserCart';
import CartItem from './CartItem';


const DisplayCart = () => {

    const { cart } = useContext(UserCart);

    return (
        <div>
            {
                cart.map((item, idx) => (

                    <CartItem key={idx} idx={idx} item={item} />
                ))
            }
        </div>
    );
}

export default DisplayCart;