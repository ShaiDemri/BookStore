import express from 'express';
import {list, create, remove, getById} from '../controller/booksController.mjs';
import {validateBook} from '../middelwares/validatetor.mjs';

const router = express.Router();

//Returns books inventory
router.get('/list', list);
// get book details
router.get('/get/:id', getById);
// create new book
router.post('/create', validateBook, create);
// delete book
router.delete('/delete/:id', remove);

export default router;