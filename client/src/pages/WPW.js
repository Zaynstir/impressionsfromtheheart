import React, { useState, useEffect } from 'react';
import $ from 'jquery'

const WPW = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [name2, setName2] = useState('');
    const [email2, setEmail2] = useState('');

    useEffect(() => {
        //window.scrollTo(0, 500);
        //console.log(window.pageYOffset)

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

    const sendInfo = action => {
        let n = "";
        let e = "";
        let URL = "";
        let entry1 = "";
        let entry2 = "";
        if (action == "request") {
            n = name;
            e = email;
            URL = "https://docs.google.com/forms/d/1NVfxGk1PSGt6LOdI-_P-uu9B4yRygg6aOeTpL0urdDY/formResponse";
            entry1 = "entry.1059276653";
            entry2 = "entry.523655765";
        } else if (action == "send") {
            n = name2;
            e = email2;
            URL = "https://docs.google.com/forms/d/1iocjNfVPzKmP9m_a63MAUOXa24kmXntwLq4mUnfFRY4/formResponse";
            entry1 = "entry.2092079629";
            entry2 = "entry.569044853";
        } else {
            alert("Error on submit");
            return;
        }
        if (n == "" || e == "") {
            alert('Error on submission. One of your values are empty. Please provide correct details.');
            return;
        } else {
            $.ajax({
                url: URL,
                data: { entry1: n, entry2: e },
                type: 'GET',
                dataType: 'xml',
                statusCode: {
                    0: function (data) {
                        console.log("Okay-ish");
                        window.confirm("Thank you for request, we will get back to you shortly.");
                    },
                    200: function (data) {
                        console.log("Successful");
                        window.confirm("Thank you for request, we will get back to you shortly.");
                    },
                    403: function (data) {
                        console.log("Error");
                        window.confirm("Thank you for request, we however encountered an error. Try again, or email us directly at 'Email@Address.com'");
                    }
                }
            })
        }
        /*
                $.ajax({
                    url: 'https://docs.google.com/forms/d/e/1FAIpQLScsqo5PDWpMlFHE1F-F6f-uwx_GBA43Vtjy0yAyXlGQUuqtNQ/formResponse',
                    data: { "entry.363397345": form["name"], "entry.160108116": form["email"], 'entry.1951018395': form["comment"], 'entry.563480874': JSON.stringify(cart), 'entry.2141173274': id },
                    type: 'GET',
                    dataType: 'xml',
                    statusCode: {
                        0: function (data) {
                            console.log("send meh");
                            if (window.confirm("Order has been submitted. Your order ID is " + id + " If you do not hear a response withing a few days, please send an email at 'Enter Email@email.email' with your order ID.")) {
                                history.push('/store');
                            }
                        },
                        200: function (data) {
                            console.log("sent successfully");
                            if (window.confirm("Order has been submitted. Your order ID is " + id + " If you do not hear a response withing a few days, please send an email at 'Enter Email@email.email' with your order ID.")) {
                                history.push('/store');
                            }
                        },
                        403: function (data) {
                            console.log("Problem");
                        }
                    }
                })
                */
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
                                    <input type="text" id="name" className="form-control" value={name} onChange={(e) => { setName(e.target.value) }} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="email" className="col-sm-6 col-form-label d-flex justify-content-center">Email: </label>
                                <div className="col-sm-6">
                                    <input type="text" id="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <button className="btn btn-outline-secondary" onClick={() => { sendInfo("request") }}>Send Information</button>
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
                                        <label htmlFor="name2" className="col-sm-6 col-form-label d-flex justify-content-center">Name: </label>
                                        <div className="col-sm-6">
                                            <input type="text" id="name2" className="form-control" value={name2} onChange={(e) => { setName2(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="email2" className="col-sm-6 col-form-label d-flex justify-content-center">Email: </label>
                                        <div className="col-sm-6">
                                            <input type="text" id="email2" className="form-control" value={email2} onChange={(e) => { setEmail2(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div className="row d-flex justify-content-center">
                                        <button className="btn btn-outline-secondary" onClick={() => { sendInfo("send") }}>Send Information</button>
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