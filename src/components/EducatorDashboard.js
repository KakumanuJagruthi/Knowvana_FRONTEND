// src/components/EducatorDashboard.js
import React from 'react';
import './EducatorDashboard.css';
import { Link } from 'react-router-dom';
// Import images
import pythonImage from '../assets/Introduction-to-Python.jpg'; // Adjust the path as needed
import webDevImage from '../assets/Web-Development-Course.jpg';
import javaImage from '../assets/Java-Course.jpg';

const EducatorDashboard = ({ user }) => {
    const students = [
        { name: 'Atul', id: '2345', averageScore: 85, completedAssignments: 10 },
        { name: 'Spandana', id: '2346', averageScore: 75, completedAssignments: 8 },
        { name: 'Priya', id: '2347', averageScore: 90, completedAssignments: 10 },
        // Add more students as needed...
      ];
  return (
    <div className="educator-dashboard">
      <h1>Welcome, <span className="educator">{user?.username || 'Educator'}</span>!</h1> {/* Wrap "Educator" in a span */}
      <div className="dashboard-content">
        {/* Section to Create a New Course */}
        <div className="section create-course">
          <h2>Create a New Course</h2>
          <Link to="/create-course">
            <button>Create Course</button>
          </Link>
        </div>

        {/* Section to Manage Existing Courses */}
        <div className="section manage-courses">
          <h2>Manage Your Courses</h2>
          <ul>
            <li>
              <img src={pythonImage} alt="Python" className="course-image" /> {/* Course image */}
              Introduction to Python Programming - <button>Manage</button>
            </li>
            <li>
              <img src={webDevImage} alt="Web Development" className="course-image" /> {/* Course image */}
              Web Development Bootcamp (HTML, CSS, JavaScript) - <button>Manage</button>
            </li>
            <li>
              <img src={javaImage} alt="Java" className="course-image" /> {/* Course image */}
              Java for Beginners - <button>Manage</button>
            </li>
          </ul>
        </div>

        {/* Section for Assignments */}
        <div className="section view-assignments">
          <h2>View and Grade Assignments</h2>
          <ul>
            <li>Assignment 1 - <button>Grade</button></li>
            <li>Assignment 2 - <button>Grade</button></li>
            <li>Assignment 3 - <button>Grade</button></li>
          </ul>
        </div>

        {/* Section for Assessing Student Performance */}
        <div className="section student-performance">
          <h2>Assess Student Performance</h2>
          <p>Review student progress and analytics</p>
          <table className="performance-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Id</th>
                <th>Average Score</th>
                <th>Completed Assignments</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.id}</td>
                  <td>{student.averageScore}%</td>
                  <td>{student.completedAssignments}</td>
                  <td><button>View Details</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <button>Export Performance Data</button>
        </div>
      </div>
    </div>
  );
};

export default EducatorDashboard;
