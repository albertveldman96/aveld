const initialState = {
    status: "none",
    weather: null
};


const weather = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_WEATHER_PENDING':
            return Object.assign({}, state, {status:'loading'});
        case 'GET_WEATHER_SUCCEEDED':
            return Object.assign({}, state, {weather: action.payload, status: 'succeeded'});
        case 'GET_WEATHER_FAILED':
            return Object.assign({}, state, {error: action.payload, status: 'failed'});
        default:
            return state;
    }
};

export default weather;