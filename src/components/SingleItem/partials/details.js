import React from 'react';

import BackHomeButton from '../../Utils/backHomeButton';
import Name from './name';
import HeightGender from './heightGender';
import Films from './Films';

const details = ( props ) => {
    let { selected } = props;

    return (
        <div className='details'>
            <BackHomeButton/>
            <Name details={selected}/>
            <HeightGender details={selected}/>
            <Films/>
        </div>
    )
};

export default details;