import React, { useState, useEffect } from "react";
import SnowFlake from "../GamePieces/SnowFlake";

export default function SnowFlakeArea({
  score,
  setScore,
  redCount,
  setRedCount,
  gameSpeed,
  setGameSpeed,
  gamePaused,
  gameOver,
}) {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    if (!gamePaused && !gameOver) {
      const interval = setInterval(() => {
        const rand = Math.random();
        const color = rand > 0.7 ? "blue" : rand > 0.3 ? "red" : "white";
        setSnowflakes((prev) => [...prev, { color, id: Math.random() }]);
      }, 1000 / gameSpeed);

      return () => clearInterval(interval);
    }
  }, [gameSpeed, gamePaused, gameOver]);

  const handleSnowflakeClick = (flake) => {
    if (flake.color === "blue") {
      setScore(score + 1);
      setGameSpeed(gameSpeed * 0.9); // Decrease speed by 10%
    } else if (flake.color === "red") {
      setRedCount(redCount + 1);
      setGameSpeed(gameSpeed * 1.1); // Increase speed by 10%
    }
    // Remove snowflake
    setSnowflakes((prev) => prev.filter((s) => s.id !== flake.id));
  };

  return (
    <div className="relative w-full h-screen overflow-hidden snowflake-area">
      {!gamePaused &&
        snowflakes.map((flake) => (
          <SnowFlake
            key={flake.id}
            color={flake.color}
            onClick={() => handleSnowflakeClick(flake)}
          />
        ))}
    </div>
  );
}
