import { call, put, takeLatest, select } from 'redux-saga/effects';
import TaskService from '../../services/apiServices';
import { fetchDashboardData } from './dashboard.saga';
import { setTasks, setErrorTask, setFilterData } from '../actions/tasks.action';

const {
    FETCH_TASKS,
    UPDATE_TASKS,
    DELETE_TASKS,
    CREATE_TASKS,
    FILTER_TASK,
} = require('../keys').default;

export function* watchTaskList() {
    yield takeLatest(FETCH_TASKS, fetchTasks);
    yield takeLatest(CREATE_TASKS, createTasks);
    yield takeLatest(UPDATE_TASKS, updateTasks);
    yield takeLatest(DELETE_TASKS, deleteTasks);
    yield takeLatest(FILTER_TASK, filterData);
}

export function* fetchTasks() {
    try {
        const data = yield call(TaskService.getTasks);
        yield put(setTasks(data));
        yield call(fetchDashboardData);
    } catch (error) {
        yield put(setErrorTask(error.message));
    }
}
export function* createTasks(action) {
    try {
        yield call(TaskService.createTasks, action);
        yield call(fetchTasks);
    } catch (error) {
        yield put(setErrorTask(error.message));
    }
}
export function* updateTasks(action) {
    try {
        yield call(TaskService.updateTasks, action.id, action.data);
        yield call(fetchTasks);
    } catch (error) {
        yield put(setErrorTask(error.message));
    }
}
export function* deleteTasks(action) {
    try {
        yield call(TaskService.deleteTask, action.data);
        yield call(fetchTasks);
    } catch (error) {
        yield put(setErrorTask(error.message));
    }
}
export function* filterData(action) {
    const taskData = yield select(state => state.task.tasks);
    const data = taskData.tasks.filter(item =>
        item.name.toLowerCase().includes(action.searchValue),
    );
    yield put(setFilterData(data));
}
