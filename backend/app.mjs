import express from 'express';
import errorHandler from './errorHandler/index.mjs';
import bodyParser from 'body-parser';
import booksRouter from './router/booksRoute.mjs';

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:5000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());
app.use('/books', booksRouter);

app.use(errorHandler);

export {app};