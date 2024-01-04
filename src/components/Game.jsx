// Game.jsx
import React from "react";

export default function Game({ toggleMenu }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="p-4 border-2 min-h-80 border-blue-950 dark:border-blue-100">
        Game Board
      </div>
      <div className="flex justify-center">
        <button
          onClick={toggleMenu}
          className="p-2 px-8 border-2 rounded-lg border-blue-950 hover:bg-blue-400 active:bg-blue-600 dark:border-blue-100"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
