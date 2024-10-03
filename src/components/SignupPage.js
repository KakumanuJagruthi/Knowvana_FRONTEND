// src/components/SignupPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './SignupPage.css'; // Create a corresponding CSS file
import welcomeImage from '../assets/welcome-image.png'; // Replace with your image path

const SignupPage = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState('');
  
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleSignup = (e) => {
    e.preventDefault();
    
    // Create a user object
    const userDetails = { username, email, password, accountType };
    setUser(userDetails); // Set user details in the parent component state

    // Navigate to the appropriate dashboard based on account type
    if (accountType === 'educator') {
      navigate('/educatordashboard'); // Navigate to educator dashboard
    } else if (accountType === 'student') {
      navigate('/studentdashboard'); // Navigate to student dashboard
    }
  };

  return (
    <div className="signup-page">
      <div className="welcome-section">
        <h1>Welcome to Knowvana</h1>
        <p>Empowering learners through personalized courses</p>
        <img src={welcomeImage} alt="Empowering Learners" className="welcome-image" />
        <ul>
          <li>✔️ Personalized Courses – Tailored to your learning style.</li>
          <li>✔️ 24/7 Support – Assistance whenever you need it.</li>
          <li>✔️ Mobile Access – Learn on any device, anytime.</li>
        </ul>
      </div>

      <div className="signup-form-section">
        <h2>Create Your Account</h2>
        <form onSubmit={handleSignup}>
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

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
