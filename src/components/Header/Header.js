import React from 'react';

import Logo from './Logo';

const Header = (props) => {
    return (
        <header>
            <Logo page={props.page}/>
        </header>
    );
};

export default Header;