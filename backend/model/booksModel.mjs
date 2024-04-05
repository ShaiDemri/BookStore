import Books from '../booksStore.mjs';
const list = function () {
    return Books;
}

const create = function (data) {
    Books.push(data);
    return Books;
}

const remove = function (data) {
    const bookToDelete = Books.findIndex(({id})=>id===data);
    return Books.splice(bookToDelete, 1);
}

const getById = function (data) {
    return Books.find(({id}) => id === data);
}

export {list, create, remove, getById}