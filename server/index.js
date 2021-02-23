const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require("body-parser")
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { Client, Pool } = require('pg');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(cookieParser());

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

//Temp Users
const users = [
    {
        username: "john",
        password: "pass",
        role: "admin"
    },
    {
        username: "bob",
        password: "user",
        role: "user"
    }
]



const accessTokenSecret = process.env.jwtToken;
const refreshTokens = [];

//Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    //update to pull from Database instead of json array
    const user = users.find(u => { return u.username === username && u.password === password });

    if (user) {
        const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret, { expiresIn: '20m' });
        //const refreshToken = jwt.sign({ username: user.username, role: user.role }, refreshTokenSecret);

        //refreshTokens.push(refreshToken);
        res.cookie("token", accessToken, {
            httpOnly: true
        });
        res.json({
            status: 1
            //,
            //refreshToken
        })
    }
    else {
        res.json({ "status": -1 })
    }
})

app.post('/token', (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.sendStatus(401);
    }

    if (!refreshTokens.includes(token)) {
        return res.sendStatus(403);
    }

    jwt.verify(token, refreshTokenSecret, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }

        const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret, { expiresIn: '20m' });

        res.json({
            accessToken
        })
    })
});

const authenticateJWT = (req, res, next) => {
    if (Object.keys(req.cookies).length > 0) {
        const auth = req.cookies.hasOwnProperty("token");

        if (auth) {
            //const token = authHeader.split(' ')[1];
            const token = req.cookies.token;
            jwt.verify(token, accessTokenSecret, (err, user) => {
                if (err) {
                    //console.log(err);
                    return res.sendStatus(403);
                }

                req.user = user;
                next();
            })
        }
        else {
            res.sendStatus(401);
        }

    }
    else {
        res.sendStatus(401);
    }
}

app.post('/logout', (req, res) => {
    //console.log(req.cookies);
    //const { token } = req.body;
    //refreshTokens = refreshTokens.filter(token => t !== token);

    res.send("Logout Successful");
})

app.get('/admin', authenticateJWT, (req, res) => {

    //console.log(req.cookies);
    //login to view of customer data
    // - orders, wpwrequests, wpwdonations
    //console.log(req.user);
    const { role } = req.user;

    if (role != 'admin') {
        return res.sendStatus(403);
    }
    let ray = {
        status: 1
    }
    res.json(ray);
});

app.get('/admin/orders', authenticateJWT, (req, res) => {
    const { role } = req.user;

    if (role != 'admin') {
        return res.sendStatus(403);
    }
    let ray = {
        status: -1,
        result: {}
    };
    pool.query("select * from public.orders")
        .then(response => {
            ray.status = 1;
            for (let i = 0; i < response.rows.length; i++) {
                ray.result = response.rows;
            }
            res.json(ray);
        })
        .catch(err => {
            console.error(err);
            res.json(ray);
        })
})

app.get('/admin/wpwrequests', (req, res) => {

})

app.get('/admin/wpwdonations', (req, res) => {

})

app.get('/admin/orders/data', (req, res) => {

})

app.get('/admin/wpwrequests/data', (req, res) => {

})

app.get('/admin/wpwdonations/data', (req, res) => {

})

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
    //console.log(JSON.parse(req.body))
    let data = req.body;
    console.log(data.userDetails.name);
    let dataRay = [
        data.userDetails.name,
        data.userDetails.email,
        JSON.stringify(data.userCart),
        data.userDetails.phone
    ];
    let newID = -1;
    pool.query("insert into public.orders (name, email, items, phone) VALUES ($1, $2, $3, $4) returning orderid", dataRay)
        .then(response => {
            newID = response.rows[0]['orderid'];
            res.send({ newID: newID });
        })
        .catch(err => {
            console.error(err);
            res.send({ newID: newID })
        })


})

app.post('/wpw/insertRequest', (req, res) => {
    let data = req.body;
    let flag = -1;
    pool.query("insert into public.wpwdonations (name, email) VALUES ($1, $2)", [data.name, data.email])
        .then(response => { flag = 1; })
        .catch(err => console.error(err));
    res.send({ flag: flag });
})

app.post('/wpw/insertDonation', (req, res) => {
    let data = req.body;
    let flag = -1;
    pool.query("insert into public.wpwrequests (name, email) VALUES ($1, $2)", [data.name, data.email])
        .then(response => { flag = 1; })
        .catch(err => console.error(err));
    res.send({ flag: flag });

})




app.listen(port, () => console.log(`Server started on port ${port}`));