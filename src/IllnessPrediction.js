// import React from 'react';
// import { useLocation } from 'react-router-dom'; // or Next.js useRouter for Next.js

// const IllnessPrediction = () => {
//   const location = useLocation(); // For getting state passed from SymptomsCheck
//   const { age, gender, symptoms } = location.state || {}; // Get user details

//   const predictIllness = (symptoms) => {
//     // Here you can have logic for predicting the illness based on symptoms
//     // For demonstration, let's assume a simple condition
//     if (symptoms.includes('Fever') && symptoms.includes('Cough')) {
//       return 'Flu';
//     } else if (symptoms.includes('Headache')) {
//       return 'Migraine';
//     } else {
//       return 'Consult a doctor for further diagnosis.';
//     }
//   };

//   const predictedIllness = predictIllness(symptoms);

//   return (
//     <div className="illness-prediction-container">
//       <h2>Illness Prediction</h2>
//       <p>Age: {age}</p>
//       <p>Gender: {gender}</p>
//       <p>Symptoms: {symptoms.join(', ')}</p>
//       <h3>Possible Illness: {predictedIllness}</h3>
//     </div>
//   );
// };

// export default IllnessPrediction;

import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const IllnessPrediction = () => {
  const location = useLocation();
  const { illness } = location.state || { illness: 'Unknown Illness' };

  return (
    <div className="results-page">
        <Navbar/>
      <h2>Your Diagnosis</h2>
      <p>Based on the symptoms provided, you may have: <strong>{illness}</strong></p>
    </div>
  );
};

export default IllnessPrediction;

