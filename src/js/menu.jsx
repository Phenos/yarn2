import React, { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const Menu = ({isOpen, onClose}) => (
    <Drawer
        docked={ false }
        width={ 200 }
        open={ isOpen }
    >
        <h1>Menu</h1>
        <MenuItem onTouchTap={ onClose }>CLOSE</MenuItem>
    </Drawer>
);

Menu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default Menu;