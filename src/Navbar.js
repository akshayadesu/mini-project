import React from 'react';
import './Navbar.css';
const Navbar = () => {
    return (
        <div>
             <nav className="navbar">
                <div className="logo">Disease-Prediction-System</div>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="/signup">SignUp</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;