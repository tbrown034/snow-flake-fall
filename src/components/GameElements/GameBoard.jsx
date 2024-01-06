// GameBoard.jsx
import React, { useState } from "react";
import SnowBar from "./SnowBar"; // Adjust the path as necessary
import SnowFlakeArea from "./SnowFlakeArea"; // Adjust the path as necessary

export default function GameBoard({ toggleMenu }) {
  const [snowBarCount, setSnowBarCount] = useState(0);

  function incrementBlueCount() {
    setSnowBarCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <div className="flex w-full gap-2 p-2 border-2 border-blue-950 dark:border-blue-100">
        <div className="flex flex-col w-4/5 gap-2 ">
          <div className="p-2 min-h-60 dark:border-blue-200 ">
            <SnowFlakeArea incrementBlueCount={incrementBlueCount} />
          </div>
        </div>
        <div className="flex w-1/5 p-2 border-2 border-blue-800 border-dotted">
          <SnowBar count={snowBarCount} />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={toggleMenu}
          className="p-2 px-8 border-2 rounded-lg border-blue-950 hover:bg-blue-400 active:bg-blue-600 dark:border-blue-100"
        >
          Go Back
        </button>
      </div>
    </>
  );
}
