import React from 'react';
import ReactDOM from 'react-dom';
import Yarn from './yarn.jsx';
import store from './store.jsx';
import { Provider } from 'react-redux';

import Firebase from 'Firebase';

let firebase = new Firebase("https://yarnstudiodev.firebaseio.com");

firebase.authWithOAuthPopup("twitter", function(error, authData) {
    if (error) {
        console.log("Login Failed!", error);
    } else {
        console.log("Authenticated successfully with payload:", authData);
    }
});

console.log("firebase", firebase);
/*
todo: add auth with fiebase

https://github.com/tylermcginnis/react-router-firebase-auth
http://blog.krawaller.se/posts/a-react-redux-firebase-app-with-authentication/
https://www.firebase.com/docs/web/guide/login/twitter.html

*/


/* Necessary for the Material-UI library */
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const mainTemplate = (
    <Provider store={ store }>
        <Yarn />
    </Provider>
);



ReactDOM.render(mainTemplate, document.getElementById('yarn'));
