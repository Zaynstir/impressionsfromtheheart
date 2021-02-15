import react, { useContext } from 'react';
import DisplayCart from '../components/shoppingcart/DisplayCart';
import { UserCart } from '../contexts/UserCart';



const Cart = () => {

    const { cart } = useContext(UserCart);

    const getTotal = () => {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].baseprice * cart[i].details.quantity;
        }
        return total;
    }

    return (
        <div className="offset">
            <div className="row mt-5">
                <div className="col-12">
                    <DisplayCart />
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">

                    <div className="flex-grow-1" style={{ maxWidth: "40rem" }}>
                        <div className="card-body">
                            <div className="float-left">
                                Total Price:
                        </div>
                            <div className="float-right">
                                ${getTotal()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col d-flex justify-content-center">
                    <div className="btn btn-outline-danger mr-5" style={{ width: "10rem" }} onClick={(e) => { window.location.replace("#/store") }}>Back to Store</div>
                    <div className="btn btn-outline-success" style={{ width: "15rem" }} onClick={(e) => { window.location.replace("#/Checkout") }}>Proceed To Checkout</div>
                </div>
            </div>
        </div>
    );
}

export default Cart;