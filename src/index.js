import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import 'semantic-ui-css/semantic.min.css';

import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {logger} from "redux-logger";
import {reducer} from "./reducer/rootReducer";
import thunk from "redux-thunk";


const store = createStore(reducer, applyMiddleware(logger, thunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
