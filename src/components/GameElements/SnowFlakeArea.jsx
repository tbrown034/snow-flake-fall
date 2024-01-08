import React, { useState, useEffect } from "react";
import SnowFlake from "../GamePieces/SnowFlake";
import Snowman from "../GamePieces/Snowman";

export default function SnowFlakeArea({
  incrementBlueCount,
  incrementGameSpeed,
  gameOver,
  pauseSnowman,
  gameSpeed,
  handleCollision,
  snowmanPosition,
  snowmanSize, // Assuming this is an object with {width, height}
  flakeSize, // Assuming this is the diameter of the flake
}) {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!gameOver && !pauseSnowman) {
        const rand = Math.random();
        const color = rand > 0.8 ? "blue" : rand > 0.6 ? "red" : "white";
        setSnowflakes((prev) => [
          ...prev,
          { color, id: Math.random(), position: getRandomPosition() },
        ]);
      }
    }, 1000 / gameSpeed);

    return () => clearInterval(interval);
  }, [gameOver, pauseSnowman, gameSpeed]);

  const handleSnowflakeClick = (flake) => {
    if (flake.color === "blue") {
      incrementBlueCount();
      setGameSpeed((prevSpeed) => Math.max(prevSpeed * 0.9, 0.1)); // Decrease speed by 10%
    } else if (flake.color === "red") {
      incrementGameSpeed(); // Increase game speed by 10%
      setGameSpeed((prevSpeed) => prevSpeed * 1.1);
    }
    setSnowflakes((prev) =>
      prev.filter((snowflake) => snowflake.id !== flake.id)
    );
  };

  // Function to check collision with the snowman
  const doesCollideWithSnowman = (flake) => {
    const flakeCenterX = parseInt(flake.position.left) + flakeSize / 2;
    const flakeCenterY = parseInt(flake.position.top) + flakeSize / 2;

    const snowmanCenterX =
      parseInt(snowmanPosition.left) + snowmanSize.width / 2;
    const snowmanCenterY =
      parseInt(snowmanPosition.top) + snowmanSize.height / 2;

    const distance = Math.sqrt(
      Math.pow(flakeCenterX - snowmanCenterX, 2) +
        Math.pow(flakeCenterY - snowmanCenterY, 2)
    );
    return (
      distance <
      flakeSize / 2 + Math.min(snowmanSize.width, snowmanSize.height) / 2
    );
  };

  // Function to get a random position for the snowflake
  const getRandomPosition = () => {
    return {
      left: `${Math.random() * 80}%`,
      top: `${Math.random() * 80}%`,
    };
  };

  return (
    <div className="relative w-full h-screen overflow-hidden snowflake-area">
      {snowflakes.map((flake) => (
        <SnowFlake
          key={flake.id}
          id={flake.id}
          color={flake.color}
          style={{ left: flake.position.left, top: flake.position.top }}
          onClick={() => {
            handleSnowflakeClick(flake);
            if (doesCollideWithSnowman(flake)) {
              handleCollision();
            }
          }}
        />
      ))}
      <Snowman position={snowmanPosition} size={snowmanSize} />
    </div>
  );
}
