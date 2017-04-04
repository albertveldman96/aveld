import { combineReducers } from 'redux';
import weather from './weather';
import weight from './weight';

const reducer = combineReducers({
    weather,
    weight
});

export default reducer;