import React from 'react';
import {Button} from "@material-ui/core";
import {auth, provider} from "./firebase";
// import logo from './';
import "./Login.css";
import {useStateValue} from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => { 
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__container">
                <div className="logo"></div>
                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>
                <Button onClick={signIn}>
                    Sign in with Google
                </Button>
            </div>
        </div>
    )
}

export default Login
