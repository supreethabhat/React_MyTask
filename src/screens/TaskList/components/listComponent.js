import PropTypes from 'prop-types';
import React from 'react';
import theme from '../../../styles/theme';
import Colors from '../../../styles/colors';

function TaskListTemp(props) {
    const items = props.taskItems;
    const listItems = items.map(item => (
        <li
            style={item.completed ? Style.strikeListText : Style.listText}
            key={item._id}
        >
            {item.name}
        </li>
    ));
    return <ul>{listItems}</ul>;
}

const Style = {
    listText: {
        color: Colors.greyColor,
        fontSize: theme.FONT_SIZE_MEDIUM,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
    },
    strikeListText: {
        color: Colors.greyColor,
        fontSize: theme.FONT_SIZE_MEDIUM,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        textDecoration: 'line-through',
    },
};
TaskListTemp.propTypes = {
    taskItems: PropTypes.array.isRequired,
};
export default React.memo(TaskListTemp);
