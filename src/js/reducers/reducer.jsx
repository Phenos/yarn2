import { combineReducers } from 'redux';
import layout from './layout.jsx';
import auth from './auth.jsx';

let reducer = combineReducers({
    layout,
    auth
});

export default reducer;
