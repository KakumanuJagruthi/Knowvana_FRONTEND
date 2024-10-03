// src/components/CreateCourse.js
import React from 'react';
import './CreateCourse.css';

const CreateCourse = () => {
  return (
    <div className="create-course-section">
      <h2>Create a New Course</h2>
      <form>
        <input type="text" placeholder="Enter course title" required />
        <textarea placeholder="Enter course description" required></textarea>
        
        <select required>
          <option value="">Select category</option>
          <option value="programming">Programming</option>
          <option value="design">Design</option>
          <option value="business">Business</option>
        </select>
        
        <select required>
          <option value="">Select level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
        
        <input type="number" placeholder="Enter duration (in hours)" required />
        <input type="file" accept="image/*" required />
        
        <h3>Course Content</h3>
        <div className="module">
          <input type="text" placeholder="Module title" />
          <textarea placeholder="Module description"></textarea>
          <input type="file" accept=".pdf,.doc,.ppt" />
        </div>
        
        <input type="text" placeholder="Enter prerequisites" />
        
        <label>
          <input type="checkbox" />
          Make course public?
        </label>
        
        <button type="submit">Create Course</button>
      </form>
    </div>
  );
};

export default CreateCourse;
