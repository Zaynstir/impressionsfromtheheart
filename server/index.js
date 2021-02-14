const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const { Client, Pool } = require('pg');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:3000'
}));

/*const client = new Client({
    connectionString: process.env.DB_URI,
    ssl: {
        rejectUnauthorized: false
    }
});*/
const pool = new Pool({
    connectionString: process.env.DB_URI,
    ssl: {
        rejectUnauthorized: false
    }
})

//Body Parser
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    let ray = { col1: "val1", col2: "val2" }
    res.json(ray);
});

app.get('/store/inventory', (req, res) => {
    let baseRay = {
        status: -1,
        children: {}
    }
    pool.query("select * from public.inventory")
        .then(response => {
            baseRay.status = 1;
            for (let i = 0; i < response.rows.length; i++) {
                baseRay.children[response.rows[i]["name"]] = {
                    id: response.rows[i]["itemid"],
                    name: response.rows[i]["name"],
                    baseprice: response.rows[i]["baseprice"]
                }
            }
            res.json(baseRay);
        })
        .catch(err => {
            console.error(err);
            res.json(baseRay)
        })
})

app.get('/store/inventory/:itemid', (req, res) => {
    let id = req.params.itemid;
    let baseRay = {
        status: -1,
        children: {}
    }
    pool.query("select * from public.inventory where itemid = $1", [id])
        .then(response => {
            baseRay.status = 1;
            baseRay.children[response.rows[0]["name"]] = {
                id: response.rows[0]["itemid"],
                name: response.rows[0]["name"],
                baseprice: response.rows[0]["baseprice"]
            }
            res.json(baseRay);
        })
        .catch(err => {
            console.error(err);
            res.json({ status: -1 })
        })
})

app.post('/store/insertOrder', (req, res) => {

})

app.post('/wpw/insertRequest', (req, res) => {

})

app.post('/wpw/insertDonation', (req, res) => {

})




app.listen(port, () => console.log(`Server started on port ${port}`));