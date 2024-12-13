import React, { useState, useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import locationWeatherImage from '../assets/Forest.png';
import safetyImage from '../assets/safety.png';
import communityChatImage from '../assets/chat.png';
import emergencyContactImage from '../assets/emergency.png';
import GameImage from '../assets/GameImage.png';
import SearchBar from './SearchBar';




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
    const Chatbot = () => {
        const [isChatOpen, setIsChatOpen] = useState(false);
        const [userInput, setUserInput] = useState("");
        const [chatHistory, setChatHistory] = useState([
            { type: "bot", text: "Hi! How can I assist you today?" },
        ]);
        const chatRef = useRef(null);
        const handleToggleChat = () => {
            setIsChatOpen((prev) => !prev);
        };
    
        const handleInputChange = (e) => {
            setUserInput(e.target.value);
        };
    
        const handleSend = () => {
            if (!userInput.trim()) return;
    
            // Add user message to chat history
            setChatHistory((prev) => [...prev, { type: "user", text: userInput }]);
    
            // Determine bot response based on input
            const botResponse = getBotResponse(userInput);
    
            // Add bot response to chat history
            setChatHistory((prev) => [...prev, { type: "bot", text: botResponse }]);
    
            // Clear input field
            setUserInput("");
        };
    
        const getBotResponse = (input) => {
            const faq = [
                { question: "What are the community guidelines for organizing hikes?", answer: "Follow the principles of Leave No Trace, respect local laws, and ensure safety measures are in place." },
                { question: "Can I invite people to join my hike?", answer: "Yes, you can create an event on the platform, and others can join it." },
                { question: "How can I check the temperature in the forest?", answer: "The app provides real-time temperature data for the selected forest area." },
                { question: "How does the app notify firefighters in case of high temperatures?", answer: "The app automatically sends alerts to local firefighting services if the temperature exceeds a critical threshold." },
                { question: "How do I create a hike event?", answer: "Navigate to the 'Organize Hike' section, fill in the details, and publish your event." },
                { question: "Can I cancel a hike event I created?", answer: "Yes, you can cancel your event through the 'My Events' section." },
                { question: "How do I join an existing hike?", answer: "Browse the 'Available Hikes' section, select a hike, and click 'Join.'" },
                { question: "What safety measures should I follow while hiking?", answer: "Carry sufficient water, wear appropriate gear, and inform someone about your route and expected return time." },
                { question: "Does the app provide emergency contact information?", answer: "Yes, the app includes a list of emergency contacts for the area." },
                { question: "What is the main purpose of the app?", answer: "To help users organize hikes, join hiking events, and monitor environmental conditions like temperature and humidity." },
                { question: "Is the app free to use?", answer: "Yes, the app is free with optional premium features." },
            ];
    
            const response = faq.find((item) =>
                input.toLowerCase().includes(item.question.toLowerCase())
            );
    
            return response ? response.answer : "I'm sorry, I don't have an answer for that. Please try asking something else.";
        };
        useEffect(() => {
            const handleClickOutside = (event) => {
                if (chatRef.current && !chatRef.current.contains(event.target)) {
                    setIsChatOpen(false);
                }
            };
    
            if (isChatOpen) {
                document.addEventListener("mousedown", handleClickOutside);
            }
    
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [isChatOpen]);
    
        
        return (
            <div className="chatbot-container">
                {/* Only show the toggle button when the chat is not open */}
                {!isChatOpen && (
                    <button className="chatbot-toggle-btn" onClick={handleToggleChat}></button>
                )}
    
                {isChatOpen && (
                    <div className="chatbot-window">
                        <div className="chat-history">
                            {chatHistory.map((message, index) => (
                                <div
                                    key={index}
                                    className={
                                        message.type === "bot"
                                            ? "chat-message bot"
                                            : "chat-message user"
                                    }
                                >
                                    {message.text}
                                </div>
                            ))}
                        </div>
                        <div className="chat-input">
                            <input
                                type="text"
                                value={userInput}
                                onChange={handleInputChange}
                                placeholder="Type your question here..."
                            />
                            <button onClick={handleSend}>Send</button>
                        </div>
                    </div>
                )}
            </div>
        );
    };
};

export default Dashboard;
