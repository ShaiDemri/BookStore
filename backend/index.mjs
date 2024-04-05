import express from 'express';
import {app} from './app.mjs'
import errorHandler from './errorHandler/index.mjs';
import bodyParser from 'body-parser';
import booksRouter from './router/booksRoute.mjs';
// import userRouter from './router/userRoute';

const PORT = 5001;
app.listen(PORT,()=>{ console.log(`Server started at port ${PORT}`)});

export {app};