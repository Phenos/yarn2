import config from '../config/config.jsx';
import Firebase from 'Firebase';

let firebase = new Firebase(config.firebase.url);

/*
todo: add auth with firebase

https://github.com/tylermcginnis/react-router-firebase-auth
http://blog.krawaller.se/posts/a-react-redux-firebase-app-with-authentication/
https://www.firebase.com/docs/web/guide/login/twitter.html

*/

export default firebase;