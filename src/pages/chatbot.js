import React, { useState, useEffect, useRef } from 'react'; // Corrected import
import './chatbot.css'; // Adjust the path as necessary

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

export default Chatbot;
