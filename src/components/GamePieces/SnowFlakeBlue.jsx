// src/components/GamePieces/SnowFlakeBlue.jsx
import React from "react";

export default function SnowFlakeBlue() {
  const style = {
    top: "-5%", // Start just above the container
    left: `${Math.random() * 100}%`, // Random horizontal start position
  };

  return (
    <i
      className="absolute text-blue-500 fa-solid fa-snowflake snowflake"
      style={style}
    ></i>
  );
}
