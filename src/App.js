import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import IllnessPrediction from './IllnessPrediction';

const App = () => {
  return (
    <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/illness-prediction' element={<IllnessPrediction/>}/>
            </Routes>        
        </BrowserRouter>
  );
};

export default App;