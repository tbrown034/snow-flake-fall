import React, { useState } from "react";
import SnowBar from "./SnowBar";
import SnowFlakeArea from "./SnowFlakeArea";

export default function GameBoard({ toggleMenu }) {
  const [score, setScore] = useState(0);
  const [redCount, setRedCount] = useState(0);
  const [gameSpeed, setGameSpeed] = useState(1);
  const [gamePaused, setGamePaused] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const handleSnowflakeClick = (color) => {
    if (!gamePaused && !gameOver) {
      if (color === "blue") {
        setScore((prev) => prev + 1);
        setGameSpeed((prev) => Math.max(prev * 0.9, 0.1));
      } else if (color === "red") {
        setRedCount((prev) => prev + 1);
        if (redCount >= 10) setGameOver(true);
        setGameSpeed((prev) => prev * 1.1);
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
        toggleMenu={toggleMenu}
        gameOver={gameOver}
        gamePaused={gamePaused}
      />
      <SnowFlakeArea
        handleSnowflakeClick={handleSnowflakeClick}
        setRedCount={setRedCount}
        redCount={redCount}
        gameSpeed={gameSpeed}
        gameOver={gameOver}
        resetGame={resetGame} // Add this to clear snowflakes on reset
        gamePaused={gamePaused}
      />
      {/* Overlay when the game is paused */}
      {gamePaused && (
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="p-4 text-center border-4 border-teal-500 rounded-lg">
            <h1 className="text-4xl font-bold text-white">Paused</h1>
            <div className="flex gap-2 p-2 mt-2">
              <button
                onClick={() => setGamePaused(false)}
                className="px-4 py-2 text-lg font-semibold text-white bg-teal-600 rounded-lg shadow hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
              >
                Resume
              </button>
              <button
                onClick={resetGame}
                className="px-4 py-2 text-lg font-semibold text-white bg-teal-600 rounded-lg shadow hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
              >
                Restart
              </button>
              <button
                onClick={toggleMenu}
                className="px-4 py-2 text-lg font-semibold text-white bg-teal-600 rounded-lg shadow hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
              >
                Main Menu
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Overlay when the game is over */}
      {gameOver && (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Game Over!</h1>
          <button
            onClick={resetGame}
            className="px-6 py-3 mt-4 text-lg font-semibold text-white bg-teal-600 rounded-lg shadow hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
}
