/*

Global configuration object for the app

*/
let config = {
    /* Connection settings for the Firebase API */
    firebase: {
        url: "https://yarnstudiodev.firebaseio.com"
    },
    logging: {
        /*
        logging middleware options
        https://github.com/theaqua/redux-logger
        */
        actions: {
            log: 'log', /* set to 'error' when in production */
            duration: true,
            timestamp: true,
            logErrors: true,
            collapsed: false
        }
    }
};

export default config;
