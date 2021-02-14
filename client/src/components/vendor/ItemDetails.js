import react, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'

import { UserCart } from '../../contexts/UserCart';

const ItemDetails = ({ match }) => {

    const [item, setItem] = useState({});

    const { addToCart } = useContext(UserCart);

    useEffect(() => {
        fetch(`http://localhost:5000/store/inventory/${match.params.id}`)
            .then(res => res.json())
            .then(data => setItem(data))
            .catch(err => console.error(err));
    }, [])

    const validate = () => {
        //addToCart(item.children)
        window.location.replace("#/cart");
    }

    const displayData = () => {
        if (item.status != 1) {
            return <div>Error Loading Data. Server is possibly down.</div>;
        }
        return <div>{item.children[Object.keys(item.children)[0]].name}</div>
    }

    return (
        <div>
            {
                Object.keys(item) == 0 ? (
                    <div>Data Loading...</div>
                ) : (
                        <div>
                            <h1>{item.children[Object.keys(item.children)[0]].name}</h1>
                            <h2>{item.children[Object.keys(item.children)[0]].baseprice}</h2>
                            <hr />

                            <button onClick={validate}>thing</button>
                        </div>
                    )
            }
        </div>
    );
}

export default ItemDetails;