import React, {  useCallback } from 'react';
import Login from './LoginView';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchLogin } from '../../redux/actions/login.action';
import { withRouter } from 'react-router-dom';
function LoginContainer(props) {
    const handleLogin = useCallback((id,name) => {
        props.actions.fetchLogin(name);
        props.history.push('/tasks');
    }, [props.actions,props.history]);

    return <Login handleLogin={handleLogin}></Login>;
}
function mapStateToProps(state) {
    return {
        data: state.login.data,
        error: state.login.error,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
            {
                fetchLogin,
            },
            dispatch,
        ),
    };
}
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginContainer));
