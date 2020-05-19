const {
    FETCH_TASKS,
    SET_TASKS,
    SET_ERROR_TASK,
    // FILTER_TASK,
    SET_FILTER_DATA
} = require('../keys').default;

export const initialState = {
    tasks: {},
    error: null,
    filteredTask : []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TASKS:
            return {
                ...state,
            };

        case SET_TASKS:
            return {
                ...state,
                tasks: action.data,
                filteredTask: action.data.tasks,
            };

        case SET_ERROR_TASK:
            return {
                ...state,
                error: action.error,
            };
        case SET_FILTER_DATA:
            return {
                ...state,
                filteredTask: action.data,
            };

        default:
            return state;
    }
};
