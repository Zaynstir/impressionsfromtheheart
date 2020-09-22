import React, { useState, useContext } from 'react';
import { Inventory } from '../../contexts/Inventory'

const Search = () => {

    const { updateFilter } = useContext(Inventory);
    const [search, setSearch] = useState("");

    return (
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" value={search} onChange={(e) => (setSearch(e.target.value))} />
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" onClick={() => (updateFilter([0, search]))} >Button</button>
            </div>
        </div>
    );
}

export default Search;