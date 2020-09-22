import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import '../style.css'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <Link to={'/'}><div className="navbar-brand"><img className="nav-img" src={require('../img/nuno.png')} alt="failed" /></div></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className={"nav-link" + (useLocation().pathname == "/" ? " active" : "")} to="/">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={"nav-link" + (useLocation().pathname.toLowerCase().includes("/wpw") ? " active" : "")} to="/wpw">
                            Wolff-Parkinson-White
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={"nav-link" + (useLocation().pathname.toLowerCase().includes("/store") ? " active" : "")} to="/store">
                            Store
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={"nav-link" + (useLocation().pathname.toLowerCase().includes("/about-us") ? " active" : "")} to="/about-us">
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={"nav-link" + (useLocation().pathname.toLowerCase().includes("/contact-us") ? " active" : "")} to="/contact-us">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;