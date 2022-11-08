import React, { useRef } from 'react'
import './Login.scss'
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate();

    const username = useRef();
    const password = useRef();

    const navigatetoHome = () => {
        if(username.current.value !== '' && password.current.value !== ''){
            navigate('/home');
        }        
    };

    const navigateToRegister = () => {
        navigate('/register');
    };

  return (
    <div className="login">
        <div className="top">
            <div className="wrapper">
            <img className='logo' src='https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456'
                alt=''></img>
            </div>
        </div>
        <div className="container">
            <form>
                <h1>Sign In</h1>
                <input type='email' placeholder='Email or Phone number' ref={username} required />
                <input type='password' placeholder='password' ref={password} required />
                <button className="loginButton" onClick={navigatetoHome}>Sign In</button>
                <span>New to Netflix? <b onClick={navigateToRegister}>Sign up now</b></span>
                <small>
                This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                </small>
            </form>
        </div>
    </div>
  )
}
