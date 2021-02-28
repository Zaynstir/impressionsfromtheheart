const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require("body-parser")
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const bcrypt = require('bcrypt');
const { Client, Pool } = require('pg');
const nodemailer = require('nodemailer');

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

/*const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.google.com',
    auth: {
        user: 'codingspasms@gmail.com',
        pass: process.env.emailPass
    },
    secure: true
})*/


/*const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'josh.gutkowski@ethereal.email',
        pass: 'Nnp9QWhDfMnrwJvuZY'
    }
});*/
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'codingspasms@gmail.com',
        pass: 'Inap4Code!'
    }
});

const mail = async (to, subj, msg) => {

    var mailOptions = {
        from: 'contact@impressionsfromtheheart.com',
        to: to,
        subject: subj,
        html: msg
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            //console.log(error);
            return -1;
        } else {
            //console.log('Email sent: ' + info.response);
            return 1;
        }
    });

}

const accessTokenSecret = process.env.jwtToken;
const refreshTokens = [];

//Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/mail', async (req, res) => {
    /*let userCart = [{ "name": "Bracelet", "id": 1, "baseprice": 10, "details": { "quantity": 1, "customText": "test", "shipAddress": "addr", "price": 10 } }, { "id": 2, "name": "Necklace", "baseprice": 15, "details": { "quantity": "3", "customText": "ewaf", "shipAddress": "aaaa", "price": 45 } }];
    let ray = [
        'John Doe',
        'codingspasms@gmail.com',
        userCart,
        '1234567890'
    ]

    let html = "<hr>";

    userCart.forEach(val => {
        html += "";
    })*/

    let result = await mail('codingspasms@gmail.com', 'b', 'c')

    if (result == 1) {

    }
    /*
    //mail('codingspasms@gmail.com', 1)
    const mailData = {
        from: 'josh.gutkowski@ethereal.email',
        to: 'codingspasms@gmail.com',
        subject: 'Test',
        text: 'idk what this is for',
        html: '<b>lmao</b> more <i>shit</i>'
    };

    let k = await transporter.sendMail(mailData, (error, info) => {
        if (error) {
            //return { status: -1, err: error }
            console.log(error)
        }
        res.json(info)
        //return { status: 1 };
        //res.status(200).send({ status: 1 });
    })*/
    /*.then(response => console.log(response))
        .then(data => {
            if (data.status == 1) {
                res.send('test')
            }
            else if (data.status == -1) {
                console.error(data.err);
                res.send('error');
            }
        })
        .catch(err => {
            console.error(err);
        })*/
    res.sendStatus(200);
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    //update to pull from Database instead of json array
    //const user = users.find(u => { return u.username === username && u.password === password });

    pool.query("select password, role from public.users where username = $1", [username])
        .then(async response => {

            if (response.rows.length == 0) {
                res.json({ "status": -1 })
            }
            const validPassword = await bcrypt.compare(password, response.rows[0]['password']);

            if (validPassword) {
                const accessToken = jwt.sign({ username: username, role: response.rows[0]['role'] }, accessTokenSecret, { expiresIn: '20m' });
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
                res.json({ status: -1 })
            }
        })
        .catch(err => {
            console.error(err);
            res.json({ "status": -1 });
        })



    /*if (user) {
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
    }*/
})

app.post('/genhash', async (req, res) => {
    const { password } = req.body;
    const salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password, salt)
    res.json({ result: hash });
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

app.get('/admin/wpwrequests', authenticateJWT, (req, res) => {
    const { role } = req.user;

    if (role != 'admin') {
        return res.sendStatus(403);
    }
    let ray = {
        status: -1,
        result: {}
    };
    pool.query("select * from public.wpwrequests")
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

app.get('/admin/wpwdonations', authenticateJWT, (req, res) => {
    const { role } = req.user;

    if (role != 'admin') {
        return res.sendStatus(403);
    }
    let ray = {
        status: -1,
        result: {}
    };
    pool.query("select * from public.wpwdonations")
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

/*app.get('/*', (req, res) => {
    let ray = { col1: "val1", col2: "val2" }
    //res.json(ray);
    res.status(404);
});*/

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
    //console.log(data.userDetails.name);
    let dataRay = [
        data.userDetails.name,
        data.userDetails.email,
        JSON.stringify(data.userCart),
        data.userDetails.phone
    ];
    let newID = -1;
    pool.query("insert into public.orders (name, email, items, phone) VALUES ($1, $2, $3, $4) returning orderid", dataRay)
        .then(async response => {
            newID = response.rows[0]['orderid'];
            let html = `<p>Hello ${dataRay[0]}!</p><p>Thank you for purchasing an item from the Impressions from the Heart web store.</p><p>If you need to reach us specifically regarding your order, please use the following so that we can keep track of your order</p><p>${newID}</p><p>Thank you,<br>Anita<p>`;
            let result = await mail(dataRay[1], 'You just submitted a order for Impressionsfromtheheart.com', html)
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