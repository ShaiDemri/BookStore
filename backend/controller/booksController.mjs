import {list as listBook, create as createBook, getById as getByIdBook, remove as removeBook} from '../model/booksModel.mjs';
import {v4} from 'uuid';
const list = async function (req, res, next) {
    const books = listBook();
    return res.status(200).send({status: "OK", data: books});
};

const create = async function (req, res, next) {
    const body = req.body;
    const {title, description = "", author, publishDate} = body;
    const id = v4()

    createBook({id, title, description, author, publishDate})
    const msg = {status: "OK", data: {id, title, description, author, publishDate}}
    res.status(201).send(msg);
}

const getById = async function (req, res, next) {
    const bookIdToFetch = req.params.id;
    const book = getByIdBook(bookIdToFetch);
    if (!book) {
        const error = new Error("book not found")
        return next(error)
    }
    return res.status(200).send({status: "OK", data: book});

}

const remove = async function (req, res, next) {
    const bookIdToDelete = req.params.id;
    const deleted = removeBook(bookIdToDelete);
    if (deleted.length === 0) {
        const error = new Error("book not found")
        return next(error)
    }
    return res.status(200).send({status: "OK", data: deleted});

}

export {list, create, remove, getById};