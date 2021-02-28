import React from 'react';
import { Link } from 'react-router-dom'

const SiteMap = () => {
    return (
        <div className="offset">
            <div className="row justify-content-center mt-5">
                <div className="col-12">
                    <div className="row justify-content-center">
                        <Link className="" to="#/">Home</Link>
                    </div>
                    <div className="row justify-content-center">
                        <Link className="" to="#/about-us">About Us</Link>
                    </div>
                    <div className="row justify-content-center">
                        <Link className="" to="#/contact-us">Contact Us</Link>
                    </div>
                    <div className="row justify-content-center">
                        <Link className="" to="#/wpw">WPW</Link>
                    </div>
                    <div className="row justify-content-center">
                        <Link className="" to="#/store">Store</Link>
                    </div>
                    <div className="row justify-content-center">
                        <Link className="" to="#/cart">Cart</Link>
                    </div>
                    <div className="row justify-content-center">
                        <Link className="" to="#/sitemap">Site Map</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SiteMap;