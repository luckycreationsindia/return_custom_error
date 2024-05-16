const express = require('express');
const logger = require('morgan');

const app = express();
const ERROR_CODE = 401;
const ERROR_MESSAGE = 'Unauthorized';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', (req, res) => {
    return res.status(ERROR_CODE).json({
        message: ERROR_MESSAGE
    });
});

module.exports = app;
