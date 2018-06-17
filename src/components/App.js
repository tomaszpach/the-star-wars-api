import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import FetchUsers from './FetchUsers';

import Header from './Header/Header';
import Home from './Home';
import About from './About';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <FetchUsers/>

                    <Header/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/people/" component={About}/>
                </div>
            </Router>
        )
    }
}

export default App;