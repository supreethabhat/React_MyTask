import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import './checkBoxList.css';
function CheckBoxList(props) {
    const toggleCheckboxChange = useCallback(() => {
        props.toggleCheckboxChange(props.id);
    }, [props]);
    const handleEdit = useCallback(() => {
        props.handleTaskEdit(props.id);
    }, [props]);
    const handleDelete = useCallback(() => {
        props.handleTaskDelete(props.id);
    }, [props]);

    return (
        <div className="padding">
            <label style={{ padding: 10 }} className="textLabel">
                <input
                    className="checkbox"
                    type="checkbox"
                    value={props.id}
                    checked={props.isChecked}
                    onChange={toggleCheckboxChange}
                />

                {props.label}
            </label>
            <div style={{ float: 'right' }}>
                <img
                    src={require('../../../assets/pen-solid.svg')}
                    alt="edit"
                    style={{ marginRight: 10 }}
                    onClick={handleEdit}
                />
                <img
                    src={require('../../../assets/trash-solid.svg')}
                    alt="delete"
                    style={{ marginRight: 10 }}
                    onClick={handleDelete}
                />
            </div>
            <hr className="solid"></hr>
        </div>
    );
}

CheckBoxList.propTypes = {
    label: PropTypes.string.isRequired,
    toggleCheckboxChange: PropTypes.func.isRequired,
    handleTaskEdit: PropTypes.func.isRequired,
    handleTaskDelete: PropTypes.func.isRequired,
};

export default React.memo(CheckBoxList);
