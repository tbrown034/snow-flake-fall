import React, { useState } from "react";
import SnowBar from "./SnowBar";
import SnowFlakeArea from "./SnowFlakeArea";

export default function GameBoard({ toggleMenu }) {
  const [score, setScore] = useState(0);
  const [redCount, setRedCount] = useState(0);
  const [gameSpeed, setGameSpeed] = useState(1); // Displayed as 1x to the user
  const [gamePaused, setGamePaused] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const handleSnowflakeClick = (color) => {
    if (!gamePaused && !gameOver) {
      if (color === "blue") {
        setScore((prev) => prev + 1);
        setGameSpeed((prev) => Math.max(prev * 0.9, 0.1)); // Decrement by 10%
      } else if (color === "red") {
        setRedCount((prev) => prev + 1);
        if (redCount >= 10) setGameOver(true); // Game over if 10 reds are on board
        setGameSpeed((prev) => prev * 1.1); // Increment by 10%
      }
    }
  };

  const resetGame = () => {
    setScore(0);
    setRedCount(0);
    setGameSpeed(1);
    setGamePaused(false);
    setGameOver(false);
  };

  const togglePause = () => {
    setGamePaused(!gamePaused);
  };

  return (
    <div className="flex flex-col h-screen">
      <SnowBar
        score={score}
        redCount={redCount}
        gameSpeed={gameSpeed}
        resetGame={resetGame}
        togglePause={togglePause}
        gameOver={gameOver}
        gamePaused={gamePaused}
      />
      <SnowFlakeArea
        handleSnowflakeClick={handleSnowflakeClick}
        gameSpeed={gameSpeed}
        gameOver={gameOver}
        gamePaused={gamePaused}
      />
      {gamePaused && (
        // Overlay when the game is paused
        <div className="absolute top-0 left-0 z-20 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="p-4 border-4 border-red-600 rounded">
            <h1 className="text-4xl font-bold text-white">Paused</h1>
          </div>
        </div>
      )}
      {gameOver && (
        <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">Game Over!</h1>
            <button
              onClick={resetGame}
              className="px-6 py-3 text-lg text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Restart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
