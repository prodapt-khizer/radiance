import React from "react";
import logo from "../assets/images/logo.png";
import "../assets/styles/login.scss";
import { useState } from "react";
import logotext from '../assets/images/logotext.png'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    console.log('Forgot password clicked');
  };


  return (
    <div className="login_container">
      <div className="logo_container">
        <img src={logo} alt="" />
      </div>
      <div className="login_body">
        <div className="login_left">
          <p className="title">Empower your network with “Radiance“</p>
          <p className="desc">
            Configuring excellence, one connection at a time.
          </p>
        </div>
        <div className="login_right">
        <div className="login-card">
        <div className="logo-text">
        <img src={logotext} className="image-style"/>
      
      <h2>Login to your Account</h2>
      <p>See what is going on with your Network</p>
      <div className="input-group">
        <label className="input-group-label">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label className="input-group-label">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="rem-text">
      <div className="remember-me">
        <input
          type="checkbox"
          id="rememberMe"
          checked={rememberMe}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="rememberMe">Remember Me</label>
      </div>
      <div className="forgot-password">
        <a href="#" onClick={handleForgotPassword}>Forgot Password?</a>
      </div>
      </div>
      <button onClick={handleLogin} className="login_button">Login</button>
    </div>
    <div className="bottom-text-above">Already Registered? Login</div>
    <div className="bottom-container">
    <div className="bottom-text">
      <p>Terms & Conditions</p>
      <p>Support</p>
      <p>Customer</p>
    </div>
    </div>
    
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
