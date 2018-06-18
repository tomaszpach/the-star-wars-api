import React, { Component } from 'react';
import {connect} from "react-redux";
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

                    <Header page={this.props.swCharacters.page}/>
                    <Route exact path="/" props={this.props} component={Home}/>
                    <Route exact path="/page/:pageId/" props={this.props} component={Home}/>
                    <Route path="/people/:peopleId/" props={this.props} component={About}/>
                    <Footer/>
                </div>
            </Router>
        )
    }
}

function mapStateToProps(state) {
    return ({
        swCharacters: state.swCharacters
    })
}

export default connect(mapStateToProps)(App)