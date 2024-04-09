import {Link as RouterLink} from 'react-router-dom';
import {Button} from '@material-ui/core';
import * as React from 'react';
export default function ErrorPage() {
    return (
        <div id="error-page">
            <RouterLink to={'/'}><Button>Go Home</Button></RouterLink>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
        </div>
    );
}