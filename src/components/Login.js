import React from 'react';
import '../styles/Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase.js';

const Login = () => {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => console.log(result))
        .catch(e => alert(e.message))
    };

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/WhatsApp_logo-color-vertical.svg" alt=""/>
                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>
                <Button type="submit" onClick={signIn}>
                    Sign in with Google
                </Button>
            </div>
        </div>
    );
};

export default Login;