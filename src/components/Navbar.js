import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate for logout functionality
import './Navbar.css';
import logo from '../assets/knowvana-logo.png';
import profileIcon from '../assets/profile-icon.jpg';

const Navbar = ({ user }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false); // State to handle dropdown visibility
  const navigate = useNavigate(); // To handle logout and navigation
  const dropdownRef = useRef(null); // Reference for the dropdown

  const handleDropdown = () => {
    setDropdownVisible(!dropdownVisible); // Toggle dropdown visibility
  };

  const handleLogout = () => {
    // Clear user session or token, redirect to login
    // Example: localStorage.clear();
    navigate('/login');
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <img src={logo} alt="Knowvana Logo" className="logo" />
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li><Link to="/support">Support</Link></li>
        <li><Link to="/about-us">About Us</Link></li>

        {/* Conditionally render Login or Profile based on user login */}
        {user ? (
          <li className="profile-section" onClick={handleDropdown}>
            <div 
              aria-haspopup="true" 
              aria-expanded={dropdownVisible}
              className="profile-icon-container"
            >
              <img src={profileIcon} alt="Profile" className="profile-icon" />
              <span className="username">{user.username}</span>
            </div>

            {/* Dropdown for profile options */}
            {dropdownVisible && (
              <div className="dropdown" ref={dropdownRef}>
                {user.accountType === 'student' ? (
                  <>
                    <Link to="/grades" onClick={() => setDropdownVisible(false)}>Grades</Link>
                    <Link to="/courses" onClick={() => setDropdownVisible(false)}>Courses</Link>
                    <Link to="/profile" onClick={() => setDropdownVisible(false)}>Profile</Link>
                  </>
                ) : (
                  <>
                    <Link to="/courses" onClick={() => setDropdownVisible(false)}>Courses</Link>
                    <Link to="/profile" onClick={() => setDropdownVisible(false)}>Profile</Link>
                  </>
                )}
                {/* Prevent dropdown from closing on button click */}
                <button 
                  onClick={handleLogout} 
                  style={{ width: '100%', textAlign: 'left' }} // Optional styling for the button
                >
                  Logout
                </button>
              </div>
            )}
          </li>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
