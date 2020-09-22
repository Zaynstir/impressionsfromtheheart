import React, { createContext, useState } from 'react';
//import * as data from '../items.json'

export const User = createContext();
const UserProvider = (props) => {


    /*
    [
        {
            name: match.params.id,
            quantity: quantity,
            customText: customText,
            shipAddress: shipAddr
        }
    ]
    */
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
        <User.Provider value={{ cart, setCart, addToCart, removeFromCart, updateItemInCart }}>
            {props.children}
        </User.Provider>
    );
}
/*
const findItem = (item) => {
    for (let i = 0; i < data['default'].length; i++) {
        console.log(data.default[i].name)
        console.log(item + " - " + data.default[i])
        if (data['default'][i]['name'] == item) {
            return data['default'][i]
        }
    }
    return -1;
}*/

export default UserProvider;