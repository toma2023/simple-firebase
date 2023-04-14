/**        ----------------------
 *         INITIAL INSTALLATION
 *         ----------------------
* 1. visit: console.firebase.google.com
* 2. Create a projects (skip google analytics)
* 3. Register App (create config)
* 4. install firebase: npm install firebase
* 5. add config file to your project
* 6. DANGER: Do not publish or make firebase config to public by       
 pushing   to github 
             ---------------
             INTEGRATION
             ----------------
* 7. Visit: Go to docs> Build> authentication> web> get started
* 8. export app from firebase.config.js
* 9. login.jsx: import getAuth from firebase/Auth
* 10. create const get auth = getAuth(app)
            ---------------
            PROVIDER SETUP
            ----------------
* 11. import googleAuthProvider and create a new provider
* 12. use SignInWithPopUp and pass auth and provider
* 13. activate sign-in method(google, facebook, github etc)
* 14. [vite] : Change 127.0.0.1 to localhost
*           ----------------
*           More Auth Provider
            -----------------
* 1.Activate the auth provider(create app, provide redirect url, client id, client secret)         
**/