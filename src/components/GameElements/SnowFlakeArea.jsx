// SnowFlakeArea.jsx
import React, { useEffect, useState } from "react";
import SnowFlake from "../GamePieces/SnowFlake"; // Adjust the path as necessary
import SnowmanArea from "./SnowmanArea";

export default function SnowFlakeArea({ incrementBlueCount }) {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const rand = Math.random();
      const color = rand > 0.8 ? "blue" : rand > 0.6 ? "red" : "white";

      setSnowflakes((prev) => [...prev, { color, id: Math.random() }]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative w-full overflow-hidden h-96">
        {snowflakes.map((flake) => (
          <SnowFlake
            key={flake.id}
            color={flake.color}
            onClick={() => {
              if (flake.color === "blue") {
                incrementBlueCount();
              }
            }}
          />
        ))}
      </div>
      <SnowmanArea />
    </>
  );
}
