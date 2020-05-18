const {
    FETCH_DASHBOARD_DET,
    SET_DASHBOARD_DET,
    SET_DASHBOARD_ERROR,
} = require('../keys').default;

export function fetchDashboardDetail() {
    return {
        type: FETCH_DASHBOARD_DET,
    };
}

export function setDashboardDetail(data) {
           return {
               type: SET_DASHBOARD_DET,
               data,
           };
       }

export function setDashboardError(error) {
    return {
        type: SET_DASHBOARD_ERROR,
        error,
    };
}
