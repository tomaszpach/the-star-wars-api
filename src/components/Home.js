import React from 'react';

import ResultsList from './ResultsList';
import Pagination from './Pagination';

const Home = () => {
    return (
        <div>
            <ResultsList/>
            <Pagination/>
        </div>
    );
};

export default Home;