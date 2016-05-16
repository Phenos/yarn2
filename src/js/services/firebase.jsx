import config from '../config/config.js';
import Firebase from 'Firebase';

let firebase = new Firebase(config.firebase.url);

firebase.authWithOAuthPopup("twitter", function(error, authData) {
    if (error) {
        console.log("Login failed", error);
    } else {
        console.log("Authenticated successfully with payload:", authData);
    }
});

console.log("firebase", firebase);
/*
todo: add auth with firebase

https://github.com/tylermcginnis/react-router-firebase-auth
http://blog.krawaller.se/posts/a-react-redux-firebase-app-with-authentication/
https://www.firebase.com/docs/web/guide/login/twitter.html

*/

export default firebase;