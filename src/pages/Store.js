import React from 'react';
import '../style.css'
import DisplayItems from '../components/Vendor/DisplayItems'
import Search from '../components/Vendor/Search'

import { Link } from 'react-router-dom'
import Filter from '../components/Vendor/Filter';

const Shop = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-10">
                </div>
                <div className="col-md-2 d-flex justify-content-end pr-5">
                    <Link to="/cart"><h1>Cart</h1></Link>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <DisplayItems />
                </div>
            </div>
            <div className="row">
                <div className="col justify-content-center d-flex">
                    This store is used to cover the costs of shipping items.
                </div>
            </div>
        </div>
    )

    return (
        <div>
            <div className="row">
                <div className="col-md-10">
                    <Search />
                </div>
                <div className="col-md-2">
                    <Link to="/cart"><h1>Cart</h1></Link>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <Filter />
                </div>
                <div className="col-md-10">
                    <DisplayItems />
                </div>
            </div>
        </div>
    );
}

export default Shop;