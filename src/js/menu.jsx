import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: true
        };

    }

    handleClose = () => {
        this.setState({
            open: false
        });
    };

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        });
    };

    render() {

        return (
            <Drawer
                docked={ false }
                width={ 200 }
                open={ this.state.open }
            >
                <div>
                    <a onTouchTap={ this.handleClose }>ABC</a>
                </div>
                <div>
                    <a onClick={ this.handleClose }>DEF</a>
                </div>
                <MenuItem onTouchTap={ this.handleClose }>Yeah!</MenuItem>
            </Drawer>
        )
    }

}

export default Menu;