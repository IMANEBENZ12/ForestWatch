import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import logo from './assets/logo.png';

const Home = () => {
    const navigate = useNavigate();

    const handleProfileClick = () => {
        navigate("/signup"); // Redirect to the signup page
    };

    return (
        <div className="home-container">
            {/* Logo and Search Bar */}
            <div className="header">
            <img src={logo} alt="Logo" className="auth-logo" />
                <input
                    type="text"
                    placeholder="Search here..."
                    className="search-bar"
                />
                <button className="profile-btn" onClick={handleProfileClick}>
                    <img
                        src="profile-icon.png" // Replace with your profile icon path
                        alt="Profile"
                        className="profile-icon"
                    />
                </button>
            </div>

            {/* Card Grid */}
            <div className="card-grid">
                <div className="card">
                    <img
                        src="location-weather.jpg" // Replace with your image path
                        alt="Location Weather"
                        className="card-image"
                    />
                    <div className="card-content">
                        <h3>Location Weather</h3>
                        <p>Description</p>
                    </div>
                </div>

                <div className="card">
                    <img
                        src="alerts.jpg" // Replace with your image path
                        alt="Alerts & Notifications"
                        className="card-image"
                    />
                    <div className="card-content">
                        <h3>Alerts & Notifications</h3>
                        <p>Description</p>
                    </div>
                </div>

                <div className="card">
                    <img
                        src="safety-guidance.jpg" // Replace with your image path
                        alt="Safety Guidance"
                        className="card-image"
                    />
                    <div className="card-content">
                        <h3>Safety Guidance</h3>
                        <p>Description</p>
                    </div>
                </div>

                <div className="card">
                    <img
                        src="community-chat.jpg" // Replace with your image path
                        alt="Community Chat"
                        className="card-image"
                    />
                    <div className="card-content">
                        <h3>Community Chat</h3>
                        <p>Description</p>
                    </div>
                </div>

                <div className="card">
                    <img
                        src="emergency-contact.jpg" // Replace with your image path
                        alt="Emergency Contact"
                        className="card-image"
                    />
                    <div className="card-content">
                        <h3>Emergency Contact</h3>
                        <p>Description</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

