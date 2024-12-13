import React from 'react';
import './Dashboard.css'; // Ensure you have a CSS file for styling
import locationWeatherImage from '../assets/Forest.png'; // Correct relative path to assets folder
import alertsImage from '../assets/alerts.png'; 
import safetyImage from '../assets/safety.png'; 
import communityChatImage from '../assets/chat.png'; 
import emergencyContactImage from '../assets/emergency.png'; 

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Dashboard</h1>
            </div>
            <div className="dashboard-grid">
                {/* Card 1 */}
                <div className="dashboard-card">
                    <img src={locationWeatherImage} alt="Location Weather" />
                    <h2>Location Weather</h2>
                    <p>Real-time weather updates for your location</p>
                </div>
                {/* Card 2 */}
                <div className="dashboard-card">
                    <img src={alertsImage} alt="Alerts & Notifications" />
                    <h2>Alerts & Notifications</h2>
                    <p>Stay informed with important alerts!</p>
                </div>
                {/* Card 3 */}
                <div className="dashboard-card">
                    <img src={safetyImage} alt="Safety Guidance" />
                    <h2>Safety Guidance</h2>
                    <p>Essential safety tips and guidelines</p>
                </div>
                {/* Card 4 */}
                <div className="dashboard-card">
                    <img src={communityChatImage} alt="Community Chat" />
                    <h2>Community Chat</h2>
                    <p>Connect and share with the community</p>
                </div>
                {/* Card 5 */}
                <div className="dashboard-card">
                    <img src={emergencyContactImage} alt="Emergency Contact" />
                    <h2>Emergency Contact</h2>
                    <p>Quick access to emergency contacts!</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
