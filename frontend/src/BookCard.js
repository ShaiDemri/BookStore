import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from "@material-ui/core";
import {removeBookAction} from './hooks/removeBookAction';
import {Link as RouterLink} from 'react-router-dom';
import defaultImage from './assets/img.png';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
        paddingTop: "56.25%", // 16:9
    },
    link: {
        color: "inherit",
        "text-decoration": "none" /* no underline */
    }
});

const BookCard =
    ({book, bookDispatch}) => {

        const {id, title, description, author, publishDate, image = defaultImage} = book;
        const classes = useStyles();
        const handleRemoveBook = async () => {
            await removeBookAction(id, bookDispatch)
        };

        return (
            <Card className={classes.root} raised>
                <CardActionArea component={RouterLink} to={`/books/${id}`}
                                state={{id,title, author, description, date: publishDate}}>
                    <CardMedia className={classes.media} image={image}/>
                    <CardContent>
                        <Typography align="center" gutterBottom variant="h4">
                            {title}
                        </Typography>
                        <Typography gutterBottom variant="h6">
                            {`Author: ${author}`}
                        </Typography>
                        <Typography gutterBottom variant="subtitle2">
                            {`Published: ${publishDate}`}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                        size="large"
                        color="secondary"
                        onClick={(i) => {
                            handleRemoveBook(i);
                        }}>
                        Remove Book
                    </Button>
                </CardActions>
            </Card>
        );
    }

export default BookCard;