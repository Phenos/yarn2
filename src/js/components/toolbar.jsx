import React, { PropTypes } from 'react';

import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const iconMenu = (
    <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
    </IconMenu>
);

const Toolbar = ({onOpenMenu}) => (
    <AppBar
        title='Yarn Studio'
        onLeftIconButtonTouchTap={ onOpenMenu }
        iconElementRight={ iconMenu }>
    </AppBar >
);

Toolbar.propTypes = {
    onOpenMenu: PropTypes.func.isRequired
};

export default Toolbar;