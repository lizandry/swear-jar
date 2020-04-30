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
const key = fs.readFileSync('./cert.key');
const cert = fs.readFileSync('./cert.crt');

const app = express();
app.get('/', function (req, res) {
    res.send('hello world!!!!');
    });

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// user authorization config
const config = {
  required: false,
  auth0Logout: true,
  appSession: {
    secret: process.env.AUTH0_CLIENT_SECRET
  },
  baseURL: 'http://localhost:5000',
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: process.env.AUTH0_DOMAIN
};
// app.use(auth(config)); 
// app.use('/', (req, res) => {
//     res.send(req.isAuthenticated() ? 'Logged in' : 'Logged out');
//   });
// app.use(function (req, res, next) {
//     res.locals.user = req.openid.user;
//     next(err);
// });

// app.use('/', router);

// forward 404s to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send({ error: err })
});
// TODO can't get https working, using mkcert. "mkcert localhost" doesn't create .pem files
// https.createServer({key, cert}, app)
//   .listen(port, () => {
//     console.log(`Listening on ${config.baseURL}`);
//   });

app.listen(port, function () {
    console.log(`find me on port ${port}!`);
    });
