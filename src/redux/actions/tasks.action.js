const {
    FETCH_TASKS,
    UPDATE_TASKS,
    DELETE_TASKS,
    SET_TASKS,
    SET_ERROR_TASK,
    CREATE_TASKS,
    FILTER_TASK,
    SET_FILTER_DATA,
} = require('../keys').default;

export function fetchTasks() {
    return {
        type: FETCH_TASKS,
    };
}

export function setTasks(data) {
    return {
        type: SET_TASKS,
        data,
    };
}

export function createTasks(data) {
    return {
        type: CREATE_TASKS,
        data,
    };
}

export function setErrorTask(error) {
    return {
        type: SET_ERROR_TASK,
        error,
    };
}

export function updateTask(id, data) {
    return {
        type: UPDATE_TASKS,
        id,
        data,
    };
}

export function deleteTask(data) {
    return {
        type: DELETE_TASKS,
        data,
    };
}
export function filterTask(searchValue) {
           return {
               type: FILTER_TASK,
               searchValue,
           };
       }
export function setFilterData(data) {
    return {
        type: SET_FILTER_DATA,
        data,
    };
}
