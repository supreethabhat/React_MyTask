import React, { useCallback, useState } from 'react';
import './style.css';
import PropTypes from 'prop-types';
import Colors from '../styles/colors';
import theme from '../styles/theme';
import Locales from '../config/locales.properties';

function PopUp(props) {
    const [task, setTask] = useState('');
    const handleTaskChange = useCallback(
        event => {
            setTask(event.target.value);
        },
        [task],
    );

    const handleTaskCreate = useCallback(() => {
        props.closePopup(task);
    }, [task]);
    return (
        <div className="popup">
            <div className="popupinner">
                <p style={Style.newText}>+ {Locales.newTask}</p>
                <div style={Style.newTask}>
                    <input
                        type="text"
                        placeholder={Locales.taskName}
                        style={Style.text}
                        onChange={handleTaskChange}
                        required
                    />
                    <button
                        type="submit"
                        style={Style.button}
                        onClick={handleTaskCreate}
                    >
                        +{Locales.newTask}
                    </button>
                </div>
            </div>
        </div>
    );
}

const Style = {
    button: {
        backgroundColor: Colors.buttonColor,
        color: Colors.white,
        borderRadius: '8px',
        border: 0,
        opacity: 1,
        width: 'auto',
        padding: 8,
        fontSize: theme.FONT_SIZE_MEDIUM,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        margin: 10,
    },
    text: {
        color: Colors.loginText,
        fontSize: theme.FONT_SIZE_MEDIUM,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        borderRadius: '8px',
        backgroundColor: Colors.backgroundColor,
        padding: 10,
        opacity: '1',
        border: 0,
        margin: 10,
        width: 'auto',
    },
    newText: {
        color: Colors.textColor,
        fontSize: theme.FONT_SIZE_XLARGE,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        textAlign: 'center',
    },
    newTask: {
        display: 'grid',
        textAlign: 'center',
        flexDirection: 'row',
    },
};

PopUp.propTypes = {
    closePopup: PropTypes.func.isRequired,
};

export default React.memo(PopUp);
