import React, { useState, useContext } from 'react';
import $ from 'jquery'

import { User } from '../../contexts/User'
import { useHistory } from 'react-router-dom'


const Checkout = (props) => {

    const history = useHistory();

    const [form, setForm] = useState({ "name": "", "email": "" });
    const [error, setError] = useState("");
    const { cart } = useContext(User);

    const updateForm = (input) => {
        let a = { ...form }
        a[input.name] = input.value;
        setForm(a);
    }

    const validateForm = () => {
        let flag = false;
        if (form['name'] === "") {
            flag = true;
            setError("Name is required.");
        }
        else if (form['email'] === "") {
            flag = true;
            setError("Email is required.");
        }
        if (flag) {
            alert("There was an error.")
        } else {
            let id = Math.floor(Math.random() * 100000)
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
        }
    }
    return (
        <div className="">
            {//<input name="input" value={form["input"]} onChange={(e) => { console.log(e.target); setForm({ "input": e.target.value }) }} />
            }
            <div className="row justify-content-center">
                <div className="col-4" style={{ padding: "10px 10px 10px 10px" }}>
                    <div className={"row " + (error === "" ? "d-none" : "")} >
                        <div className="col-12">
                            <label style={{ "color": "red" }}>{error}</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-end">
                            <label>Name<label style={{ "color": "red" }}>*</label></label>
                        </div>
                        <div className="col-md-6">
                            <input type="text" name="name" value={form["name"]} onChange={(e) => { updateForm(e.target) }} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-end">
                            <label>Email<label style={{ "color": "red" }}>*</label></label>
                        </div>
                        <div className="col-md-6">
                            <input type="text" name="email" value={form["email"]} onChange={(e) => { updateForm(e.target) }} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-end">
                            <label>Additional Comment(s)</label>
                        </div>
                        <div className="col-md-6">
                            <input type="text" name="comment" value={form["comment"]} onChange={(e) => { updateForm(e.target) }} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <label style={{ "color": "red" }}>*required</label>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <button className="btn btn-primary" onClick={() => validateForm()} >Submit Order</button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Checkout;