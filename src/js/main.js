import React from 'react';
import ReactDOM from 'react-dom';
import Yarn from './yarn.jsx';

/* Necessary for the Material-UI library */
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

console.log("Yarn", Yarn);

ReactDOM.render(<Yarn />, document.getElementById('yarn'));





