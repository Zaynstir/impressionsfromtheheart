import react from 'react';
import { Link } from 'react-router-dom'
import CLink from '../CLink'


const Item = (props) => {

    const onClick = (e) => {
        console.log(props.details)
        window.location.replace(`#/store/item/${props.details.id}`);
    }

    return (
        <div className="row pb-3">
            <div className="col d-flex justify-content-center">
                <div className="card card-store" onClick={onClick} style={{ width: "18rem" }}>
                    <img className="card-img-top" src={require("../../img/apple-shadow.png")} alt={"Image of a " + props.details.name} />
                    <div className="card-body">
                        <h5 className="card-title">{props.details.name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <label className="cart-text float-left">Base Price:</label>
                            <label className="card-text float-right">${props.details.baseprice}</label>
                        </div>
                        <div className="btn btn-block btn-outline-secondary">Customize Details</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;