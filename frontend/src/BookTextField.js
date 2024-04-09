import TextField from '@material-ui/core/TextField';
import * as React from 'react';
const BookTextField = ({id, name, label, type="text"}) => {
    return <TextField
        autoFocus
        required
        margin="dense"
        variant="standard"
        fullWidth
        id={id}
        name={name}
        label={label}
        type={type}
    />

}

export default BookTextField;