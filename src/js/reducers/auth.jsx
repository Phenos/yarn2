import update from 'react/lib/update';

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

    switch (action.type) {
        case AUTH_SET_PROFILE:
            return update(state, {
                authenticating: { $set: false },
                profile: { $set: action.profile }
            });
        case AUTH_LOGIN:
            return update(state, {
                authenticating: { $set: true }
            });
        case AUTH_LOGOUT:
            return update(state, {
                authenticating: { $set: false },
                profile: { $set: null }
            });
        default:
            return state;

    }
}