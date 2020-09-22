import React from 'react';
import { Link } from 'react-router-dom'

const AboutUs = () => {
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
                    <div className="caption text-center d-flex justify-content-center">
                        <div className="card pl-4 pr-4 pb-4 pt-4" style={{ "color": "black", width: "75%", border: "2px solid black", 'text-transform': 'none' }}>
                            <h2>Our story</h2>
                            <hr />
                            <p>
                                It was 2017 and our son was wrapping up his senior year. Academic tests were taken. College decisions were made. Our son was healthy. But the morning of May XX started out a little different with a small fender bender and then chest pains followed.
                                To be cautious, we made an appointment and after the typical diagnostic questions it led to a EKG. Immediately the report noted Wolff-Parkinson-White Syndrome. Confirmed later at cardiologist that we needed to have an ablation to fix the heart defect. 1 month later on, June XX w our son had his successful ablation and yearly check-ups.
                            </p>
                            <p>
                                The 30 days between the diagnosis and surgery were filled with worry as we didn’t have the resources to purchase a heart monitor to show signs of trouble as we prepared for an expensive surgery.  Fast forward to 2020, with lots of down time during COVID-19, we wanted to make sure other families didn’t have to worry about funds to receive a heart monitor.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="course" className="offset pb-5">
                <div className="col-12 narrow text-center">
                    <h1>What We Do</h1>
                    <p className="lead">
                        Impressions From the Heart connects families who have the resources to provide heart monitor devices with families who are looking for provision of heart monitors. Let us know if you need to connect with us to bless a family or if you are a family needing a blessing during this time.
				    </p>
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
                            <Link to="/wpw"><button className="btn btn-secondary btn-md" target="_blank">Let's Connect</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default AboutUs;