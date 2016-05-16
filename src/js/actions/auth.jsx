import firebase from '../services/firebase.jsx';
import store from '../services/store.jsx';

export const AUTH_SET_PROFILE = 'AUTH_SET_PROFILE';
export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';


export function setProfile(profile) {
    return {
        type: AUTH_SET_PROFILE,
        profile: profile
    }
}

export function login() {
    return function (dispatch) {
        dispatch({
            type: AUTH_LOGIN
        });

        firebase.authWithOAuthPopup("twitter", function (error, authData) {
            if (error) {
                dispatch(setProfile(null));
            } else {
                dispatch(setProfile(authData));
            }
        });

    }
}

export function logout() {
    return {
        type: AUTH_LOGOUT
    }
}

export function doSetProfile(profile) {
    return store.dispatch(setProfile(profile));
}


export function doLogin(profile) {
    return store.dispatch(login(profile));
}


export function doLogout(profile) {
    return store.dispatch(logout(profile));
}


