import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
//import { InventoryContext } from '../../contexts/InventoryContext'
//import { UserContext } from '../../contexts/UserContext'

//import '../../assets/style.css';

const Item = (props) => {

    const [selected, setSelected] = useState(false);
    //const { cart, addToCart, removeFromCart } = useContext(UserContext);

    return (
        <div>
            <div className="card card-store text-center" >

                <img class="card-img-top" src={require("../../img/apple-shadow.png")} alt="Card image cap" />
                <div class="card-body">
                    <Link tag={"div"} to={`/store/${props.i.name}`}><h5 class="card-title">{props.i.name}</h5></Link>
                    <p class="card-text">${props.i.price}</p>
                </div>
            </div>
        </div>
    );

    return (
        {/*}

        <div className={"item-div col-4 col"} onClick={() => { if (!selected) { addToCart(props.name) } else { removeFromCart(props.name) } setSelected(!selected); }}>
            <div className={(selected ? "item-selected" : "")}>
                <label className="item-name">{props.name['name']}</label>
                <br></br>
                <label className="item-price">{"$" + props.name['price']}</label>
            </div>
    </div >*/}
    );
}

export default Item;