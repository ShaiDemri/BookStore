import express from 'express';
import cors from 'cors';
import errorHandler from './errorHandler/index.mjs';
import bodyParser from 'body-parser';
import booksRouter from './router/booksRoute.mjs';

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204,
}
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(bodyParser.json());
app.use('/books', booksRouter);
app.use(errorHandler);

export {app};