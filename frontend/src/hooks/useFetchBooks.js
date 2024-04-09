// make API calls and pass the returned data via dispatch
import {useEffect} from "react";
import baseURL from './index';
import {bookActionTypes} from '../actionTypes/bookActionTypes';

let myHeaders = new Headers();
let requestOptions = {
    headers: myHeaders,
};

export const useFetchBooks = (data, dispatch) => {
    useEffect(() => {
        dispatch({type: bookActionTypes.FETCHING_BOOKS, fetching: true});
        const req = new Request(`${baseURL}/books/list`,{headers: requestOptions});
        fetch(req)
            .then((data) => data.json()
            )
            .then((books) => {
                const items = books.data;
                dispatch({type: bookActionTypes.STACK_BOOKS, books: items});
            })
            .catch((e) => {
                // handle error
                dispatch({type: bookActionTypes.FETCHING_BOOKS, fetching: false});
                return e;
            });
    }, [dispatch, data.page]);
};