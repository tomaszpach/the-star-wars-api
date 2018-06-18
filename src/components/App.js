import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import FetchUsers from './FetchUsers';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home';
import About from './About';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <FetchUsers/>

                    <Header/>
                    <Route exact path="/" props={this.props} component={Home}/>
                    <Route exact path="/page/:pageId/" props={this.props} component={Home}/>
                    <Route path="/people/:peopleId/" props={this.props} component={About}/>
                    <Footer/>
                </div>
            </Router>
        )
    }
}

export default App;