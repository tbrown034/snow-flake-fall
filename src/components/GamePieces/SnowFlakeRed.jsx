import React from "react";

export default function SnowFlakeRed() {
  const style = {
    top: "-5%", // Start just above the container
    left: `${Math.random() * 100}%`, // Random horizontal start position
  };

  return (
    <i
      className="absolute text-red-700 fa-solid fa-snowflake snowflake"
      style={style}
    ></i>
  );
}
