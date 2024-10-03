import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './LoginPage.css';
import knowvanaLogo from '../assets/knowvana-logo.png'; // Import the logo

const LoginPage = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [accountType, setAccountType] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleLogin = (e) => {
    e.preventDefault();

    if (accountType === 'educator') {
      setUser({ username, accountType }); // Set user details after login
      navigate('/educatordashboard');
    } else if (accountType === 'student') {
      setUser({ username, accountType }); // Set user details after login
      navigate('/studentdashboard');
    } else {
      alert('Please select an account type');
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        {/* Knowvana Logo at the center */}
        <img src={knowvanaLogo} alt="Knowvana Logo" className="knowvana-logo" />
        
        {/* Knowvana Account Login Heading */}
        <h2>Knowvana Account Login</h2>
        
        <form onSubmit={handleLogin}>
          {/* Username Input */}
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Email Input */}
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Account Type Dropdown */}
          <div className="input-group">
            <label>Account Type</label>
            <select
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              required
            >
              <option value="">Select account type</option>
              <option value="educator">Educator</option>
              <option value="student">Student</option>
            </select>
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        <div className="login-footer">
          <p>Don't have an account? <a href="/">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
