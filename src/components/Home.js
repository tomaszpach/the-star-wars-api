import React from 'react';

import ResultsList from './ResultsList';
import Pagination from './Pagination';

const Home = (props) => {
    return (
        <div className='characters-table'>
            <ResultsList/>
            <Pagination match={props.match.params.pageId}/>
        </div>
    );
};

export default Home;