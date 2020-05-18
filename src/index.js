import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route,BrowserRouter as Router } from 'react-router-dom';
import Task from '../src/screens/TaskList';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from '../src/redux/store';

const routing = (
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/tasks" component={Task} />
            </div>
        </Router>
    </Provider>
);

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
