import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/Firebase.init';

const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    console.log(app);

    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();


    const handlegoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const logInUser = result.user;
                console.log(logInUser);
                setUser(logInUser);
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }
   
    const handleSignOut =()=>{
        signOut(auth)
        .then(result=>{
            console.log(result)
            setUser(null);
            
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const handleGitSignIn =()=>{
        signInWithPopup(auth,gitProvider)
        .then(result=>{
            const logInUser=result.user;
            console.log(logInUser);
            setUser(logInUser);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <div>
           {
            user ? 
            <button onClick={handleSignOut} className='btn btn-primary'>Sign Out</button> : <>
                <button onClick={handlegoogleSignIn} className='btn my-5'>Google Login</button> 
                <button onClick={handleGitSignIn} className='btn btn-secondary my-5'>GitHub Login</button> 
                
            </>
           }
            {
                user && <div className='text-2xl font-bold'>
                    <h3>User :{user.displayName}</h3>
                    <p>Email : {user.email}</p>
                    <p>ProviderId : {user.providerId}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;