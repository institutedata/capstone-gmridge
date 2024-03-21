import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './LoginCreateUser.css';
import CreateAccount from './CreateAccount';

function LoginCreateUser() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Logging in with:", email, password);
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    // Add your create user logic here
    console.log("Creating user with:", newEmail, newPassword);
  };

  const redirectToCreateAccount = () => {
    navigate('/create-account'); 
  };

  return (
    <div className="LoginCreateUser">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <br></br><span className="link" onClick={redirectToCreateAccount}>Create Account</span></p>
      </div>
    </div>
  );
}

export default LoginCreateUser;
