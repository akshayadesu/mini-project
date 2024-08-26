import React from 'react';
import './SymptomsCheck.css';

const SymptomSidebar = ({ selectedCategory, closeSidebar }) => {
  const symptomOptions = {
    General: ['Fever', 'Fatigue', 'Nausea'],
    Skin: ['Rash', 'Itching', 'Dry Skin'],
    Head: ['Headache', 'Dizziness', 'Blurred Vision'],
    Nose: ['Runny Nose', 'Sneezing', 'Nasal Congestion'],
    // Add more categories and options
  };

  return (
    <div className={`sidebar left open`}>
      <h3>{selectedCategory} Symptoms</h3>
      <ul>
        {symptomOptions[selectedCategory]?.map((symptom, index) => (
          <li key={index}>
            {symptom}
            <button>Add</button> {/* Handle adding the symptom to the list */}
          </li>
        ))}
      </ul>
      <button className="close-btn" onClick={closeSidebar}>
        Close
      </button>
    </div>
  );
};

export default SymptomSidebar;
