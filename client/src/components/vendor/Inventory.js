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
        Object.keys(inventory.children).forEach((value, index) => {

            output.push(
                <Item key={inventory.children[value].id} details={inventory.children[value]} />
            )
        })
        return output;
    }

    return (
        <div>
            {
                Object.keys(inventory) == 0 ? <div>Data Loading...</div> : displayData()
            }
        </div>
    );
}

export default Inventory;