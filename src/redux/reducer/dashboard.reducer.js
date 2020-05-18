const {
    FETCH_DASHBOARD_DET,
    SET_DASHBOARD_DET,
    SET_DASHBOARD_ERROR,
} = require('../keys').default;

export const initialState = {
    data: {},
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DASHBOARD_DET:
            return {
                ...state,
            };
        case SET_DASHBOARD_DET:
            return {
                ...state,
                data: action.data,
            };
        case SET_DASHBOARD_ERROR:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
};
