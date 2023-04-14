import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';

const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const logInUser = result.user;
                console.log(logInUser);
                setUser(logInUser)
            })
            .catch(error => console.log('error', error.message))
    }
     const handleGithubSignIn = () =>{
        signInWithPopup(auth, gitHubProvider)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            setUser(loggedUser);
        })
        .catch(error=>{
            console.log(error);
        })
     }
    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result)
                setUser(null)
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div>

            {/* user ? logout : sign in */}
            {user ? <button onClick={handleSignOut}>Sign Out</button> :
                <>
                    <button onClick={handleGoogleSignIn}>Google Login</button>
                    <button onClick={handleGithubSignIn}>GitHub Login</button>
                </>


            }
            {user && <div>
                <h3>User: {user?.displayName}</h3>
                <p>Email: {user?.email}</p>
                <img src={user.photoURL} alt="" />
            </div>

            }
        </div>
    );
};

export default Login;