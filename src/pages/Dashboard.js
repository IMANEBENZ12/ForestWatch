import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import locationWeatherImage from '../assets/Forest.png';
import safetyImage from '../assets/safety.png';
import communityChatImage from '../assets/chat.png';
import emergencyContactImage from '../assets/emergency.png';
import GameImage from '../assets/GameImage.png';
import SearchBar from './SearchBar';
import Chatbot from './chat';

const cardData = [
    {
        id: 1,
        image: locationWeatherImage,
        title: 'Location Weather',
        description: 'Real-time weather updates for your location',
        link: 'http://10.126.88.164/', 
    },
    {
        id: 3,
        image: safetyImage,
        title: 'Safety Guidance',
        description: 'Essential safety tips and guidelines',
        link: '/safety-guidance'  // Added link for Safety Guidance
    },
    {
        id: 4,
        image: communityChatImage,
        title: 'Community Chat',
        description: 'Connect and share with the community',
        link:'/community-chat'
    },
    {
        id: 5,
        image: emergencyContactImage,
        title: 'Emergency Contact',
        description: 'Quick access to emergency contacts!',
        link:'/emergency-contact'
    },
    {
        id: 6,
        image: GameImage,
        title: 'Game',
        description: 'Play to Donate!',
        link:'/Color-Matching'
    },
];

const Dashboard = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Filter cards based on the search term
    const filteredCards = cardData.filter((card) =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleCardClick = (card) => {
        if (card.link) {
            // Navigate to the specified link for the card
            window.open(card.link, '_blank');
        }
    };

    return (
        <div className="dashboard-container">
            {/* Search Bar */}
            <SearchBar onSearch={(term) => setSearchTerm(term)} />

            {/* Dashboard Title */}
            <div className="dashboard-header">
                <h1>Dashboard</h1>
            </div>

            {/* Profile Image */}
            <div className="profile-picture">
                <Link to="/profile">
                <img
                src="https://thumbs.dreamstime.com/b/icon-profile-color-green-icon-profile-color-green-circle-color-dark-green-background-color-white-194702090.jpg" 
                alt="Profile"
              />
                </Link>
            </div>

            {/* Conditional Layout for Cards */}
            <div className="dashboard-grid">
                {searchTerm && filteredCards.length > 0 ? (
                    <div className="filtered-card">
                        <div
                            className="dashboard-card"
                            onClick={() => handleCardClick(filteredCards[0])}
                        >
                            <img
                                src={filteredCards[0].image}
                                alt={filteredCards[0].title}
                            />
                            <h2>{filteredCards[0].title}</h2>
                            <p>{filteredCards[0].description}</p>
                        </div>
                    </div>
                ) : (
                    cardData.map((card) => (
                        <div
                            className="dashboard-card"
                            key={card.id}
                        >
                            {card.link && card.title === 'Safety Guidance' ? (
                                <Link to={card.link}>
                                    <img src={card.image} alt={card.title} />
                                    <h2>{card.title}</h2>
                                    <p>{card.description}</p>
                                </Link>
                            ) : (
                                <div
                                    className="card-content"
                                    onClick={() => handleCardClick(card)}
                                >
                                    <img src={card.image} alt={card.title} />
                                    <h2>{card.title}</h2>
                                    <p>{card.description}</p>
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Dashboard;
