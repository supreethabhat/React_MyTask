export default keyMirror({
    //login
    FETCH_LOGIN: null,
    SET_LOGIN: null,
    LOGIN_FAIL: null,
    //Dashboard
    FETCH_DASHBOARD_DET: null,
    SET_DASHBOARD_DET: null,
    SET_DASHBOARD_ERROR: null,
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
