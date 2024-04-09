import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {addBookAction} from "./hooks";
import BookTextField from './BookTextField';


const DIALOG_NAME = "Add Book"
const DIALOG_HEADER = " To add a new book, please enter the book's title, description (optional), author name and publication Date.";
const AddBookDialog = ({open, handleClose, bookDispatch}) => {
    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const {title, description, author, publicationDate} = formJson;
                        addBookAction({title, description, author, publicationDate}, bookDispatch).then();
                        handleClose();
                    },
                }}
            >

                <DialogTitle>{DIALOG_NAME}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {DIALOG_HEADER}
                    </DialogContentText>
                    <BookTextField
                        key="title"
                        id="title"
                        name="title"
                        label="Book's title"
                    />
                    <BookTextField
                        key="description"
                        id="description"
                        name="description"
                        label="Book's description"
                    />
                    <BookTextField
                        key="author"
                        id="author"
                        name="author"
                        label="Book's author name"
                    />
                    <BookTextField
                        key="publicationDate"
                        id="publicationDate"
                        name="publicationDate"
                        label="Book's publication date"
                        type="date"
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>{handleClose(); console.log("close")}}>Cancel</Button>
                    <Button type="submit">Add</Button>
                </DialogActions>
            </Dialog>
        </>
    );

}
export default AddBookDialog




