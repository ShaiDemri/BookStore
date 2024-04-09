import * as React from 'react';
import {useLocation} from 'react-router-dom';
import {Container, Typography, Box,Button} from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom';


const BookDetails = () => {
    const location = useLocation();
    const {title, author, description} = location.state;
    return (
        <Container maxWidth="lg">
            <RouterLink to={'/'}><Button>Go Back</Button></RouterLink>
            <Box>
                <Typography align={"center"} gutterBottom color="primary" variant="h2" component="h1" >
                    {title}
                    <Typography variant="h6" component="span" color="textPrimary"> by </Typography>
                    <Typography variant="h5" color="primary" component="span" > {author} </Typography>
                </Typography>
                <Typography variant="h6" component="h1" >{description}</Typography>
            </Box>
        </Container>
    );
};

export default BookDetails;