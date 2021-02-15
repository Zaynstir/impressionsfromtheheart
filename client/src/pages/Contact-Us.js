import React, { useState } from 'react';

const ContactUs = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");


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
                            <h2>Contact Us</h2>
                            <hr />
                            <p>
                                If you need to contact us for any reason. Feel free to send us an email at 'Email@Address.com'.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;

