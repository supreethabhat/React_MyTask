import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import Sticky from '../../components/stickyHeader';
import Colors from '../../styles/colors';
import Locales from '../../config/locales.properties';
import theme from '../../styles/theme';
import List from './components/listComponent';
import './TaskList.css';
import CheckBox from './components/checkBoxList';
function TaskList(props) {
    const handleSearch = useCallback(event => {
        props.handleSearch(event.target.value);
    }, []);
    return (
        <div style={Style.mainContainer}>
            <Sticky headerTitle={props.userName} logOut={props.logOut}></Sticky>
            {props.latestTasks.length > 0 ? (
                <div>
                    <div
                        style={{ marginTop: '80px' }}
                        className="container flex-direction"
                    >
                        <div style={Style.container} className="div1">
                            <div>
                                <p style={Style.innerContainer}>
                                    {Locales.tasksCompleted}
                                </p>
                                <p style={Style.valueStyle}>
                                    <span style={Style.numberStyle}>
                                        {props.data.tasksCompleted}
                                    </span>
                                    /{props.data.totalTasks}
                                </p>
                            </div>
                        </div>
                        <div style={Style.container} className="div2">
                            <div>
                                <p style={Style.innerContainer}>
                                    {Locales.latestCreatedTask}
                                </p>
                                {props.latestTasks.length > 0 && (
                                    <List
                                        style={Style.listText}
                                        taskItems={props.latestTasks}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="container flex-direction">
                        <div style={Style.innerContainer} className="task">
                            {Locales.tasks}
                        </div>
                        <div className="taskCont">
                            <div className="searchDisplay">
                                <div
                                    className="searchDiv"
                                    style={Style.searchBar}
                                >
                                    <img
                                        src={require('../../assets/search-solid.svg')}
                                        alt="search"
                                    />
                                    <input
                                        className="search"
                                        type="search"
                                        placeholder={Locales.search}
                                        style={Style.text}
                                        onChange={handleSearch}
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    style={Style.button}
                                    onClick={props.handlePopUp}
                                >
                                    +{Locales.newTask}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="taskListCont" style={Style.container}>
                        {props.latestTasks.map(item => (
                            <CheckBox
                                complete={item.completed}
                                key={item._id}
                                label={item.name}
                                id={item._id}
                                toggleCheckboxChange={
                                    props.handleCheckboxChange
                                }
                                handleTaskDelete={props.handleTaskDelete}
                                handleTaskEdit={props.handleTaskEdit}
                            ></CheckBox>
                        ))}
                    </div>
                </div>
            ) : (
                <div
                    style={{ marginTop: '80px' }}
                    className="container flex-direction"
                >
                    <div style={Style.container} className="noTask">
                        <p style={Style.noTask}>{Locales.noTasks}</p>
                        <button
                            type="submit"
                            style={Style.button}
                            onClick={props.handlePopUp}
                        >
                            +{Locales.newTask}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

const Style = {
    mainContainer: {
        backgroundColor: Colors.backgroundPageColor,
        position: 'absolute',
        height: '100%',
        width: '100%',
    },

    container: {
        overflow: 'hidden',
        backgroundColor: Colors.white,
        borderRadius: '12px',
        opacity: '1',
        boxShadow: '0px 3px 6px #00000029',
        paddingTop: 8,
        paddingBottom: '8px',
        marginBottom: '10px',
    },
    innerContainer: {
        marginLeft: '30px',
        color: Colors.textColor,
        textAlign: 'left',
        fontSize: theme.FONT_SIZE_XXLARGE,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
    },
    margin: {
        marginLeft: '30px',
    },
    numberStyle: {
        color: Colors.buttonColor,
        fontSize: theme.FONT_SIZE_VLARGE,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
    },
    valueStyle: {
        marginLeft: '30px',
        color: Colors.greyColor,
        fontSize: theme.FONT_SIZE_XXLARGE,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
    },
    button: {
        backgroundColor: Colors.buttonColor,
        color: Colors.white,
        borderRadius: '8px',
        border: 0,
        opacity: 1,
        width: '100%',
        padding: 8,
        fontSize: theme.FONT_SIZE_MEDIUM,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
    },
    text: {
        color: Colors.loginText,
        fontSize: theme.FONT_SIZE_MEDIUM,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        paddingLeft: 10,
        border: 0,
    },
    searchBar: {
        display: 'flex',
        borderRadius: '8px',
        backgroundColor: Colors.serachColor,
        padding: 10,
        opacity: '1',
        border: 0,
    },
    noTask: {
        color: Colors.textColor,
        textAlign: 'center',
        fontSize: theme.FONT_SIZE_XXLARGE,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
    },
};

TaskList.propTypes = {
    userName: PropTypes.string.isRequired,
    data: PropTypes.object,
    latestTasks: PropTypes.array.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
    handleTaskEdit: PropTypes.func.isRequired,
    handleTaskDelete: PropTypes.func.isRequired,
    handlePopUp: PropTypes.func.isRequired,
    handleSearch: PropTypes.func,
    logOut: PropTypes.func.isRequired,
};

export default React.memo(TaskList);
