import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home'; // Import Home component

const App = () => {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/home" element={<Home />} /> {/* Home route */}
                    <Route path="/" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
