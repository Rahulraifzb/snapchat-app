import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/appSlice'
import { auth, provider } from './firebase'
import './Login.css'
import Logo from './logo.png'

function Login() {
    const dispatch = useDispatch();

    const SignIn = () => {
        auth.signInWithPopup(provider).then(result => {
            dispatch(login({
                username:result.user.displayName,
                profilePic:result.user.photoURL,
                id:result.user.uid
            }))

        }).catch((error) => alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src={Logo} alt="" />
                <Button variant="outlined" onClick={SignIn}>Sign In</Button>
            </div>
        </div>
    )
}

export default Login
