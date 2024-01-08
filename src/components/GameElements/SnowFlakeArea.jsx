import React, { useState, useEffect } from "react";
import SnowFlake from "../GamePieces/SnowFlake";

export default function SnowFlakeArea({
  handleSnowflakeClick,
  setRedCount,
  redCount,
  gameSpeed,
  gameOver,
  gamePaused,
}) {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    if (!gamePaused && !gameOver) {
      const interval = setInterval(() => {
        const rand = Math.random();
        const color = rand > 0.66 ? "blue" : rand > 0.33 ? "red" : "white";
        if (color === "red") {
          setRedCount((prevCount) => prevCount + 1);
        }
        setSnowflakes((prev) => [...prev, { color, id: Math.random() }]);
      }, 1000 / gameSpeed);

      return () => {
        clearInterval(interval);
        setSnowflakes([]); // Clear the board when the game is reset or ended
      };
    }
  }, [gameSpeed, gameOver, gamePaused, setRedCount]);

  return (
    <div className="relative w-full h-screen overflow-hidden snowflake-area cursor-crosshair">
      {snowflakes.map((flake) => (
        <SnowFlake
          key={flake.id}
          color={flake.color}
          onClick={() => {
            setSnowflakes((prev) =>
              prev.filter((snowflake) => snowflake.id !== flake.id)
            );
            if (flake.color === "red") {
              setRedCount((prevCount) => prevCount - 1);
            }
            handleSnowflakeClick(flake.color);
          }}
        />
      ))}
    </div>
  );
}
