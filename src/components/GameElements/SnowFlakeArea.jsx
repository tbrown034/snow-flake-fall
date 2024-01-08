import React, { useState, useEffect, useRef } from "react";
import SnowFlake from "../GamePieces/SnowFlake";
import Snowman from "../GamePieces/Snowman";

export default function SnowFlakeArea({
  incrementBlueCount,
  gameOver,
  setGameOver,
  pauseSnowman,
}) {
  const [snowflakes, setSnowflakes] = useState([]);
  const snowmanRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!gameOver && !pauseSnowman) {
        const rand = Math.random();
        const color = rand > 0.8 ? "blue" : rand > 0.6 ? "red" : "white";

        setSnowflakes((prev) => [
          ...prev,
          { color, id: Math.random(), left: `${Math.random() * 75}%` },
        ]);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [gameOver, pauseSnowman]);

  const handleSnowflakeClick = (flakeId) => {
    setSnowflakes((prev) => prev.filter((flake) => flake.id !== flakeId));
    incrementBlueCount();
  };

  return (
    <div className="flex flex-col justify-between snowflake-area ">
      <div>
        {snowflakes.map((flake) => (
          <SnowFlake
            key={flake.id}
            color={flake.color}
            onClick={() => {
              if (flake.color === "blue") {
                handleSnowflakeClick(flake.id);
              }
            }}
          />
        ))}
      </div>
      <Snowman />
    </div>
  );
}
