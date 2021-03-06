import { all, fork } from 'redux-saga/effects';
import { watchLogin } from './login.saga';
import { watchTaskDetails } from './dashboard.saga';
import {watchTaskList} from './task.saga';

export default function* root() {
    yield all([fork(watchLogin), fork(watchTaskDetails),fork(watchTaskList)]);
}
