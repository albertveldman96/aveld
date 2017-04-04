const initialState = {
    status: null,
    weights: null
};

const weight = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_WEIGHTS_PENDING':
            return Object.assign({}, state, {status:'loading'});
            break;
        case 'GET_WEIGHTS_SUCCEEDED':
            return Object.assign({}, state, {weights: action.payload, status: 'succeeded'});
            break;
        case 'GET_WEIGHTS_FAILED':
            return Object.assign({}, state, {error: action.payload, status: 'failed'});
            break;
        default:
            return state;
    }
};

export default weight;