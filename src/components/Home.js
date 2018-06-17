import React from 'react';

import Header from './Header/Header';
import ResultsList from './ResultsList';
import Pagination from './Pagination';

const Home = () => {
    return (
        <div>
            <Header/>
            <ResultsList/>
            <Pagination/>
        </div>
    );
};

export default Home;