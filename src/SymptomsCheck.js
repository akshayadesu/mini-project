import React, { useState } from 'react';
import './SymptomsCheck.css';
import SymptomOptionsSidebar from './SymptomOptionsSidebar';

const SymptomsCheck = () => {
  const [showSymptomSidebar, setShowSymptomSidebar] = useState(false);
  const [showOptionsSidebar, setShowOptionsSidebar] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const openSymptomSidebar = () => {
    setShowSymptomSidebar(true);
    setShowOptionsSidebar(false);
  };

  const closeSidebar = () => {
    setShowSymptomSidebar(false);
    setShowOptionsSidebar(false);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowSymptomSidebar(false);
    setShowOptionsSidebar(true);
  };

  const handleSymptomAdd = (symptom) => {
    if (!selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const handleSymptomRemove = (symptomToRemove) => {
    setSelectedSymptoms(
      selectedSymptoms.filter((symptom) => symptom !== symptomToRemove)
    );
  };

  const handleBackToCategories = () => {
    setShowSymptomSidebar(true);
    setShowOptionsSidebar(false);
  };

  return (
    <div className="symptom-entry-container">
      <h2>Symptom Entry</h2>

<div className="form-group-container">
  <div className="form-group">
    <label htmlFor="age">Age:</label>
    <input
      type="number"
      id="age"
      value={age}
      onChange={(e) => setAge(e.target.value)}
      placeholder="Enter your age"
      min="1"
    />
  </div>

  <div className="form-group">
    <label htmlFor="gender">Gender:</label>
    <select
      id="gender"
      value={gender}
      onChange={(e) => setGender(e.target.value)}
    >
      <option value="">Select Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </select>
  </div>
</div>
 <button className="add-symptoms-btn" onClick={openSymptomSidebar}>
        Add Symptoms
      </button>

      {/* Displaying Selected Symptoms */}
      <div className="selected-symptoms">
        <h3>Selected Symptoms</h3>
        <ul>
          {selectedSymptoms.map((symptom, index) => (
            <li key={index}>
              {symptom}
              <button onClick={() => handleSymptomRemove(symptom)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Symptom Sidebar (Category Selection) */}
      <div className={`sidebar right ${showSymptomSidebar ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h3>Select a Category</h3>
          <button className="close-btn" onClick={closeSidebar}>X</button>
        </div>
        <ul>
          <li onClick={() => handleCategorySelect('General')}>General</li>
          <li onClick={() => handleCategorySelect('Skin')}>Skin</li>
          <li onClick={() => handleCategorySelect('Head')}>Head</li>
          <li onClick={() => handleCategorySelect('Nose')}>Nose</li>
          {/* Add other categories */}
        </ul>
      </div>

      {/* Symptom Options Sidebar (Symptoms under the selected category) */}
      {selectedCategory && showOptionsSidebar && (
        <SymptomOptionsSidebar
          selectedCategory={selectedCategory}
          handleSymptomAdd={handleSymptomAdd}
          handleBackToCategories={handleBackToCategories}
          closeSidebar={closeSidebar}
        />
      )}

      {(showSymptomSidebar || showOptionsSidebar) && (
        <div className="sidebar-overlay visible" onClick={closeSidebar}></div>
      )}

      <button>Submit</button>
    </div>
  );
};

export default SymptomsCheck;
