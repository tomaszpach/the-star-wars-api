import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from "react-redux/";

import './stylesheets/main.scss';
// todo find better name for this js file
import './js/utils';
import App from './components/App';
import {reducers} from './reducers/index';

const store = createStore(reducers, {});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app'));