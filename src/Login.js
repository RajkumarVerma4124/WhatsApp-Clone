import { Button } from '@material-ui/core';
import React from 'react'
import { auth, provider } from './firebase';
import './Login.css';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {

    // eslint-disable-next-line no-empty-pattern
    const [{ }, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((results) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: results.user,
                });
            })
            .catch((error) => alert(error.message));

    };
    return (
        <div className = "login">
            <div className="login_container">
            < img src = "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt=""
            />

            <div className="login_text">
                <h1>Sign in to WhatsApp </h1>
            </div>
            <Button onClick={signIn}>
                Sign In With Google 
            </Button>
            </div>
        </div>
    )
}

export default Login