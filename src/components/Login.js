import { Button } from '@material-ui/core'
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/appSlice';
import { auth, provider } from '../firebase';
import "./Login.css";

export const Login = () => {

    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch(login({
                    username: result.user.displayName,
                    profilePic: result.user.photoURL,
                    id: result.user.uid,
                }));
            })
            .catch((error) => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                    alt=""
                />
            </div>
            <Button type="submit" onClick={signIn}>
                Iniciar Sesion
            </Button>
        </div>
    )
}

