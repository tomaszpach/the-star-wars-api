import React from 'react';

const name = ( details ) => {
    let { name } = details.details;

    return (
        <h2>{name}</h2>
    );
};

export default name;