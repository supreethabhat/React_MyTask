import React, { useEffect, useCallback, useState } from 'react';
import TaskList from './TaskList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { fetchDashboardDetail } from '../../redux/actions/dashboard.actions';
import {
    updateTask,
    deleteTask,
    createTasks,
    fetchTasks,
    filterTask,
} from '../../redux/actions/tasks.action';
import SessionService from '../../services/persistService';
import PopUp from '../../components/popUp';

function TaskListContainer(props) {
    const [popup, setPopup] = useState(false);
    /**Load the Dashboard Data */
    useEffect(() => {
        if (
            props.loginData &&
            props.loginData.msg === 'User logged in successfully'
        ) {
            props.actions.fetchDashboardDetail();
            props.actions.fetchTasks();
        }
    }, [props.loginData]);
    /** On Check Box click action, update the list with the change */
    const handleCheckBoxToggle = useCallback((id, value, flag) => {
        let obj = {
            name: value,
            completed: flag,
        };
        props.actions.updateTask(id, obj);
    }, []);
    /** On Delete of task */
    const handleTaskDelete = useCallback(value => {
        props.actions.deleteTask(value);
    }, []);
    /** On Edit of Task */
    const handleTaskEdit = useCallback(value => {
        console.log(value);
    }, []);
    /** To open the pop up to create new task */
    const handlePopUp = useCallback(() => {
        setPopup(true);
    }, []);
    /**Close the pop up and update the task */
    const handleClosePopUp = useCallback(taskValue => {
        props.actions.createTasks(taskValue);
        console.log(taskValue);
        setPopup(false);
    }, []);
    /** Search through the tasks */
    const handleSearch = useCallback(value => {
        props.actions.filterTask(value);
    }, []);
    /** LogOut function */
    const logOut = useCallback(() => {
        SessionService.removeSession();
        props.history.goBack();
    }, []);

    return (
        <div>
            {props.data ? (
                <div>
                    <TaskList
                        userName={props.loginData && props.loginData.token.name}
                        data={props.data}
                        latestTasks={
                            props.data.latestTasks ? props.data.latestTasks : []
                        }
                        totalTask={props.taskList ? props.taskList : []}
                        handleCheckboxChange={handleCheckBoxToggle}
                        handleTaskDelete={handleTaskDelete}
                        handleTaskEdit={handleTaskEdit}
                        handlePopUp={handlePopUp}
                        handleSearch={handleSearch}
                        logOut={logOut}
                    />
                    {popup && <PopUp closePopup={handleClosePopUp} />}
                </div>
            ) : (
                <div className="loader"></div>
            )}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        loginData: state.login.data,
        data: state.dashboard.data,
        error: state.dashboard.error,
        taskList: state.task.filteredTask ,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
            {
                fetchDashboardDetail,
                createTasks,
                deleteTask,
                updateTask,
                fetchTasks,
                filterTask,
            },
            dispatch,
        ),
    };
}
export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(TaskListContainer),
);
