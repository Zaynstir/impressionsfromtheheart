import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import * as $ from 'jquery';
import * as dt from 'datatables.net';

const WPWDonations = () => {

    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        //$('#ordertable').DataTable();
        fetch("http://localhost:5000/admin/wpwdonations", {
            method: "get",
            credentials: "include",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                if (data.status == 1) {
                    console.log(data);
                    setTableData(data.result);
                    $('#ordertable').DataTable();
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

    return (
        <div>
            <div className="pl-5 pr-5 table-responsive">
                <table className="table table-striped table-bordered" id="ordertable">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">ID #</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody id="tbody">
                        {
                            tableData.map((r) => (

                                <tr>
                                    <th scope="row">{r.id}</th>
                                    <td>{r.name}</td>
                                    <td>{r.email}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default WPWDonations;