import React, { useState, useEffect } from 'react';
import Orders from '../components/admin/Orders';

const Admin = () => {

    const [accessed, setAccessed] = useState(false);
    const [view, setView] = useState("Orders");

    useEffect(() => {
        fetch("http://localhost:5000/admin", {
            method: "get",
            credentials: "include",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.status == 1) {
                    setAccessed(true);
                }
                else {
                    window.location.replace("#/login")
                }
            })
            .catch(err => {
                console.error(err);
                window.location.replace("#/login");
            });
    }, [])

    const loadData = (e) => {
        let text = e.target.innerText;
        setView(text);
    }

    return (
        <div className="offset">

            <div className="row mt-5">
                <div className="col d-flex justify-content-center">
                    {
                        accessed ?
                            <div className="row">
                                <div className="col d-flex justify-content-center">
                                    <div className="btn btn-outline-primary mr-5" style={{ width: "10rem" }} onClick={loadData}>Orders</div>
                                    <div className="btn btn-outline-primary mr-5" style={{ width: "10rem" }} onClick={loadData}>WPW Requests</div>
                                    <div className="btn btn-outline-primary" style={{ width: "10rem" }} onClick={loadData}>WPW Donations</div>
                                </div>
                            </div>
                            : <h1>
                                You are not permitted to access this... so I don't know how you are viewing this lol.
                            </h1>
                    }
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    {
                        view === "Orders" ? <Orders /> : (
                            view === "WPW Requests" ? <div>wpw</div> :
                                view === "WPW Donations" ? <div>wpw2</div> : <div>DNE</div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Admin;