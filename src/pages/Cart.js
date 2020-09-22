import React, { useState } from 'react';
//import { Link } from 'react-router-dom'
//import { User } from '../contexts/User'

import DisplayCart from '../components/CartComps/DisplayCart'

function Cart({ match }) {


    //const { cart } = useContext(User);

    //const [item, setItem] = useState({});

    const [displayPage, setDisplayPage] = useState("DisplayCart");
    /*
        const fetchItems = async () => {
    
    
        }*/

    return (
        <div>
            <div className={displayPage === "DisplayCart" ? "" : "d-none"}>
                <DisplayCart />
            </div>
            <div className={displayPage === "Checkout" ? "" : "d-none"}>
                Checkout
            </div>
        </div >
    );
}



export default Cart;
