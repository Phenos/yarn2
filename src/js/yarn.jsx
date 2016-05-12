import Radium from 'radium';
import Test from './test.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

class Yarn extends React.Component {
    render() {
        return <div style={ styles.base }>
            <h1>Welcome { this.props.name }!</h1>
            <button onClick={ this.onClick }>CLICK!</button>
            <Test></Test>
        </div>
    }

    onClick() {
        console.log("CLICK!");
    }
}

var styles = {
    base: {
        position: "absolute",
        height: "100%",
        width: "100%",
        padding: "10px",
        margin: "0px",
        background: "#f0f0f0"
    }
};

Yarn = Radium(Yarn);

//Yarn = Radium(Yarn);

Yarn.defaultProps = {
    name: "Bob"
};

Yarn.propType = {
    name: React.PropTypes.string
};

export default Yarn


