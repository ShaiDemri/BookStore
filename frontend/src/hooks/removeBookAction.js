import baseURL from './index';
import {bookActionTypes} from '../actionTypes/bookActionTypes';
// make API calls and pass the returned data via dispatch

let myHeaders = new Headers();
// myHeaders.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');

export const removeBookAction = async (data, dispatch) => {

    try {
        dispatch({type: bookActionTypes.FETCHING_BOOKS, fetching: true});
        const req = new Request(`${baseURL}/books/delete/${data}`, {
            method: "DELETE",
            headers: myHeaders,
        });
        const resData = await fetch(req);
        const books = await resData.json();

        const [items] = books.data;
        dispatch({type: bookActionTypes.REMOVE_BOOK, books: items});
    } catch (e) {
        // handle error
        dispatch({type: bookActionTypes.FETCHING_BOOKS, fetching: false});
        return e;
    }
};