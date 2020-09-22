import React, { useEffect } from 'react';
//import { Link } from 'react-router-dom'
//import CLink from '../CLink'

import Item from './Item'
//import { Inventory } from '../../contexts/Inventory'
import '../../App.css';

function DisplayItems() {

    useEffect(() => {
    }, [])

    //const { inv } = useContext(Inventory)


    //const fetchItems = async () => {

    //}

    let items = ["bracelet", "necklace", "keychain"]

    return (
        <div className="row justify-content-center">


            {items.map((item, idx) => (

                <div key={idx} className="col-md-4 d-flex justify-content-center" style={{ paddingBottom: "1rem" }}>
                    <Item i={item} />
                </div>
            ))}
        </div>
    );
}



export default DisplayItems;
