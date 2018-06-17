import React from 'react';

const heightGender = ( details ) => {
    let { height, gender } = details.details;

    return (
        <div>
            <p>Height: {height !== 'unknown' ? height + ' cm' : 'unknown'}</p>
            <p>Gender: {gender !== 'n/a' ? gender : 'unknown'}</p>
        </div>
    );
};

export default heightGender;