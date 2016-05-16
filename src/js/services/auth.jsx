/*

Singleton auth service

*/
import store from './store.jsx';
import { doSetProfile, doLogin, doLogout } from '../actions/auth.jsx';

export const STATUS_ANONYMOUS = "STATUS_ANONYMOUS";
export const STATUS_AUTHENTICATED = "STATUS_AUTHENTICATED";

export class Auth {

    profile() {
        var state = store.getState();
        return state.auth.profile;
    }

    status() {
        let profile = this.profile();
        return (profile) ? STATUS_AUTHENTICATED : STATUS_ANONYMOUS;
    }

    login() {
        doLogin();
    }

    logout() {
        doLogout();
    }
}

let auth = new Auth();

export default auth;