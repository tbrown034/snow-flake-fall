// Game.jsx
import React from "react";
import SnowBar from "./GamePieces/SnowBar";
import SnowFallArea from "./GamePieces/SnowFallArea";
import SnowmanArea from "./GamePieces/SnowmanArea";

export default function Game({ toggleMenu }) {
  return (
    <>
      <div className="flex w-full gap-2 p-2 border-2 border-blue-950 dark:border-blue-100">
        <div className="flex flex-col w-4/5 gap-2 ">
          <div className="p-2 border-2 border-yellow-500 border-dotted min-h-60 dark:border-blue-200 ">
            <SnowFallArea />
          </div>
          <div className="p-2 border-2 border-purple-800 border-dotted min-h-20 dark:border-blue-200 ">
            <SnowmanArea />
          </div>
        </div>
        <div className="flex w-1/5 p-2 border-2 border-green-500 border-dotted">
          <SnowBar />
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
