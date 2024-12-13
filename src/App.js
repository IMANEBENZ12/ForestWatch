import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom'; // Import Link
import Login from './Login';
import Signup from './Signup';
import Dashboard from './pages/Dashboard'; 
import Profile from './pages/Profile';
import SafetyGuidance from './pages/Safety';  
import logo from './assets/logo.png'; 
import ColorMatchingGame from './pages/ColorMatchingGame';
import EmergencyContact from './pages/emergency';  
import CommunityChat from './pages/chat';  


const Header = () => {
    const location = useLocation();

    return (
        <header className="app-header">
            <Link to="/dashboard"> {/* Wrap logo with Link to navigate to Dashboard */}
                <img src={logo} alt="Logo" className="logo" />
            </Link>
        </header>
    );
};

const App = () => {
    return (
        <Router>
            <div className="app">
                {/* Render the header */}
                <Header />

                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/home" element={<Home />} /> {/* Home route */}
                    <Route path="/" element={<Login />} /> {/* Default route */}
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} /> {/* Profile route */}
                    <Route path="/safety-guidance" element={<SafetyGuidance />} /> {/* Safety Guidance route */}
                    <Route path="*" element={<Login />} /> {/* Fallback route */}
                    <Route path="/Color-Matching" element={<ColorMatchingGame />}/>
                    <Route path="emergency-contact" element={<EmergencyContact />} /> {/* Safety Guidance route */}
                    <Route path="community-chat" element={<CommunityChat />} /> {/* Safety Guidance route */}

                </Routes>
            </div>
        </Router>
    );
};

export default App;
