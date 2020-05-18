import PropTypes from 'prop-types';
import React from 'react';
import Sticky from '../../components/stickyHeader';
import Colors from '../../styles/colors';
import Locales from '../../config/locales.properties';
import theme from '../../styles/theme';
import List from './components/listComponent';
import './TaskList.css';
import CheckBox from './components/checkBoxList';
function TaskList(props) {
    return (
        <div style={Style.mainContainer}>
            <Sticky headerTitle={props.userName}></Sticky>
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
                        {props.data.latestTasks && (
                            <List
                                style={Style.listText}
                                taskItems={props.data.latestTasks}
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className="container flex-direction">
                <div style={Style.innerContainer} className="task">
                    {Locales.tasks}
                </div>
                <div className="div2">
                    <div className="searchDisplay">
                        <div className="searchDiv" style={Style.searchBar}>
                            <img
                                src={require('../../assets/search-solid.svg')}
                                alt="search"
                            />
                            <input
                                className="search"
                                type="search"
                                placeholder={Locales.search}
                                style={Style.text}
                                required
                            />
                        </div>
                        <button type="submit" style={Style.button}>
                            +{Locales.newTask}
                        </button>
                    </div>
                </div>
            </div>

            <div className="taskListCont" style={Style.container}>
                {props.data.latestTasks &&
                    props.data.latestTasks.map(item => (
                        <CheckBox
                            key={item._id}
                            label={item.name}
                            id={item._id}
                            toggleCheckboxChange={props.handleCheckboxChange}
                            handleTaskDelete = {props.handleTaskDelete}
                            handleTaskEdit={props.handleTaskEdit}
                        ></CheckBox>
                    ))}
            </div>
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
        // backgroundColor: Colors.white,
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
};

TaskList.propTypes = {
    userName: PropTypes.string.isRequired,
    data: PropTypes.object,
    handleCheckboxChange: PropTypes.func.isRequired,
    handleTaskEdit: PropTypes.func.isRequired,
    handleTaskDelete: PropTypes.func.isRequired,
};

export default React.memo(TaskList);
