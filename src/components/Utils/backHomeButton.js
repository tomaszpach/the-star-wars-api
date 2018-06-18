import React from 'react';
import {
    Link
} from 'react-router-dom';
import {Button} from 'react-bootstrap';

const backHomeButton = ( props ) => {
    let { text } = props;

    // todo back to previous page (same as click on SW logo)
    return (
        <Link to='/'>
            <Button>{text ? text : 'Back to home'}</Button>
        </Link>
    )
};

export default backHomeButton;