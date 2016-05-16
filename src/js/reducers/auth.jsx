import {
    AUTH_SET_PROFILE,
    AUTH_LOGIN,
    AUTH_LOGOUT
} from '../actions/auth.jsx';

const initialSate = {
    authenticating: false,
    profile: null
};

export default function reducer(state = initialSate, action) {
    /* Create a new copy of the store state */
    let newState = null;

    switch (action.type) {
        case AUTH_SET_PROFILE:
            state.authenticating = false;
            newState = Object.assign({}, state);
            newState.profile = action.profile;
            return newState;

        case AUTH_LOGIN:
            state.authenticating = true;
            return state;

        case AUTH_LOGOUT:
            state.authenticating = false;
            newState = Object.assign({}, state);
            newState.profile = null;
            return newState;

        default:
            return state;

    }
}