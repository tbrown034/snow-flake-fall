import React, { useState, useEffect } from "react";
import SnowFlake from "../GamePieces/SnowFlake";
import Snowman from "../GamePieces/Snowman";

export default function SnowFlakeArea({
  incrementBlueCount,
  incrementGameSpeed,
  gameOver,
  pauseSnowman,
}) {
  const [snowflakes, setSnowflakes] = useState([]);
  const [gameSpeed, setGameSpeed] = useState(1); // Initial game speed multiplier

  useEffect(() => {
    const interval = setInterval(() => {
      if (!gameOver && !pauseSnowman) {
        // Create a new snowflake
        const rand = Math.random();
        const color = rand > 0.8 ? "blue" : rand > 0.6 ? "red" : "white";
        setSnowflakes((prev) => [...prev, { color, id: Math.random() }]);
      }
    }, 1000 / gameSpeed); // Game speed affects interval

    return () => clearInterval(interval);
  }, [gameOver, pauseSnowman, gameSpeed]);

  const handleSnowflakeClick = (flake) => {
    if (flake.color === "blue") {
      incrementBlueCount();
    } else if (flake.color === "red") {
      setGameSpeed((prevSpeed) => prevSpeed * 1.1); // Increase game speed by 10%
      incrementGameSpeed();
    }
    // Remove the clicked snowflake
    setSnowflakes((prev) =>
      prev.filter((snowflake) => snowflake.id !== flake.id)
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden snowflake-area">
      {snowflakes.map((flake) => (
        <SnowFlake
          key={flake.id}
          id={flake.id}
          color={flake.color}
          onClick={() => handleSnowflakeClick(flake)}
        />
      ))}
      <Snowman />
    </div>
  );
}
