const {
    FETCH_LOGIN,
    SET_LOGIN,
    LOGIN_FAIL,
    LOG_OUT,
} = require('../keys').default;

export function fetchLogin(data) {
    return {
        type: FETCH_LOGIN,
        data,
    };
}

export function setLogin(data) {
    return {
        type: SET_LOGIN,
        data,
    };
}

export function loginFail(error) {
    return {
        type: LOGIN_FAIL,
        error,
    };
}
export function logOut() {
    return {
        type: LOG_OUT,
    };
}
