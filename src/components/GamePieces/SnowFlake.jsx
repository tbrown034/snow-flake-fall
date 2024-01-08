import React, { useState } from "react";

export default function SnowFlake({ color, onClick }) {
  const [isClicked, setIsClicked] = useState(false);

  const colorClasses = {
    blue: "text-blue-500",
    red: "text-red-700",
    white: "text-white",
  };

  const handleClick = () => {
    setIsClicked(true);
    onClick();
  };

  return (
    <i
      className={`text-4xl ${colorClasses[color]} fa-solid fa-snowflake ${
        isClicked ? "opacity-0" : "opacity-100"
      } transition-opacity duration-1000 ease-linear transform translate-y-full`}
      style={{ left: `${Math.random() * 80}%` }}
      onClick={handleClick}
    ></i>
  );
}
