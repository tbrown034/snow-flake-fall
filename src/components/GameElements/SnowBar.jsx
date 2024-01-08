import React from "react";

export default function SnowBar({
  score,
  redCount,
  gameSpeed,
  resetGame,
  togglePause,
  toggleMenu, // Assuming toggleMenu is passed down from the GameBoard
  gameOver,
  gamePaused,
}) {
  return (
    <div className="flex items-center justify-between p-4 text-blue-100 bg-blue-900">
      <div className="text-center">
        <h2 className="text-lg font-bold">Score: {score}</h2>
        <h2 className="text-lg font-bold">Reds on Board: {redCount}/10</h2>
        <h2 className="text-sm">Game Speed: {gameSpeed.toFixed(1)}x</h2>
      </div>

      <div className="flex space-x-2">
        <button
          onClick={resetGame}
          className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-300"
          disabled={gameOver}
        >
          Reset
        </button>
        <button
          onClick={togglePause}
          className={`px-4 py-2 rounded ${
            gamePaused ? "bg-yellow-400" : "bg-green-400"
          } text-white hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300`}
          disabled={gameOver}
        >
          {gamePaused ? "Resume" : "Pause"}
        </button>
        <button
          onClick={toggleMenu}
          className="px-4 py-2 text-sm font-semibold text-blue-900 bg-white rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-white dark:bg-blue-800"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
