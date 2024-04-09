import baseURL from './index';
import {bookActionTypes} from '../actionTypes/bookActionTypes';
// make API calls and pass the returned data via dispatch

let myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');

export const addBookAction = async (data, dispatch) => {
    console.log(data)
    const urlencoded = new URLSearchParams({title: data.title, description: data.description, author: data.author, publishDate: data.publicationDate})

    try {
        dispatch({type: bookActionTypes.FETCHING_BOOKS, fetching: true});
        const req = new Request(`${baseURL}/books/create`, {
            method: "POST",
            body: urlencoded,
            headers: myHeaders,
        });
        const resData = await fetch(req);
        const books = await resData.json();
        console.log(books)
        const items = books.data;
        dispatch({type: bookActionTypes.ADD_BOOK, books: items});
        dispatch({type: bookActionTypes.FETCHING_BOOKS, fetching: false});
    } catch (e) {
        // handle error
        dispatch({type: bookActionTypes.FETCHING_BOOKS, fetching: false});
        return e;
    }
};