import React, { useState, useEffect } from "react";
import SnowFlake from "../GamePieces/SnowFlake";
import Snowman from "../GamePieces/Snowman";

export default function SnowFlakeArea({
  incrementBlueCount,
  gameOver,
  pauseSnowman,
}) {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!gameOver && !pauseSnowman) {
        // Randomly generate the color of the snowflake
        const rand = Math.random();
        const color = rand > 0.8 ? "blue" : rand > 0.6 ? "red" : "white";
        // Create a new snowflake
        setSnowflakes((prev) => [...prev, { color, id: Math.random() }]);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [gameOver, pauseSnowman]);

  // Function to remove a snowflake
  const removeSnowflake = (flakeId) => {
    setSnowflakes((prev) => prev.filter((flake) => flake.id !== flakeId));
  };

  // Function to handle snowflake click
  const handleSnowflakeClick = (flakeId) => {
    if (!gameOver) {
      removeSnowflake(flakeId);
      incrementBlueCount();
    }
  };

  return (
    <div className="snowflake-area">
      {snowflakes.map((flake) => (
        <SnowFlake
          key={flake.id}
          id={flake.id}
          color={flake.color}
          removeSnowflake={removeSnowflake}
          onClick={() => handleSnowflakeClick(flake.id)}
        />
      ))}
      <Snowman />
    </div>
  );
}
