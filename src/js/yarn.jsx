import Radium from 'radium';
import Menu from './menu.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

/* Inject the Material UI theme provider */
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';

import { createStore } from 'redux';

import reducer from './reducer.jsx';
import { openMenu } from './layout/actions.jsx';

let store = createStore(reducer);


class Yarn extends React.Component {
    render() {
        return <MuiThemeProvider muiTheme={getMuiTheme()}>
            <div style={ styles.base }>
                <h1>Welcome { this.props.name }!</h1>
                <RaisedButton label="Menu" onClick={ this.onClick } />
                <Menu />
            </div>
        </MuiThemeProvider>
    }

    onClick() {
        store.dispatch(openMenu());
        console.log(store.getState().toJS());
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


