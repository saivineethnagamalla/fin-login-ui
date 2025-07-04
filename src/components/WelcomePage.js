import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css'; // Make sure this CSS file exists

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <h1>Welcome to Financial World </h1>
        <p>Please choose an option to continue:</p>
        <div className="button-group">
          <button onClick={() => navigate('/login')}>Login</button>
          <button onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
