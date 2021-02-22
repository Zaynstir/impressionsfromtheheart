import React, { useState, useEffect } from 'react';

const Admin = () => {
    return (
        <div className="offset">

            <div className="row mt-5">
                <div className="col d-flex justify-content-center">
                    <div className="btn btn-outline-secondary btn-block" onClick={window.location.replace("http://localhost:5000/Admin")}></div>
                </div>
            </div>
        </div>
    );
}

export default Admin;