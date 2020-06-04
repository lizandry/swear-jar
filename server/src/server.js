require('dotenv').config()
const dotenv = require('dotenv');
const express = require('express');
const https = require('https');
const logger = require('morgan');
const path = require('path');
const router = require('./routes/index');
const fs = require('fs');
const port = process.env.PORT || '5000';
const { auth } = require('express-openid-connect');
// const config = require('./routes/auth')
const key = fs.readFileSync('./localhost-key.pem');
const cert = fs.readFileSync('./localhost.pem');

const app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());


// REFACTOR put this somewhere tidier
// user authorization config
const config = {
  required: false,
  auth0Logout: true,
  appSession: {
    secret: process.env.AUTH0_CLIENT_SECRET
  },
  baseURL: 'https://localhost:5000/',
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: process.env.AUTH0_DOMAIN
};

// REFACTOR i don't want user auth on the server. but the code isn't hurting anyone, it's just not very clean
app.use(auth(config)); 
app.use('/', router);
app.use('/', (req, res) => {
    res.send(req.isAuthenticated() ? 'Logged in' : 'Logged out');
  });


https.createServer({key, cert}, app)
.listen(port, () => {
    console.log(`Listening on ${config.baseURL}`);
});



// app.use(function (req, res, next) {
//     res.locals.user = req.openid.user;
//     next(req);
// });
