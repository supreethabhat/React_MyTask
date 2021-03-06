const {
    FETCH_LOGIN,
    SET_LOGIN,
    LOGIN_FAIL,
    LOG_OUT,
} = require('../keys').default;

export const initialState = {
    data: null,
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LOGIN:
            return {
                ...state,
            };
        case SET_LOGIN:
            return {
                ...state,
                data: action.data,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                error: action.error,
            };
        case LOG_OUT:
            return {
                  ...initialState,

            };
        default:
            return state;
    }
};
