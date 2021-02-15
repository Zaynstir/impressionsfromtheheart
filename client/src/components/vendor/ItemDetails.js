import react, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import defaultIMG from '../../img/apple-shadow.png'

import { UserCart } from '../../contexts/UserCart';

const ItemDetails = ({ match }) => {

    const [item, setItem] = useState({});
    const [details, setDetails] = useState({
        quantity: 1,
        customText: "",
        shipAddress: "",
        price: 0
    });

    const { addToCart } = useContext(UserCart);

    useEffect(() => {
        fetch(`http://localhost:5000/store/inventory/${match.params.id}`)
            .then(res => res.json())
            .then(data => { setItem(data); setDetails({ ...details, price: data.children[Object.keys(data.children)[0]].baseprice }) })
            .catch(err => console.error(err));
    }, [])

    const updateValue = (e) => {
        if (e.target.type == "text") {
            //injection protection
            setDetails({ ...details, [e.target.id]: e.target.value });
        }
        else if (e.target.type == "number") {
            //injection again lol
            if (e.target.id == "quantity") {
                let newPrice = item.children[Object.keys(item.children)[0]].baseprice * e.target.value;
                setDetails({ ...details, [e.target.id]: e.target.value, price: newPrice });
            }
            else {
                setDetails({ ...details, [e.target.id]: e.target.value });
            }
        }
    }

    const validate = () => {
        let itemObj = item.children[Object.keys(item.children)[0]];
        itemObj['details'] = details;
        addToCart(itemObj);
        window.location.replace("#/cart");
    }

    const displayData = () => {
        if (item.status != 1) {
            return <div>Error Loading Data. Server is possibly down.</div>;
        }
        return <div>{item.children[Object.keys(item.children)[0]]}</div>
    }

    return (
        <div className="offset">
            <div className="row pb-2">
                <div className="col">
                    <div className="store-title">
                        <h1></h1>
                    </div>
                    <div className="cart-icon" onClick={() => { window.location.replace('#/Cart') }} >
                        <i className="fas fa-shopping-cart" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            {
                Object.keys(item) == 0 ? (
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <h1>Data Loading...</h1>
                        </div>
                    </div>
                ) : (
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <div className="col  ">
                                        <div className="d-flex justify-content-center">
                                            <div className="card flex-md-row card-item" style={{ width: "40rem" }}>
                                                <img className="card-img-left d-flex align-self-center flex-auto align-center" src={defaultIMG} width="250px" height="250px" alt={"Image of a "} />
                                                <div className="card-body d-flex flex-column">
                                                    <h5 className="card-title">{item.children[Object.keys(item.children)[0]].name}</h5>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <div className="form-group row">
                                                        <label htmlFor="quantity" className="col-sm-6 col-form-label card-text">Quantity:</label>
                                                        <div className="col-sm-6">
                                                            <input type="number" min="1" className="form-control" id="quantity" value={details.quantity} onChange={updateValue} />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="customText" className="col-sm-6 col-form-label card-text">Custom Text:</label>
                                                        <div className="col-sm-6">
                                                            <input type="text" className="form-control" id="customText" value={details.customText} onChange={updateValue} />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="shipAddress" className="col-sm-6 col-form-label card-text">Shipping Address:</label>
                                                        <div className="col-sm-6">
                                                            <input type="text" className="form-control" id="shipAddress" value={details.shipAddress} onChange={updateValue} />
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <label className="cart-text float-left">Price:</label>
                                                        <label className="card-text float-right">${details.price}</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col d-flex justify-content-center">

                                                <div className="btn btn-outline-danger mr-5" style={{ width: "10rem" }} onClick={(e) => { window.location.replace("#/store") }}>Back to Store</div>
                                                <div className="btn btn-outline-success" style={{ width: "10rem" }} onClick={validate}>Add to Cart</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            }
        </div>
    );
}

export default ItemDetails;