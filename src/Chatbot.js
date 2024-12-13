import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleSend = async () => {
    if (!userInput.trim()) return;

    setMessages((prevMessages) => [...prevMessages, { sender: "user", text: userInput }]);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: userInput }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer YOUR_OPENAI_API_KEY`,
          },
        }
      );

      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: response.data.choices[0].message.content },
      ]);
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "Sorry, something went wrong. Please try again." },
      ]);
    }

    setUserInput("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto", border: "1px solid #ccc" }}>
      <h2>Chatbot</h2>
      <div style={{ border: "1px solid #eee", padding: "10px", height: "300px", overflowY: "auto" }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ margin: "10px 0", textAlign: msg.sender === "user" ? "right" : "left" }}>
            <strong>{msg.sender === "user" ? "You" : "Bot"}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        style={{ width: "calc(100% - 60px)", padding: "10px", margin: "10px 0" }}
        placeholder="Type your message..."
      />
      <button onClick={handleSend} style={{ padding: "10px 20px" }}>
        Send
      </button>
    </div>
  );
};

export default Chatbot;
