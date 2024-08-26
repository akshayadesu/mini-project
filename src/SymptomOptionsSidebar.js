import React from 'react';
import './SymptomsCheck.css';

const SymptomOptionsSidebar = ({ selectedCategory, handleSymptomAdd, handleBackToCategories, closeSidebar }) => {
  const symptomOptions = {
    General: ['Fever', 'Fatigue', 'Nausea'],
    Skin: ['Rash', 'Itching', 'Dry Skin'],
    Head: ['Headache', 'Dizziness', 'Blurred Vision'],
    Nose: ['Runny Nose', 'Sneezing', 'Nasal Congestion'],
    // Add more categories and options
  };

  return (
    <div className={`sidebar right open`}>
      <div className="sidebar-header">
        <button className="back-btn" onClick={handleBackToCategories}>←</button>
        <h3>{selectedCategory} Symptoms</h3>
        <button className="close-btn" onClick={closeSidebar}>X</button>
      </div>
      <ul>
        {symptomOptions[selectedCategory]?.map((symptom, index) => (
          <li key={index}>
            {symptom}
            <button onClick={() => handleSymptomAdd(symptom)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SymptomOptionsSidebar;
