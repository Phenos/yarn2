import { persistStore, autoRehydrate } from 'redux-persist';
import { createStore } from 'redux';
import reducer from './reducer.jsx';

let store = createStore(reducer, undefined, autoRehydrate());
persistStore(store);

export default store;