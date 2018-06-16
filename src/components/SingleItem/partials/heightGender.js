import React from 'react';

const heightGender = ( details ) => {
    return (
        // todo check why details is twice (check SingleItem.js as well)
        <p>Height: {details.details.height}, gender: {details.details.gender}</p>
    );
};

export default heightGender;