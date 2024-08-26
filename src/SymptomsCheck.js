// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // For React Router, or use Next.js Router
// import './SymptomsCheck.css';
// import SymptomOptionsSidebar from './SymptomOptionsSidebar';

// const SymptomsCheck = () => {
//   const [showSymptomSidebar, setShowSymptomSidebar] = useState(false);
//   const [showOptionsSidebar, setShowOptionsSidebar] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [age, setAge] = useState('');
//   const [gender, setGender] = useState('');
//   const [selectedSymptoms, setSelectedSymptoms] = useState([]);
//   const [customSymptom, setCustomSymptom] = useState('');

//   const navigate = useNavigate(); // For navigating to another page

//   const openSymptomSidebar = () => {
//     setShowSymptomSidebar(true);
//     setShowOptionsSidebar(false);
//   };

//   const closeSidebar = () => {
//     setShowSymptomSidebar(false);
//     setShowOptionsSidebar(false);
//   };

//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category);
//     setShowSymptomSidebar(false);
//     setShowOptionsSidebar(true);
//   };

//   const handleSymptomAdd = (symptom) => {
//     if (!selectedSymptoms.includes(symptom)) {
//       setSelectedSymptoms([...selectedSymptoms, symptom]);
//     }
//   };

//   const handleSymptomRemove = (symptomToRemove) => {
//     setSelectedSymptoms(
//       selectedSymptoms.filter((symptom) => symptom !== symptomToRemove)
//     );
//   };

//   const handleBackToCategories = () => {
//     setShowSymptomSidebar(true);
//     setShowOptionsSidebar(false);
//   };

//   const handleCustomSymptomAdd = () => {
//     if (customSymptom.trim() !== '' && !selectedSymptoms.includes(customSymptom)) {
//       setSelectedSymptoms([...selectedSymptoms, customSymptom]);
//       setCustomSymptom('');
//     }
//   };

//   const handleSubmit = () => {
//     const userDetails = {
//       age,
//       gender,
//       symptoms: selectedSymptoms,
//     };

//     // Navigate to the IllnessPrediction component with user details
//     navigate('/illness-prediction', { state: userDetails });
//   };

//   return (
//     <div className="symptom-entry-container">
//       <h2>Enter Your Symptoms Here</h2>

//       <div className="form-group-container">
//         <div className="form-group">
//           <label htmlFor="age">Age:</label>
//           <input
//             type="number"
//             id="age"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//             placeholder="Enter your age"
//             min="1"
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="gender">Gender:</label>
//           <select
//             id="gender"
//             value={gender}
//             onChange={(e) => setGender(e.target.value)}
//           >
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>
//       </div>

//       <button className="add-symptoms-btn" onClick={openSymptomSidebar}>
//         Select your Symptoms
//       </button>

//       <div className="custom-symptom-entry">
//         <input
//           type="text"
//           value={customSymptom}
//           onChange={(e) => setCustomSymptom(e.target.value)}
//           placeholder="Enter your symptom"
//         />
//         <button onClick={handleCustomSymptomAdd}>Add Symptom</button>
//       </div>

//       <div className="selected-symptoms">
//         <h3>Selected Symptoms</h3>
//         <ul>
//           {selectedSymptoms.map((symptom, index) => (
//             <li key={index}>
//               {symptom}
//               <button onClick={() => handleSymptomRemove(symptom)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className={`sidebar right ${showSymptomSidebar ? 'open' : ''}`}>
//         <div className="sidebar-header">
//           <h3>Choose Symptoms</h3>
//           <button className="close-btn" onClick={closeSidebar}>X</button>
//         </div>
//         <ul>
//           <li onClick={() => handleCategorySelect('General')}>General</li>
//           <li onClick={() => handleCategorySelect('Skin')}>Skin</li>
//           <li onClick={() => handleCategorySelect('Head')}>Head</li>
//           <li onClick={() => handleCategorySelect('Nose')}>Nose</li>
//           {/* Add other categories */}
//         </ul>
//       </div>

//       {selectedCategory && showOptionsSidebar && (
//         <SymptomOptionsSidebar
//           selectedCategory={selectedCategory}
//           handleSymptomAdd={handleSymptomAdd}
//           handleBackToCategories={handleBackToCategories}
//           closeSidebar={closeSidebar}
//         />
//       )}

//       {(showSymptomSidebar || showOptionsSidebar) && (
//         <div className="sidebar-overlay visible" onClick={closeSidebar}></div>
//       )}

//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// };

// export default SymptomsCheck;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom
import './SymptomsCheck.css';
import SymptomOptionsSidebar from './SymptomOptionsSidebar';

const SymptomsCheck = () => {
  const [showSymptomSidebar, setShowSymptomSidebar] = useState(false);
  const [showOptionsSidebar, setShowOptionsSidebar] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [customSymptom, setCustomSymptom] = useState('');

  const navigate = useNavigate();  // Initialize useNavigate

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
    const lowerCaseSymptom = symptom.toLowerCase();
    if (!selectedSymptoms.some((s) => s.toLowerCase() === lowerCaseSymptom)) {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const handleSymptomRemove = (symptomToRemove) => {
    setSelectedSymptoms(
      selectedSymptoms.filter((symptom) => symptom.toLowerCase() !== symptomToRemove.toLowerCase())
    );
  };

  const handleBackToCategories = () => {
    setShowSymptomSidebar(true);
    setShowOptionsSidebar(false);
  };

  const handleCustomSymptomAdd = () => {
    const lowerCaseCustomSymptom = customSymptom.toLowerCase();
    if (customSymptom.trim() !== '' && !selectedSymptoms.some((s) => s.toLowerCase() === lowerCaseCustomSymptom)) {
      setSelectedSymptoms([...selectedSymptoms, customSymptom]);
      setCustomSymptom(''); // Clear the input field after adding the symptom
    }
  };

  const submitSymptoms = () => {
    // Convert selected symptoms to lowercase for comparison
    const lowerCaseSelectedSymptoms = selectedSymptoms.map((symptom) => symptom.toLowerCase());

    // Simulated illness detection based on symptoms
    let illness = 'Unknown Illness';

    if (lowerCaseSelectedSymptoms.includes('fever') && lowerCaseSelectedSymptoms.includes('cough')) {
      illness = 'Common Cold';
    } else if (lowerCaseSelectedSymptoms.includes('headache') && lowerCaseSelectedSymptoms.includes('nausea')) {
      illness = 'Migraine';
    } else if (lowerCaseSelectedSymptoms.includes('rash') && lowerCaseSelectedSymptoms.includes('itching')) {
      illness = 'Skin Allergy';
    }

    // Navigate to the illness-prediction page with the detected illness
    navigate('/illness-prediction', { state: { illness } });
  };

  return (
    <div className="symptom-entry-container">
      <h2>Enter Your Symptoms Here</h2>

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
        Select your Symptoms
      </button>

      {/* Field to allow user to enter their own symptom */}
      <div className="custom-symptom-entry">
        <input
          type="text"
          value={customSymptom}
          onChange={(e) => setCustomSymptom(e.target.value)}
          placeholder="Enter your symptom"
        />
        <button onClick={handleCustomSymptomAdd}>Add Symptom</button>
      </div>

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
          <h3>Choose Symptoms</h3>
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

      <button onClick={submitSymptoms}>Submit</button>
    </div>
  );
};

export default SymptomsCheck;
