import { combineReducers } from 'redux';
import weather from './weather';

const weatherApp = combineReducers({
    weather
});

export default weatherApp;