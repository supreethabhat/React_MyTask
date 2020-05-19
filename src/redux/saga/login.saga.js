import { call, put, takeLatest } from 'redux-saga/effects';
import TaskService from '../../services/apiServices';
import SessionService from '../../services/persistService';
import {
    setLogin,
    loginFail,
} from '../actions/login.action';

const { FETCH_LOGIN } = require('../keys').default;

export function* watchLogin() {
    yield takeLatest(FETCH_LOGIN, fetchLogin);
}

export function* fetchLogin(name) {
    try {
        const data = yield call(TaskService.Login,name.data);
        yield call(SessionService.saveSessionDetails, data);
        yield put(setLogin(data));
    } catch (error) {
        yield put(loginFail(error.message));
    }
}
