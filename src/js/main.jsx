/*

Bootstrap for the app

*/

import React from 'react';
import ReactDOM from 'react-dom';
import store from './services/store.jsx';
import { Provider } from 'react-redux';
import Yarn from './containers/yarn.jsx';
import css from './main.css'

/* Necessary for the Material-UI library */
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const mainTemplate = (
    <Provider store={ store }>
        <Yarn />
    </Provider>
);

var root = document.createElement('div');
ReactDOM.render(mainTemplate, document.body.appendChild(root));
