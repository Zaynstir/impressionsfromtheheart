import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div id="contact" className="">

            <footer className="footer">
                <div className="">
                    <div className="row justify-content-center">
                        <div className="col-md-5 text-center">

                            <img alt="logo" src={require('../img/nuno.png')} />
                            <p>Connecting Families at the Heart</p>

                        </div>
                    </div>
                    <div className="heading-underline"></div>

                    <div className="row links">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="row">
                                        <Link className="footer-link" to="/"><label>Home</label></Link>
                                    </div>
                                    <div className="row">
                                        <Link className="footer-link" to="/about-us"><label>About Us</label></Link>
                                    </div>
                                    <div className="row">
                                        <Link className="footer-link" to="/contact-us"><label>Contact Us</label></Link>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="row">
                                        <Link className="footer-link" to="/wpw"><label>WPW Info</label></Link>
                                    </div>
                                    <div className="row">
                                        <Link className="footer-link" to="/wpw#features"><label>Monitor Donation</label></Link>
                                    </div>
                                    <div className="row">
                                        <Link className="footer-link" to="/wpw#course"><label>Monitor Request</label></Link>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="row">
                                        <Link className="footer-link" to="/store"><label>Accessory Store</label></Link>
                                    </div>
                                    <div className="row">
                                        <Link className="footer-link" to="/sitemap"><label>Site Map</label></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-2"></div>
                    </div>
                    <div className="row justify-content-center">
                        <hr className="socket" />
                            &copy; None-Existent.
					</div>
                </div>
            </footer>

        </div>
    );
}

export default Footer;