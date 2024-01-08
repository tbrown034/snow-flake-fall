import { useState, useEffect } from "react";

export default function SnowFlake({ color, onClick }) {
  const [isClicked, setIsClicked] = useState(false);

  const colorClasses = {
    blue: "text-blue-500",
    red: "text-red-700",
    white: "text-white",
  };

  const style = {
    left: `${Math.random() * 80}%`,
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsClicked(true); // Remove snowflake after it falls
    }, 10000); // Match the duration of the snowflake-fall animation

    return () => clearTimeout(timeout);
  }, []);

  const handleClick = () => {
    setIsClicked(true);
    onClick();
  };

  return (
    <i
      className={`text-6xl ${
        colorClasses[color]
      } fa-solid fa-snowflake snowflake-fall snowflake ${
        isClicked ? "clicked-snowflake" : ""
      }`}
      style={style}
      onClick={handleClick}
    ></i>
  );
}
