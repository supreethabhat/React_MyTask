import React, { useEffect, useCallback } from 'react';
import TaskList from './TaskList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDashboardDetail } from '../../redux/actions/dashboard.actions';
function TaskListContainer(props) {
    useEffect(() => {
        props.actions.fetchDashboardDetail();
    }, [props.actions]);

    const handleCheckBoxToggle = useCallback(value => {
        console.log(value);
    }, []);
    const handleTaskDelete = useCallback(value => {
        console.log(value);
    }, []);
    const handleTaskEdit = useCallback(value => {
        console.log(value);
    }, []);

    return (
        <TaskList
            userName="Supreetha"
            data={props.data}
            handleCheckboxChange={handleCheckBoxToggle}
            handleTaskDelete={handleTaskDelete}
            handleTaskEdit={handleTaskEdit}
        />
    );
}

function mapStateToProps(state) {
    return {
        data: state.dashboard.data,
        error: state.dashboard.error,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
            {
                fetchDashboardDetail,
            },
            dispatch,
        ),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);
