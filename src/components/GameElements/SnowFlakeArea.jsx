import React, { useEffect, useState } from "react";
import SnowFlake from "../GamePieces/SnowFlake"; // Assuming SnowFlake is in the same directory
import SnowmanArea from "./SnowmanArea";

export default function SnowFlakeArea() {
  const [snowflakes, setSnowflakes] = useState([]);
  const [snowBarCount, setSnowBarCount] = useState(0);

  function incrementBlueCount() {
    setSnowBarCount((prevCount) => prevCount + 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const rand = Math.random();
      const color = rand > 0.8 ? "blue" : rand > 0.6 ? "red" : "white";

      setSnowflakes((prev) => [...prev, { color, id: Math.random() }]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Use useEffect to log the snowBarCount when it changes
  useEffect(() => {
    if (snowBarCount > 0) {
      console.log("clicked blue", snowBarCount);
    }
  }, [snowBarCount]);

  return (
    <>
      <div className="relative w-full overflow-hidden h-96">
        {snowflakes.map((flake) => (
          <SnowFlake
            key={flake.id}
            color={flake.color}
            onClick={incrementBlueCount}
          />
        ))}
      </div>
      <SnowmanArea />
    </>
  );
}
