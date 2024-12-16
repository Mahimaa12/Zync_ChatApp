import React from "react"; 
import './login.css';
import user_icon from '../assets/user.png';
import password_icon from '../assets/password.png';
import email_icon from '../assets/email.png';

const Login = () => {
    return (
        <div className="container">
            <div className="heading">WELCOME TO ZYNC!</div>
            <div className="header">
                <div className="text">SIGN UP</div>
                <div className="underline"></div>
            </div>
            <div className="form-box">
                <div className="inputs">
                    <div className="input">
                        <img src={user_icon} alt="User Icon" />
                        <input type="text" placeholder="Username" />
                    </div>
                    <div className="input">
                        <img src={email_icon} alt="Email Icon" />
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="Password Icon" />
                        <input type="password" placeholder="Password" />
                    </div>
                </div>
                <div className="options">
                    <span className="already-account">
                        Already have an account? <a href="/login">Login</a>
                    </span>
                </div>
                <div className="buttons">
                    <button className="active">Sign Up</button>
                    <button className="inactive">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
