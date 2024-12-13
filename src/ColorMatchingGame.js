import React, { useState, useEffect } from "react";

const ColorMatchingGame = () => {
  const colors = ["Red", "Blue", "Green", "Yellow"];
  const [targetColor, setTargetColor] = useState("");
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [donationPrompt, setDonationPrompt] = useState(false);

  useEffect(() => {
    // Set a random target color when the game starts
    setRandomColor();
  }, []);

  const setRandomColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setTargetColor(randomColor);
  };

  const handleColorClick = (color) => {
    if (color === targetColor) {
      setScore(score + 1);
      setRandomColor();
    } else {
      setGameOver(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setGameOver(false);
    setDonationPrompt(false);
    setRandomColor();
  };

  const handleDonationPrompt = () => {
    setDonationPrompt(true);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Color Matching Game</h1>
      {gameOver ? (
        <div>
          <h2>Game Over! 🎮</h2>
          <p>Your final score: {score}</p>
          <button onClick={restartGame} style={{ padding: "10px", cursor: "pointer" }}>
            Restart Game
          </button>
        </div>
      ) : score >= 10 ? (
        <div>
          <h2>🎉 Congratulations! 🎉</h2>
          <p>You just planted a tree! 🌳</p>
          <button onClick={handleDonationPrompt} style={{ marginTop: "10px", cursor: "pointer" }}>
            Donate to Help Forests
          </button>
          {donationPrompt && (
            <div style={{ marginTop: "20px" }}>
              <p>
                Thank you for your interest in donating! Your contribution will help plant more
                trees and support forest restoration. 🌍
              </p>
              <a href="https://onetreeplanted.org/products/plant-trees" target="_blank" rel="noopener noreferrer">
                Donate Here
              </a>
            </div>
          )}
        </div>
      ) : (
        <div>
          <h2>Score: {score}</h2>
          <p>Click the button that matches this color:</p>
          <h3 style={{ color: targetColor.toLowerCase() }}>{targetColor}</h3>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "20px" }}>
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => handleColorClick(color)}
                style={{
                  backgroundColor: color.toLowerCase(),
                  color: "white",
                  padding: "15px 30px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorMatchingGame;
