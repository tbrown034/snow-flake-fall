import React from "react";

export default function SnowFlake({ color, onClick }) {
  const colorClasses = {
    blue: "bg-blue-500",
    red: "bg-red-700",
    white: "bg-white",
  };

  return (
    <div
      className={`snowflake absolute w-12 h-12 ${colorClasses[color]} rounded-full `}
      style={{ left: `${Math.random() * 80}%`, top: `${Math.random() * 80}%` }}
      onClick={onClick}
    />
  );
}
