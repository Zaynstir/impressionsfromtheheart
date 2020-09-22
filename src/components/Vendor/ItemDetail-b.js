import React, { useState, useContext, useEffect } from 'react';
import { Inventory } from '../../contexts/Inventory'
import { User } from '../../contexts/User'

import { Link } from 'react-router-dom'

const ItemDeatil = ({ match }) => {

    useEffect(() => {
        setItem(findItem(match.params.id))
    }, [])

    const [item, setItem] = useState({});

    const { findItem } = useContext(Inventory);
    const { addToCart } = useContext(User);

    return (
        <div >
            <div className="row">
                <div className="col-md-10"></div>
                <div className="col-md-2"><Link to="/cart"><h1>Cart</h1></Link></div>
            </div>
            <div className="row  justify-content-center">
                <div>
                    <div className="card card-item" >
                        <div class="card-body row justify-content-center">
                            <div className="col-md-6">
                                <img class="card-img-top" src={require("../../img/apple-shadow.png")} alt="Card image cap" />
                            </div>
                            <div className="col-md-6">
                                <h5 class="card-title">{item.name}</h5>
                                <p class="card-text">${item.price}</p>
                                <button className="btn btn-primary" onClick={() => { addToCart(item) }}>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ItemDeatil;