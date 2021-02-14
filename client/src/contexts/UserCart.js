import React, { createContext, useState } from 'react';

export const UserCart = createContext();
const UserCartProvider = props => {

    const [cart, setCart] = useState([
        {
            name: "bracelet",
            quantity: 1,
            customText: "test",
            shipAddress: "addr"
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
        a[index] = {
            name: item.name,
            quantity: item.quantity,
            customText: item.customText,
            shipAddress: item.shipAddress
        }
        setCart(a);
    }

    return (
        <UserCart.Provider value={{ cart, setCart, addToCart, removeFromCart, updateItemInCart }}>
            {props.children}
        </UserCart.Provider>
    )
}

export default UserCartProvider;