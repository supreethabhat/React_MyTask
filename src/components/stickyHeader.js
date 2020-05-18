import PropTypes from 'prop-types';
import React from 'react';
import Colors from '../styles/colors';
import theme from '../styles/theme';

function StickyHeader(props) {
    return (
        <div style={Style.sticky}>
            <div style={Style.nameStyle}>
                <img
                    src={require('../assets/Supreetha.png')}
                    alt="Avatar"
                    style={Style.avatar}
                ></img>
                <p style={Style.textStyle}>{props.headerTitle}</p>
            </div>
            <p style={Style.headerTitle}>Logout</p>
        </div>

    );
}

const Style = {
    sticky: {
        position: 'fixed',
        top: 0,
        width: '100%',
        display: 'block',
        padding: 10,
        backgroundColor: Colors.white,
        boxShadow: '0px 3px 6px #00000029',
        opacity: '1',
    },
    avatar: {
        verticalAlign: 'middle',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        marginLeft: '20px',
    },
    nameStyle: {
        float: 'left',
        display: 'flex',
    },
    textStyle: {
        marginLeft: 10,
        color: Colors.textName,
        fontSize: theme.FONT_SIZE_LARGE,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
    },
    headerTitle: {
        marginRight: 30,
        float: 'right',
        color: Colors.textName,
        fontSize: theme.FONT_SIZE_LARGE,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
    },
};

StickyHeader.propTypes = {
    headerTitle: PropTypes.string.isRequired,
};

export default React.memo(StickyHeader);
