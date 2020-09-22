import React, { createContext, useState } from 'react';
import * as data from '../items.json'

export const Inventory = createContext();
const InventoryProvider = (props) => {

    /*
    0 - search
    1 - sort
    2 - price
    3 - type
    */

    const [inv, setInv] = useState(data['default'])
    //const [search, setSearch] = useState();
    const [filters, setFilters] = useState([
        "",
        0,
        [0.00, 9999.99],
        [1, 1, 1]
    ])
    /*
        const resetInv = () => {
            setInv(data.default)
        }
    */
    const updateFilter = (filter) => {
        let ray = [...filters]
        if (filter[0] === 2) {
            if (filter[1][0] === "") {
                filter[1][0] = "0.00";
            }
            if (filter[1][1] === "") {
                filter[1][1] = "9999.99";
            }
            filter[1][0] = parseInt(filter[1][0]);
            filter[1][1] = parseInt(filter[1][1]);
        }
        if (filter[0] === 3) {
            if (filter[1] === [0, 0, 0]) {
                filter[1] = [1, 1, 1];
            }
        }


        ray[filter[0]] = filter[1];
        setFilters(ray);
        runFilters();
    }

    const runFilters = () => {
        let ray = data.default;
        //Search
        ray = ray.filter(i => i.name.indexOf(filters[0]) >= 0);

        //Price
        ray = ray.filter(i => (filters[2][0] <= i['price'] && i['price'] <= filters[2][1]));

        //Type
        ray = ray.filter(i => (
            typeHelper(i.product)
        ))


        //Dropdown
        /*
        Relevence
        Name: A-to-Z
        Name: Z-to-A
        Price: High-to-Low
        Price: Low-to-High
        */
        //let tempRay = [...ray];
        if (filters[1] === 0) {
            //idk
        }
        else if (filters[1] === 1) {
            ray.sort(function (a, b) {
                var textA = a.name.toUpperCase();
                var textB = b.name.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
        }
        else if (filters[1] === 2) {
            ray.sort(function (a, b) {
                var textA = a.name.toUpperCase();
                var textB = b.name.toUpperCase();
                return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
            });
        }
        else if (filters[1] === 3) {
            ray.sort(function (a, b) {
                var textA = a.price;
                var textB = b.price;
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
        }
        else if (filters[1] === 4) {
            ray.sort(function (a, b) {
                var textA = a.price;
                var textB = b.price;
                return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
            });
        }
        setInv(ray);
    }

    const typeHelper = (type) => {
        let intType = -1;
        switch (type) {
            case "bracelet":
                intType = 0;
                break;
            case "necklace":
                intType = 1;
                break;
            case "keychain":
                intType = 2;
                break;
        }
        if (intType = -1) {
            alert("Something is Wrong");
        } else {
            if (filters[3][intType] === 1) {
                return true;
            }
            else {
                return false;
            }
        }

    }

    const findItem = (item) => {
        for (let i = 0; i < data['default'].length; i++) {
            if (data['default'][i]['name'] === item) {
                return data['default'][i]
            }
        }
        return -1;
    }

    return (
        <Inventory.Provider value={{ inv, setInv, findItem, updateFilter }}>
            {props.children}
        </Inventory.Provider>
    );
}



export default InventoryProvider;