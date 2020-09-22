import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import CLink from '../CLink'

import Item from './Item'
import { Inventory } from '../../contexts/Inventory'
import '../../App.css';

function DisplayItems() {

    useEffect(() => {
    }, [])

    const { inv } = useContext(Inventory)

    const [items, setItems] = useState([]);

    const fetchItems = async () => {

    }

    return (
        <div className="row justify-content-center">


            {inv.map(item => (

                <div className="col-md-4" style={{ paddingBottom: "1rem" }}>
                    <Item i={item} />
                </div>
            ))}
        </div>
    );
}



export default DisplayItems;
