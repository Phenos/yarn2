import { persistStore, autoRehydrate } from 'redux-persist';
import { createStore, compose, applyMiddleware } from 'redux';

import config from '../config/config.jsx';
import reducer from '../reducers/reducer.jsx';

/* Middlewares */
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
const logger = createLogger(config.logging.actions);

const devToolsExtension = window.devToolsExtension ? window.devToolsExtension() : f => f;

const enhancer = compose(
    autoRehydrate(),
    applyMiddleware(thunk),
    applyMiddleware(logger),
    devToolsExtension
);

const store = createStore(reducer, {}, enhancer);

// Add local storage persistance to the store
persistStore(store);

export default store;