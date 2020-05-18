import PropTypes from 'prop-types';
import React from 'react';
import Colors from '../styles/colors';

function Card(props) {
    return (
        <div className="row" style={Style.container}>
            <div style={Style.card}>
                {props.children}
            </div>
        </div>
    );
}

const Style = {
    card: {
        padding: 20,
        overflow: 'hidden',
        backgroundColor: Colors.white,
        borderRadius: '12px',
        opacity: '1',
        boxShadow: '0px 3px 6px #00000029',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
};

export default React.memo(Card);
