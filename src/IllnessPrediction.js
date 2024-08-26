import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './IllnessPrediction.css';

const IllnessPrediction = () => {
  const location = useLocation(); // Get the state passed from SymptomsCheck component
  const navigate = useNavigate();
  const { illness } = location.state || {}; // Destructure the illness from the state object

  const handleBackToHome = () => {
    navigate('/'); // Navigate back to the home page
  };

  return (
    <div className="illness-prediction-container">
      <h2>Illness Prediction Result</h2>
      {illness ? (
        <p className="illness-result">Based on your symptoms, the predicted illness is: <strong>{illness}</strong></p>
      ) : (
        <p className="illness-result">No illness prediction available. Please go back and enter your symptoms.</p>
      )}
      <button className="back-home-btn" onClick={handleBackToHome}>
        Back to Home
      </button>
    </div>
  );
};

export default IllnessPrediction;

