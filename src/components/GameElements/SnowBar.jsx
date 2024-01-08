import React from "react";

export default function SnowBar({
  score,
  redCount,
  gameSpeed,
  resetGame,
  togglePause,
  toggleMenu,
  gameOver,
  gamePaused,
}) {
  return (
    <div
      className={`flex flex-col items-center p-4 rounded-t-lg transition-all duration-300 ${
        gameOver ? "bg-teal-700" : "bg-teal-900"
      } space-y-4`}
    >
      <div className="text-center text-white">
        <p className="text-lg font-semibold">Score: {score}</p>
        <p className="text-lg font-semibold">Reds on Board: {redCount}/10</p>
        <p className="text-sm font-semibold">
          Game Speed: {gameSpeed.toFixed(1)}x
        </p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={resetGame}
          className={`px-4 py-2 text-lg font-semibold text-white rounded-lg shadow focus:outline-none focus:ring ${
            gamePaused || gameOver
              ? "bg-gray-300"
              : "bg-teal-600 hover:bg-teal-500"
          }`}
          disabled={gamePaused || gameOver}
        >
          Reset
        </button>
        <button
          onClick={togglePause}
          className={`px-4 py-2 text-lg font-semibold text-white rounded-lg shadow focus:outline-none focus:ring ${
            gamePaused ? "bg-gray-300" : "bg-teal-600 hover:bg-teal-500"
          }`}
          disabled={gameOver}
        >
          {gamePaused ? "Pause" : "Pause"}
        </button>
        <button
          onClick={toggleMenu}
          className="px-4 py-2 text-lg font-semibold text-white bg-teal-600 rounded-lg shadow hover:bg-teal-500 focus:outline-none focus:ring"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
