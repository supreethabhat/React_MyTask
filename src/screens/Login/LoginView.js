import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/card';
import theme from '../../styles/theme';
import Colors from '../../styles/colors';
import Locales from '../../config/locales.properties';

function Login(props) {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const handleIdChange = useCallback(event => {
        setId(event.target.value);
    }, []);
    const handleNameChange = useCallback(event => {
        setName(event.target.value);
    }, []);
    const handleLogin = useCallback(() => {
        props.handleLogin(id, name);
    }, [id, name]);
    return (
        <Card>
            <div>
                <p style={Style.heading}>{Locales.login}</p>
                <form style={{ flex: 1 }}>
                    <div className="row" style={Style.padding}>
                        <input
                            type="text"
                            placeholder={Locales.id}
                            style={Style.text}
                            onChange={handleIdChange}
                            required
                        />
                    </div>
                    <div className="row" style={Style.padding}>
                        <input
                            type="text"
                            placeholder={Locales.name}
                            style={Style.text}
                            onChange={handleNameChange}
                            required
                        />
                    </div>
                    <button
                        disabled={name.trim() === ''}
                        type="submit"
                        style={
                            name.trim() === ''
                                ? Style.disabledButton
                                : Style.button
                        }
                        onClick={handleLogin}
                    >
                        {Locales.login}
                    </button>
                </form>
            </div>
        </Card>
    );
}

const Style = {
    heading: {
        color: Colors.textColor,
        fontSize: theme.FONT_SIZE_XXLARGE,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
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
        width: '100%',
    },
    padding: {
        paddingLeft: 8,
        paddingRight: 18,
        paddingTop: 8,
        paddingBottom: 8,
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
    disabledButton: {
        backgroundColor: Colors.greyColor,
        color: Colors.white,
        borderRadius: '8px',
        border: 0,
        opacity: 1,
        width: '100%',
        padding: 8,
        fontSize: theme.FONT_SIZE_MEDIUM,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
    },
};

Login.propTypes = {
    handleLogin: PropTypes.func.isRequired,
};

export default React.memo(Login);
