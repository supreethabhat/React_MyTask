export default keyMirror({
    //login
    FETCH_LOGIN: null,
    SET_LOGIN: null,
    LOGIN_FAIL: null,
    LOG_OUT : null,
    //Dashboard
    FETCH_DASHBOARD_DET: null,
    SET_DASHBOARD_DET: null,
    SET_DASHBOARD_ERROR: null,
    //Tasks
    FETCH_TASKS: null,
    UPDATE_TASKS: null,
    DELETE_TASKS: null,
    SET_TASKS: null,
    SET_ERROR_TASK: null,
    CREATE_TASKS : null,
    FILTER_TASK : null,
    SET_FILTER_DATA : null
});

/**
 * This will mirror the keys and the values of the keys will be same as the key name
 * @param {*} keys
 */
function keyMirror(keys) {
    const mirror = {};
    Object.keys(keys).forEach(v => {
        mirror[v] = v;
    });
    return mirror;
}
