import React from "react";

export default function SnowFlake({ color, onClick }) {
  const colorClasses = {
    blue: "text-blue-500",
    red: "text-red-700",
    white: "text-white",
  };

  const style = {
    top: "-5%",
    left: `${Math.random() * 100}%`, // Random horizontal start position
  };

  const className = `absolute ${colorClasses[color]} fa-solid fa-snowflake snowflake`;

  const handleClick = () => {
    console.log(`${color} snowflake clicked!`);
    if (color === "blue") {
      onClick(); // Call the onClick handler only if it's a blue snowflake
    }
  };

  return <i className={className} style={style} onClick={handleClick}></i>;
}
