import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import logo from "./assets/logo.png";

const Home = () => {
    const navigate = useNavigate();
    const [showChatbot, setShowChatbot] = useState(false); // Toggle chatbot visibility
    const [messages, setMessages] = useState([]); // Store chat messages
    const [input, setInput] = useState(""); // User input

    const handleProfileClick = () => {
        navigate("/signup"); // Redirect to the signup page
    };

    const toggleChatbot = () => {
        setShowChatbot((prev) => !prev);
    };

    // Function to handle OpenAI API requests
    const handleSendMessage = async () => {
        if (!input.trim()) return;

        const newMessages = [...messages, { sender: "user", text: input }];
        setMessages(newMessages); // Add user message

        try {
            const response = await axios.post(
                "https://api.openai.com/v1/chat/completions",
                {
                    model: "gpt-3.5-turbo",
                    messages: [
                        ...newMessages.map((msg) => ({
                            role: msg.sender === "user" ? "user" : "assistant",
                            content: msg.text,
                        })),
                        {
                            role: "system",
                            content: "You are a helpful chatbot providing answers about community guidelines in Arabic, French, and English.",
                        },
                    ],
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer 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`, // Replace with your OpenAI API key
                    },
                }
            );

            const botReply = response.data.choices[0].message.content;
            setMessages([...newMessages, { sender: "bot", text: botReply }]);
        } catch (error) {
            console.error("Error with OpenAI API:", error);
            setMessages([...newMessages, { sender: "bot", text: "Sorry, I couldn't process your request." }]);
        }

        setInput(""); // Clear input field
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
                {/* Add your cards */}
            </div>

            {/* Chatbot Floating Button */}
            <div className="chatbot-container">
                <button className="chatbot-toggle-btn" onClick={toggleChatbot}>
                    💬
                </button>
                {showChatbot && (
                    <div className="chatbot-window">
                        <div className="chatbot-messages">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={
                                        msg.sender === "user"
                                            ? "chatbot-message-user"
                                            : "chatbot-message-bot"
                                    }
                                >
                                    {msg.text}
                                </div>
                            ))}
                        </div>
                        <div className="chatbot-input">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask about community guidelines..."
                            />
                            <button onClick={handleSendMessage}>Send</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
