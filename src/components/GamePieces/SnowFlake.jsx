import React, { useState } from "react";

export default function SnowFlake({ color, onClick }) {
  const [isClicked, setIsClicked] = useState(false);

  const colorClasses = {
    blue: "text-blue-500",
    red: "text-red-700",
    white: "text-white",
  };

  const style = {
    top: "-5%",
    left: `${Math.random() * 100}%`, // Random horizontal start position
  };

  const handleClick = () => {
    console.log(`${color} snowflake clicked!`);
    setIsClicked(true); // Update the state to indicate the snowflake has been clicked

    if (color === "blue") {
      onClick(); // Call the onClick handler only if it's a blue snowflake
    }

    setTimeout(() => {
      setIsClicked(false); // Reset the clicked state (optional)
    }, 1000); // Time before the snowflake resets
  };

  const className = `absolute ${
    colorClasses[color]
  } fa-solid fa-snowflake snowflake ${isClicked ? "clicked-snowflake" : ""}`;

  return <i className={className} style={style} onClick={handleClick}></i>;
}
