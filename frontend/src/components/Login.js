
import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const [accountNumber, setAccountNumber] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Demo login (in real app, this would call backend API)
    if (accountNumber === '1234567890' && pin === '1234') {
      onLogin({
        name: 'Juan Dela Cruz',
        accountNumber: '1234567890',
        balance: 50000.00
      });
    } else {
      setError('Invalid account number or PIN');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="star-icon">⭐</div>
          <h1>STAR MOBILE BANK</h1>
          <p>Banking at your fingertips</p>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Account Number</label>
            <input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder="Enter your account number"
              required
            />
          </div>
          
          <div className="form-group">
            <label>PIN</label>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Enter your PIN"
              maxLength="6"
              required
            />
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <button type="submit" className="login-button">
            Login
          </button>
          
          <div className="demo-info">
            <p>Demo Account:</p>
            <p>Account: 1234567890 | PIN: 1234</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
