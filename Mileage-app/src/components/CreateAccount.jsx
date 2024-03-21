import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateAccount.css';

function CreateAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleCreateAccount = (e) => {
    e.preventDefault();
    // Add your create account logic here
    console.log("Creating account with:", email, password);
    // Redirect to login page after account creation
    navigate('/login');
  };

  return (
    <div className="CreateAccount">
      <div className="create-account-container">
        <h2>Create Account</h2>
        <form onSubmit={handleCreateAccount}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
