import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import './checkBoxList.css';
function CheckBoxList(props) {
    const [check, setCheck] = useState(false);
    const [edit, setEdit] = useState(false);
    const toggleCheckboxChange = useCallback(
        event => {
            console.log(event.target.checked);
            setCheck(event.target.checked);
            props.toggleCheckboxChange(
                props.id,
                event.target.value,
                event.target.checked,
            );
        },
        [props],
    );
    const handleEdit = useCallback(() => {
        setEdit(true);
    }, [props]);
    const handleDelete = useCallback(() => {
        props.handleTaskDelete(props.id);
    }, [props]);

    return (
        <div className="padding">
            <div>
                {edit ? (
                    <input
                        className="textLabel"
                        type="text"
                        defaultValue={props.label}
                        onChange={toggleCheckboxChange}
                        autoFocus
                    ></input>
                ) : (
                    <div
                        style={
                            check || props.complete
                                ? Style.strikeThrough
                                : Style.padding
                        }
                        className="textLabel"
                    >
                        <input
                            className="checkbox"
                            type="checkbox"
                            checked={props.complete}
                            value={props.label}
                            onChange={toggleCheckboxChange}
                        />

                        {props.label}
                    </div>
                )}

                <div style={{ float: 'right', marginTop: '7px' }}>
                    {edit ? (
                        <img
                            src={require('../../../assets/close-outline.svg')}
                            alt="close"
                            style={{
                                marginRight: 10,
                                width: '19px',
                                height: '19px',
                            }}
                            onClick={() => setEdit(false)}
                        />
                    ) : (
                        <img
                            src={require('../../../assets/pen-solid.svg')}
                            alt="edit"
                            style={{ marginRight: 10 }}
                            onClick={handleEdit}
                        />
                    )}
                    <img
                        src={require('../../../assets/trash-solid.svg')}
                        alt="delete"
                        style={{ marginRight: 10 }}
                        onClick={handleDelete}
                    />
                </div>
            </div>
            <hr className="solid"></hr>
        </div>
    );
}

const Style = {
    strikeThrough: {
        padding: 10,
        textDecoration: 'line-through',
    },
    padding: {
        padding: 10,
    },
};

CheckBoxList.propTypes = {
    label: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired,
    toggleCheckboxChange: PropTypes.func.isRequired,
    handleTaskEdit: PropTypes.func.isRequired,
    handleTaskDelete: PropTypes.func.isRequired,
};

export default React.memo(CheckBoxList);
