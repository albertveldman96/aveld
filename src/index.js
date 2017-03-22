import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/App';
import reducer from './reducers';
import './styles.css';

let reduxDevToolConnector = undefined;
if (process.env.NODE_ENV !== "production") {
    if (window.__REDUX_DEVTOOLS_EXTENSION__) {
        reduxDevToolConnector = window.__REDUX_DEVTOOLS_EXTENSION__();
    } else {
        console.log("REDUX DEVTOOLS: Not found, no connector installed on Redux Store.");
    }
}

const store = createStore(reducer,applyMiddleware(thunk), reduxDevToolConnector);


render(
    <Provider store={store}>
        <App/>
    </Provider>,
  document.getElementById('root')
);
