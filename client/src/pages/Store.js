import react from 'react';
import Inventory from '../components/vendor/Inventory';


const Store = () => {
    return (
        <div className="offset">
            <div className="row pb-2">
                <div className="col">
                    <div className="store-title">
                        <h1>Stamped Jewelry</h1>
                    </div>
                    <div className="cart-icon" onClick={() => { window.location.replace('#/Cart') }} >
                        <i className="fas fa-shopping-cart" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Inventory />
                </div>
            </div>
        </div>
    );
}

export default Store;