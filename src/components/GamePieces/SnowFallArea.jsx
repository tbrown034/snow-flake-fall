// src/components/GamePieces/SnowFallArea.jsx
import React, { useEffect, useState } from "react";
import SnowFlakeBlue from "./SnowFlakeBlue";
import SnowFlakeRed from "./SnowFlakeRed";
import SnowFlakeWhite from "./SnowFlakeWhite";
import SnowmanArea from "./SnowmanArea";

export default function SnowFallArea() {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Decide randomly which snowflake to generate, with weighted probabilities
      const rand = Math.random();
      const type = rand > 0.8 ? "blue" : rand > 0.6 ? "red" : "white";
      const SnowFlakeComponent =
        type === "blue"
          ? SnowFlakeBlue
          : type === "red"
          ? SnowFlakeRed
          : SnowFlakeWhite;

      setSnowflakes((prev) => [
        ...prev,
        { type, Component: SnowFlakeComponent, id: Math.random() },
      ]);
    }, 2000); // Adjust the interval for more or less frequent snowflakes

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative w-full overflow-hidden h-96">
        {snowflakes.map((flake) => (
          <flake.Component
            key={flake.id}
            onClick={() => console.log(`${flake.type} snowflake clicked!`)}
          />
        ))}
      </div>
      <SnowmanArea />
    </>
  );
}
