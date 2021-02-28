import React, { useState, useEffect } from 'react';
import * as $ from 'jquery';
import * as dt from 'datatables.net';
import Swal from 'sweetalert2';
import { data } from 'jquery';

const Orders = (props) => {

    const [tableData, setTableData] = useState([]);
    const [item, setItem] = useState({
        name: "",
        orderid: -1,
        email: "",
        phone: "",
        items: []
    });

    useEffect(() => {

        fetch("http://localhost:5000/admin/orders", {
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

    const getData = () => {

    }

    const expandItems = () => {
        let ray = [];
        let price = 0;
        for (let i = 0; i < item.items.length; i++) {
            price += item.items[i].details.price;
            ray.push(
                <div key={i} className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <h5>Item - {item.items[i].id || -1}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                Type: {item.items[i].name || "Error: No Text Entered"}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                Custom Text: {item.items[i].details.customText || "Error: No Text Entered"}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                Quantity: {item.items[i].details.quantity || "Error: No Text Entered"}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                Shipping Address: {item.items[i].details.shippingAddress || "Error: No Text Entered"}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                Price: {item.items[i].details.price || 0}
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            )
            //console.log(item.items[i]);
        }
        ray.push(
            <div key="prices" className="row">
                <div className="col">
                    Total Price: {price}
                </div>
            </div>
        )

        return ray;

    }

    return (
        <div>
            <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">{item.name} - {item.email} - {item.orderid}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            {
                                expandItems()
                            }
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pl-5 pr-5 table-responsive">
                <table className="table table-striped table-bordered" id="ordertable">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Order #</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Items</th>
                        </tr>
                    </thead>
                    <tbody id="tbody">
                        {
                            tableData.map((r) => (

                                <tr>
                                    <th scope="row">{r.orderid}</th>
                                    <td>{r.name}</td>
                                    <td>{r.email}</td>
                                    <td>{r.phone}</td>
                                    <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong" onClick={(e) => { setItem(r) }}>Expand Details</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default Orders;