import React from 'react';
import ReactDOM from 'react-dom';
import Yarn from './yarn.jsx';
import store from './store.jsx';
import { Provider } from 'react-redux';

/* Necessary for the Material-UI library */
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const mainTemplate = (
    <Provider store={ store }>
        <Yarn />
    </Provider>
);

ReactDOM.render(mainTemplate, document.getElementById('yarn'));
