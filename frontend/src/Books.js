import React, {useReducer} from "react";
import {
    Grid,
    Fab
} from "@material-ui/core/";
import {makeStyles} from "@material-ui/core/styles";
import AddIcon from '@material-ui/icons/Add';
import ProgressCircle from './ProgressCircle';
import {useFetchBooks} from "./hooks";
import BookCard from "./BookCard";
import {bookReducer} from './reducers/bookReducer';
import defaultImage from './assets/img.png';
import AddBookDialog from './AddBookDialog';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    fab: {
        margin: '3rem',
        top: 'auto',
        left: 'auto',
        bottom: 20,
        right: 20,
        position: 'fixed',
    },

});

const Books = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [bookData, bookDispatch] = useReducer(bookReducer, {
            books: [],
            fetching: false,
        },
        () => {return {books: [], fetching: false}});
    useFetchBooks(0, bookDispatch);

    return (
        <>
            <Grid id="books" container direction="row" spacing={2}>
                {bookData.books.map((book, index) => {
                    return (
                        <Grid key={index} item xs={3}>
                            <BookCard
                                key={book.id}
                                book={book}
                                bookDispatch={bookDispatch}
                            />
                        </Grid>
                    );
                })}
            </Grid>
            <ProgressCircle isFetching={bookData.fetching}/>
            <Fab className={classes.fab} color="primary" aria-label="add" onClick={handleClickOpen}>
                <AddIcon/>
            </Fab>
            <AddBookDialog open={open} handleClose={handleClose} bookDispatch={bookDispatch}/>
        </>
    );
};

export default Books;
