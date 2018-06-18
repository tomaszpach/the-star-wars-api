import React from 'react';
import {
    Glyphicon,
    ButtonToolbar,
    OverlayTrigger,
    Popover
} from 'react-bootstrap';

const Footer = () => {
    const popoverLeft = (
        <Popover bsClass="how-to popover" id="popover-positioned-left" title="How to use this?">
            <p>Choose your character and click on it to see details.</p>
            <p>Use pagination to see another ten characters.</p>
            <p>You can use 'Back' button or click on Star Wars logo to go back to Homepage.</p>
        </Popover>
    );

    return (
        <footer>
            <ButtonToolbar>
                <OverlayTrigger trigger="click" placement="left" overlay={popoverLeft}>
                    <Glyphicon glyph="question-sign"/>
                </OverlayTrigger>
            </ButtonToolbar>
        </footer>
    );
};

export default Footer;