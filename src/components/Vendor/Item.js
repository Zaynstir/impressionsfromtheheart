import React from 'react';
import CLink from '../CLink'
//import ReactDOM from 'react-dom';
//import { Link } from 'react-router-dom'
//import { InventoryContext } from '../../contexts/InventoryContext'
//import { UserContext } from '../../contexts/UserContext'

//import '../../assets/style.css';

const Item = (props) => {

    //const [selected, setSelected] = useState(false);
    //const { cart, addToCart, removeFromCart } = useContext(UserContext);

    return (
        <div>
            <CLink tag={"div"} to={`/store/${props.i}`}>
                <div className="card card-store text-center" >

                    <img className="card-img-top" src={require("../../img/apple-shadow.png")} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{props.i}</h5>
                        <p className="card-text">$10.00</p>
                    </div>
                </div>
            </CLink>
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