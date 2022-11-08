import React, { useRef, useState } from 'react'
import './Register.scss'
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/')
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailRef = useRef()
    const passwordRef = useRef()

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }
    const handleFinish = () => {
        setPassword(passwordRef.current.value)
        navigate('/home')
    }
    
  return (
    <div className="register">
        <div className="top">
            <div className="wrapper">
            <img className='logo' src='https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456'
                alt=''>
            </img>
            <button className="signin" onClick={navigateToLogin}>Sign In</button>
        </div>
        </div>
        <div className="container">
            <h2>Welcome back,</h2>
            <h1>Unlimited movies, TV shows and more.</h1>
            <p>Watch anywhere. Cancel anytime.</p>

            {!email ? (
                <div className="input">
                    <input type='email' placeholder='email address' ref={emailRef} required></input>
                    <button className='registerButton' onClick={handleStart}>Get started</button>
                </div>
                ) : (
                <form className="input">
                    <input type='password' placeholder='password' ref={passwordRef} required></input>
                    <button className='registerButton' onClick={handleFinish}>Start membership</button>
                </form>
            )}
            
        </div>
    </div>
  )
}
