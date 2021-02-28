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
                                        <div className="col d-flex justify-content-center pb-1">
                                            <div className="footer-link" onClick={(e) => { window.location.replace('#/') }}>Home</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col d-flex justify-content-center pb-1">
                                            <div className="footer-link" onClick={(e) => { window.location.replace('#/about-us') }}>About Us</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col d-flex justify-content-center pb-1">
                                            <div className="footer-link" onClick={(e) => { window.location.replace('#/contact-us') }}>Contact Us</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col d-flex justify-content-center pb-1">
                                            <div className="footer-link" onClick={(e) => { window.location.replace('#/wpw') }}>WPW Info</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col d-flex justify-content-center pb-1">
                                            <div className="footer-link" onClick={(e) => { window.location.assign('#/wpw#features') }}>Monitor Donation</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col d-flex justify-content-center pb-1">
                                            <div className="footer-link" onClick={(e) => { window.location.replace('#/wpw#course') }}>Monitor Request</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col d-flex justify-content-center pb-1">
                                            <div className="footer-link" onClick={(e) => { window.location.replace('#/store') }}>Accessory Store</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col d-flex justify-content-center pb-1">
                                            <div className="footer-link" onClick={(e) => { window.location.replace('#/sitemap') }}>Site Map</div>
                                        </div>
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