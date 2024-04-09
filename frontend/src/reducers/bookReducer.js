import {bookActionTypes} from '../actionTypes/bookActionTypes'
const bookReducer = (state, action) => {
    switch (action.type) {
        case bookActionTypes.STACK_BOOKS:
            return {...state, books: action.books, fetching: false};
        case bookActionTypes.FETCHING_BOOKS:
            return {...state, fetching: action.fetching};
        case bookActionTypes.ADD_BOOK:
            return {...state, books: state.books.concat(action.books)}
        case bookActionTypes.REMOVE_BOOK:
            const bookToDelete = state.books.findIndex((book) => book.id === action.books.id);
            state.books.splice(bookToDelete, 1);
            return {...state, fetching: false}
        default:
            return state;
    }
};
export {bookReducer};