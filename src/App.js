import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home'; // Import Home component
import Dashboard from './pages/Dashboard'; // Adjust the path based on where Dashboard.js is located
import logo from './assets/logo.png'; // Import logo image
import { FaSearch } from 'react-icons/fa'; // Import search icon from react-icons

const App = () => {
    return (
        <Router>
            <div className="app">
                {/* Logo positioned in the top-left corner */}
                <img src={logo} alt="Logo" className="logo" />

                {/* Search Bar with icon on the right */}
                <div className="search-container">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search here..."
                    />
                    <FaSearch className="search-icon" />
                </div>

                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/home" element={<Home />} /> {/* Home route */}
                    <Route path="/" element={<Login />} /> {/* Default route */}
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="*" element={<Login />} /> {/* Fallback route */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
