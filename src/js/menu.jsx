import React, { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

const Menu = function ({isOpen, onClose}) {

    const MenuAppBar = () => (
        <AppBar
            title='Menu'
            iconElementLeft={ <IconButton onTouchTap={ onClose }><NavigationClose /></IconButton> }
        />
    );

    return <Drawer
        docked={ false }
        width={ 300 }
        open={ isOpen }
    >
        <MenuAppBar />
        <MenuItem onTouchTap={ onClose }>Login </MenuItem>
    </Drawer>
};

Menu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default Menu;