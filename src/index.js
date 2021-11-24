require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');
require('express-async-errors');

const routes = require('./routes');
const cors = require('./middlewares/cors');
const errorHandler = require('./middlewares/errorHandler');

require('./database');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors);

app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')),
);

app.use(routes);
app.use(errorHandler);

app.listen(process.env.APP_PORT, () => console.log(`API started at ${process.env.APP_URL}:${process.env.APP_PORT}`));
