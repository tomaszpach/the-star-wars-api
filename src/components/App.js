import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import FetchUsers from './FetchUsers';

import Home from './Home';
import About from './About';

// todo finish navigation (make it pretty and shiny)

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                    <FetchUsers/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/people/" component={About}/>
                </div>
            </Router>
        )
    }
}

export default App;