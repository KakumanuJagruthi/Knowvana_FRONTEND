// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard'; // Main Dashboard component
import Navbar from './components/Navbar'; // Import Navbar
import EducatorDashboard from './components/EducatorDashboard'; // Import Educator Dashboard
import CreateCourse from './components/CreateCourse';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';

function App() {
  const [user, setUser] = useState(null); // State to store user details
  return (
    <Router>
      <Navbar user={user} /> {/* Navbar will be displayed on every page */}
      <Routes>
      <Route path="/educatordashboard" element={<EducatorDashboard user={user} />} />
      <Route path="/studentdashboard" element={<Dashboard user={user} />} />
        <Route path="/create-course" element={<CreateCourse />} />
        <Route path="/" element={<SignupPage setUser={setUser} />} />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
