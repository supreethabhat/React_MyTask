import { combineReducers } from 'redux';
import dashboard from './dashboard.reducer';
import login from './login.reducer';
import task from './task.reducer';

// const { SET_LOGGED_IN } = require('../keys').default;

const appReducer = combineReducers({
    dashboard,
    login,
    task,
});

export default function root(state, action) {
    // if (action.type === SET_LOGGED_IN) {
    //     state = { login: state && state.login };
    // }
    return appReducer(state, action);
}
