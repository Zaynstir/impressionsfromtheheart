import React, { createContext, useState } from 'react';

export const UserCart = createContext();
const UserCartProvider = props => {

    const [cart, setCart] = useState([
        {
            name: "Bracelet",
            id: 1,
            baseprice: 10,
            details: {
                quantity: 1,
                customText: "test",
                shipAddress: "addr"
            }
        }
    ])

    const addToCart = async (item) => {
        //let item = await findItem(props);
        setCart([...cart, item])
        console.log(cart)
    }

    const removeFromCart = (index) => {
        let a = [...cart];
        a.splice(index, 1);
        setCart(a);
    }

    const updateItemInCart = (index, item) => {
        let a = [...cart];
        a[index] = { ...item }
        setCart(a);
    }

    return (
        <UserCart.Provider value={{ cart, setCart, addToCart, removeFromCart, updateItemInCart }}>
            {props.children}
        </UserCart.Provider>
    )
}

export default UserCartProvider;