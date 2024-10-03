import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import pythonImage from '../assets/Introduction-to-Python.jpg'; // Adjust the path as needed
import webDevImage from '../assets/Web-Development-Course.jpg';
import javaImage from '../assets/Java-Course.jpg';

const Dashboard = ({ user }) => {
  // Step 2: Use `useState` to manage username dynamically
  const [username, setUsername] = useState('');

  // Simulating fetching the username from props or API
  useEffect(() => {
    // Assume username is fetched or passed in props. Here it's hardcoded for demonstration.
    const fetchedUsername = "Jagruthi"; // You can replace this with a prop or a context value
    setUsername(fetchedUsername);
  }, []);

  const courses = [
    {
      title: "Introduction to Python Programming",
      subtitle: "Master the fundamentals of Python programming for data analysis and automation.",
      progress: 75,
      profileIcon: "👤",
      imageUrl: pythonImage, // Use imported image
    },
    {
      title: "Web Development Bootcamp (HTML, CSS, JavaScript)",
      subtitle: "Build responsive websites from scratch with essential web technologies.",
      progress: 50,
      profileIcon: "👤",
      imageUrl: webDevImage, // Use imported image
    },
    {
      title: "Java for Beginners",
      subtitle: "Learn object-oriented programming and develop Java applications.",
      progress: 30,
      profileIcon: "👤",
      imageUrl: javaImage, // Use imported image
    },
    // Add more courses as needed...
  ];

  return (
    <div className="dashboard">
      {/* Step 3: Use dynamic username in the welcome message */}
      <h1>Welcome, <span className="student">{user?.username || 'Student'}</span>!</h1>

      <h2>Courses Enrolled</h2>
      <div className="course-list">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            {/* User Profile and Username */}
            <div className="user-profile">
              <span className="profile-icon">{course.profileIcon}</span>
              <span className="username">{username}</span> {/* Display dynamic username */}
            </div>

            {/* Course Image */}
            <img src={course.imageUrl} alt={`${course.title} thumbnail`} className="course-image" />

            {/* Course Details */}
            <h3>{course.title}</h3>
            <p>{course.subtitle}</p>

            {/* Progress Bar */}
            <div className="progress-bar">
              <div className="progress" style={{ width: `${course.progress}%` }}></div>
            </div>
            <p>Progress: {course.progress}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
