import react, { useEffect, useState } from 'react';
import Item from './Item';

const Inventory = () => {

    const [inventory, setInventory] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/store/inventory')
            .then(res => res.json())
            .then(data => setInventory(data))
            .catch(err => console.error(err));
    }, [])

    const displayData = () => {
        if (inventory.status != 1) {
            return <div>Error Loading Data. Server is possibly down.</div>;
        }
        let output = [];
        let colSize = 4;
        /*if (Object.keys(inventory.children).length % 3 == 0 || (Object.keys(inventory.children).length % 3 <= Object.keys(inventory.children).length % 4)) {
            colSize = 4;
        }
        else if (Object.keys(inventory.children).length % 4 == 0 || (Object.keys(inventory.children).length % 4 < Object.keys(inventory.children).length % 3)) {
            colSize = 3;
        }*/
        Object.keys(inventory.children).forEach((value, index) => {

            output.push(
                <div key={inventory.children[value].id} className={"col-lg-" + colSize}>
                    <Item details={inventory.children[value]} />
                </div>
            )
        })
        return output;
    }

    return (
        <div>
            <div className="row">
                {
                    Object.keys(inventory) == 0 ? <div className="col d-flex justify-content-center"><h1>Data Loading...</h1></div> : displayData()
                }
            </div>
        </div>
    );
}

export default Inventory;