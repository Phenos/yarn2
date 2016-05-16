import React, { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import i18n from '../config/i18n.js';

const Menu = function ({ onLogout, onLogin, isOpen, onClose, profile }) {

    const MenuAppBar = () => (
        <AppBar
            title={ i18n.UI_MENU_TITLE }
            iconElementLeft={ <IconButton onTouchTap={ onClose }><NavigationClose /></IconButton> }
        />
    );

    const WelcomeMessage = function () {
        if (profile) {
            return <div>Welcome { profile.provider }!</div>
        } else {
            return <div>Welcome stranger!</div>
        }
    };

    const LoginAction = function () {
        if (profile) {
            return <MenuItem onTouchTap={ onLogout }>{ i18n.UI_MENU_LOGOUT }</MenuItem>
        } else {
            return <MenuItem onTouchTap={ onLogin }>{ i18n.UI_MENU_LOGIN }</MenuItem>
        }
    };

    const Template = () => (
        <Drawer
        docked={ false }
        width={ 300 }
        open={ isOpen }
    >
        <MenuAppBar />
        <WelcomeMessage />
        <LoginAction />
    </Drawer>
    );

    return Template();
};

Menu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

export default Menu;