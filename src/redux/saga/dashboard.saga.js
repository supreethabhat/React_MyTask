import { call, put, takeLatest } from 'redux-saga/effects';
import TaskService from '../../services/apiServices';
import {
    setDashboardDetail,
    setDashboardError,
} from '../actions/dashboard.actions';

const { FETCH_DASHBOARD_DET } = require('../keys').default;

export function* watchTaskDetails() {
    yield takeLatest(FETCH_DASHBOARD_DET, fetchDashboardData);
}

export function* fetchDashboardData() {
    try {
        const data = yield call(
            TaskService.getDashboardData,
        );
        yield put(setDashboardDetail(data));
    } catch (error) {
        yield put(setDashboardError(error.message));
    }
}
