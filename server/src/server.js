require('dotenv').config()
const express = require('express');
const logger = require('morgan');
const path = require('path');
const router = require('./routes/index');
const port = process.env.PORT || '5000';

const app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/', router);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
