import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import thunk from 'redux-thunk';
import WeatherApp from './components/WeatherApp';
import WeightApp from './components/WeightApp';
import reducer from './reducers';
import './styles.css';

let store;
const middleware = applyMiddleware(thunk);
if (process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION__) {
    let reduxDevToolConnector = window.__REDUX_DEVTOOLS_EXTENSION__();
    store = createStore(
        reducer,
        compose(middleware, reduxDevToolConnector)
    );
} else if (process.env.NODE_ENV !== "production") {
    console.log("REDUX DEVTOOLS: Not found, no connector installed on Redux Store.");
    store = createStore(reducer, middleware);
} else {
    store = createStore(reducer, middleware);
}

render(
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/playground/weather" component={WeatherApp}/>
                <Route path="/playground/weight" component={WeightApp}/>
            </div>
        </Router>
    </Provider>,
  document.getElementById('root')
);