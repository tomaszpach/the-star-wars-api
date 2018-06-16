import React from 'react';

const name = ( details ) => {
    return (
        // todo check why details is twice (check SingleItem.js as well)
        <h2>{details.details.name}</h2>
    );
};

export default name;