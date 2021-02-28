import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Login = (props) => {

    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const updateValue = (e) => {
        //console.log(e.target.id + ' - ' + e.target.value);
        setUser({ ...user, [e.target.id]: e.target.value });
    }

    const login = (e) => {
        fetch("http://localhost:5000/login", {
            method: "post",
            credentials: "include",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status == 1) {
                    window.location.replace("#/admin");
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Unauthorized',
                        text: 'The username and/or password is incorrect.',
                        showCloseButton: true
                    });
                }
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="offset">
            <div className="row mt-5">
                <div className="col">
                    <div className="d-flex justify-content-center">
                        <div className="card flex-md-row card-item" style={{ width: "40rem" }}>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Login</h5>
                                <div className="form-group row">
                                    <label htmlFor="username" className="col-sm-6 col-form-label card-text">Username:</label>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control" id="username" value={user.username} onChange={updateValue} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="password" className="col-sm-6 col-form-label card-text">Password:</label>
                                    <div className="col-sm-6">
                                        <input type="password" className="form-control" id="password" value={user.password} onChange={updateValue} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <div className="btn btn-outline-success" style={{ width: "10rem" }} onClick={login}>Login</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;