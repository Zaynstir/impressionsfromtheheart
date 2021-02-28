import React, { useState, useEffect } from 'react';
import $ from 'jquery'
import Swal from 'sweetalert2';

const WPW = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [name2, setName2] = useState('');
    const [email2, setEmail2] = useState('');

    const [wpwr, setwpwr] = useState({
        name: "",
        email: ""
    })

    const [wpwd, setwpwd] = useState({
        name: "",
        email: ""
    })

    useEffect(() => {
        let initStr = window.location.hash;
        let newStr = initStr.substring(2);
        let idx = newStr.indexOf("#");
        if (idx === -1) {
            window.scrollTo(0, 0);
        }
        else {
            let scrollTo = newStr.substring(idx + 1);
            let pxidx = getComputedStyle(document.querySelector('.navbar')).height.indexOf('p');
            let number = parseFloat(getComputedStyle(document.querySelector('.navbar')).height.substring(0, pxidx));
            switch (scrollTo) {
                case "course":
                    window.scroll(0, (document.getElementById('course').offsetTop - number));
                    break;
                case "features":
                    window.scroll(0, (document.getElementById("features").offsetTop - number));
                    break;
                case "resources":
                    window.scroll(0, (document.getElementById("resources").offsetTop - number));
                    break;
                default:
                    window.scrollTo(0, 0);
                    break;
            }
        }
    }, [])

    window.onhashchange = function () {
        window.location.reload();
    }



    const updateValue = (e, type) => {
        if (type == "wpwrequest") {
            setwpwr({ ...wpwr, [e.target.id]: e.target.value })
        }
        else if (type == "wpwdonation") {
            setwpwr({ ...wpwd, [e.target.id]: e.target.value })
        }
    }

    const sendWPWRequests = () => {
        fetch('http://localhost:5000/wpw/insertRequest', {
            method: 'post',
            body: JSON.stringify({
                name: wpwr.name,
                email: wpwr.email
            }),
            headers: { "Content-Type": "application/json" }
        })
            .then(response => response.json())
            .then(data => {
                if (data.flag == -1) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'There was an error with the request.',
                        showCloseButton: true
                    })
                }
                else {
                    Swal.fire({
                        icon: 'success',
                        title: 'Submitted',
                        text: 'Your request has been submitted.',
                        showCloseButton: true
                    })
                }
            })
            .catch(err => console.error(err));
    }

    const sendWPWDonations = () => {
        fetch('http://localhost:5000/wpw/insertDonation', {
            method: 'post',
            body: JSON.stringify({
                name: wpwd.name,
                email: wpwd.email
            }),
            headers: { "Content-Type": "application/json" }
        })
            .then(response => response.json())
            .then(data => {
                if (data.flag == -1) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'There was an error with the request.',
                        showCloseButton: true
                    })
                }
                else {
                    Swal.fire({
                        icon: 'success',
                        title: 'Submitted',
                        text: 'Your information has been submitted.',
                        showCloseButton: true
                    })
                }
            })
            .catch(err => console.error(err));
    }

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
                        <div className="card pl-4 pr-4 pb-4 pt-4" style={{ "color": "black", width: "75%", border: "2px solid black", 'textTransform': 'none' }}>
                            <h2>Wolff-Parkinson-White Syndrome</h2>
                            <hr />
                            <p style={{ "fontSize": "25px" }}>
                                Mayoclinic defines Wolff-Parkinson-White Syndrome as, “In Wolff-Parkinson-White (WPW) syndrome, an extra electrical pathway between your heart's upper and lower chambers causes a rapid heartbeat. The condition, which is present at birth, is fairly rare.”
                            </p>
                            <p style={{ "fontSize": "10px" }}>
                                Bibliography: Wolff-Parkinson-White (WPW) syndrome - Symptoms and causes
                                "Wolff-Parkinson-White (WPW) Syndrome - Symptoms And Causes". Mayo Clinic, 2020, <a href="https://www.mayoclinic.org/diseases-conditions/wolff-parkinson-white-syndrome/symptoms-causes/syc-20354626">https://www.mayoclinic.org/diseases-conditions/wolff-parkinson-white-syndrome/symptoms-causes/syc-20354626</a>. Accessed 27 July 2020.
                            </p>
                        </div>
                    </div>
                </div>
                <div id="resources" className="">

                    <div className="jumbotron">
                        <div className="narrow text-center">
                            <div className="col-12">
                                <h1>Resources</h1>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h4>Instructional Video</h4>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/JIRWLObizfQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-12">
                                        <p>Search for cardiac electroncologist: <a href="https://www.hrsonline.org/find-a-specialist">https://www.hrsonline.org/find-a-specialist</a></p>
                                        <p>WPW Facebook Page: <a href="https://www.facebook.com/groups/place4comfortwpw/">https://www.facebook.com/groups/place4comfortwpw/</a></p>
                                        <p>For free heart checks, check local hospitals or <a href="https://www.anthonybates.org/">https://www.anthonybates.org/</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="course" className="pb-5">
                    <div className="col-12 narrow text-center">
                        <h1>Do you need a Heart Monitor</h1>
                        <div className="card p-4" style={{ border: "0px" }}>
                            <div className="row d-flex justify-content-center">
                                <h2>Enter your information</h2>

                            </div>
                            <div className="row">
                                <hr />
                            </div>
                            <div className="form-group row">
                                <label htmlFor="name" className="col-sm-6 col-form-label d-flex justify-content-center">Name: </label>
                                <div className="col-sm-6">
                                    <input type="text" id="name" className="form-control" value={name} onChange={(e) => { updateValue(e, "wpwrequest") }} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="email" className="col-sm-6 col-form-label d-flex justify-content-center">Email: </label>
                                <div className="col-sm-6">
                                    <input type="text" id="email" className="form-control" value={email} onChange={(e) => { updateValue(e, "wpwrequest") }} />
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <button className="btn btn-outline-secondary" onClick={() => { sendWPWRequests() }}>Send Information</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="features" className="">

                    <div className="jumbotron">
                        <div className="narrow text-center">
                            <div className="col-12">
                                <h1>Do you have a watch to donate?</h1>
                                <div className="card p-4" style={{ border: "0px", backgroundColor: "#e9ecef" }}>
                                    <div className="row d-flex justify-content-center">
                                        <h2>Enter your information</h2>

                                    </div>
                                    <div className="row">
                                        <hr />
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="name" className="col-sm-6 col-form-label d-flex justify-content-center">Name: </label>
                                        <div className="col-sm-6">
                                            <input type="text" id="name" className="form-control" value={wpwd.name} onChange={(e) => { updateValue(e, "wpwdonation") }} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="email" className="col-sm-6 col-form-label d-flex justify-content-center">Email: </label>
                                        <div className="col-sm-6">
                                            <input type="text" id="email" className="form-control" value={wpwd.email} onChange={(e) => { updateValue(e, "wpwdonation") }} />
                                        </div>
                                    </div>
                                    <div className="row d-flex justify-content-center">
                                        <button className="btn btn-outline-secondary" onClick={() => { sendWPWDonations() }}>Send Information</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default WPW;