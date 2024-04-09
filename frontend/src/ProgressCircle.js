import {CircularProgress, Paper, Typography} from '@material-ui/core';
import React from 'react';
import {makeStyles} from '@material-ui/styles';


const FETCHING_TEXT = "Getting Books";
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    bottom: {
        position: "relative",
        textAlign: "center",
        marginTop: theme.spacing(1),
        padding: theme.spacing(2),
    },
    bottomText: {
        margin: 0,
        color: "#FF0000",
    }
}));

const ProgressCircle = ({isFetching}) => {
    const classes = useStyles();
    if (isFetching) {
        return (
            <Paper className={classes.bottom}>
                <Typography component={"span"} className={classes.bottomText}>
                    {FETCHING_TEXT}
                    <CircularProgress/>
                </Typography>
            </Paper>
        )
    }

}

export default ProgressCircle;