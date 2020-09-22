import React from 'react';
import '../style.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="offset">
                <div id="Landing">
                    <div className="landing">
                        <div className="home-wrap">
                            <div className="home-inner">

                            </div>
                        </div>
                    </div>

                    <div className="caption text-center">
                        <h1>Impressions From The Heart</h1>
                        <h3>Connecting Families At The Heart</h3>
                        <Link to="/about-us"><button className="btn btn-outline-light btn-lg" >About Us</button></Link>
                    </div>
                </div>
            </div>

            <div id="course" className="offset">
                <div className="col-12 narrow text-center">
                    <h1>Wolff-Parkinson-White Syndrome</h1>
                    <p className="lead">Click the button to learn about Wolff-Parkinson-White Syndrome.
				</p>
                    <Link to="/wpw"><button className="btn btn-secondary btn-md" href="/wpw" target="_blank">Let's Learn</button></Link>
                </div>
            </div>

            <div id="features" className="offset">

                <div className="jumbotron">
                    <div className="narrow text-center">
                        <div className="col-12">
                            <h1>Do you have a watch to donate?</h1>
                            <p className="lead">Help us connect you to a family that desperately needs a heart monitor for
                            Wolff-Parkinson-White Syndrome.
						</p>
                            <Link to="/wpw"><button className="btn btn-secondary btn-md" href="/wpw" target="_blank">Let's Connect</button></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div id="resources" className="offset">

                <div className="fixed-background">

                    <div className="row dark text-center">
                        <div className="col-12">
                            <h3 className="heading">Store Items</h3>
                            <div className="heading-underline"></div>
                        </div>

                        <div className="col-md-4">
                            <div className="feature">
                                <img alt="Bracelet" src={require("../img/apple-shadow.png")} width="25%" height="25%" />
                            </div>
                            <p className="lead">Bracelets</p>
                        </div>

                        <div className="col-md-4">
                            <div className="feature">
                                <img alt="Necklace" src={require("../img/apple-shadow.png")} width="25%" height="25%" />
                            </div>
                            <p className="lead">Necklaces</p>
                        </div>

                        <div className="col-md-4">
                            <div className="feature">
                                <img alt="Keychain" src={require("../img/apple-shadow.png")} width="25%" height="25%" />
                            </div>
                            <p className="lead">Keychains</p>
                        </div>
                        <div className="col-12">
                            <Link to="/store"><button className="btn btn-secondary btn-md" target="_blank">Go To Store</button></Link>
                        </div>
                    </div>

                    <div className="fixed-wrap">
                        <div className="fixed">

                        </div>
                    </div>

                </div>

            </div>



        </div>
    );
}

export default Home;