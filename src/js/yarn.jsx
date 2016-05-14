import Radium from 'radium';
import MainMenu from './mainMenu.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

/* Inject the Material UI theme provider */
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';

import { doOpenMenu } from './layout/actions.jsx';

class Yarn extends React.Component {

    render() {
        return <MuiThemeProvider muiTheme={ getMuiTheme() }>
            <div style={ styles.base }>
                <h1>Welcome { this.props.name }!</h1>
                <RaisedButton label="Menu" onClick={ doOpenMenu } />
                <MainMenu />
            </div>
        </MuiThemeProvider>
    }

}

var styles = {
    base: {
        position: "absolute",
        height: "100%",
        width: "100%",
        padding: "10px",
        margin: "0px"
    }
};

Yarn = Radium(Yarn);

Yarn.defaultProps = {
    name: "Bob"
};

Yarn.propType = {
    name: React.PropTypes.string
};

export default Yarn


