import React from "react";

export default function SnowFlake({ color, id, onClick }) {
  // Tailwind classes for color
  const colorClasses = {
    blue: "bg-blue-500",
    red: "bg-red-700",
    white: "bg-white",
  };

  // Determine animation class based on color
  const animationClass = color === "white" ? "grow" : "fade-out";

  return (
    <div
      className={`snowflake absolute w-8 h-8 ${colorClasses[color]} rounded-full cursor-pointer
                  transition-transform duration-75 ${animationClass}`}
      style={{ left: `${Math.random() * 80}%`, top: `${Math.random() * 80}%` }}
      onClick={() => onClick({ color, id })}
    />
  );
}
