import React, { useState, useEffect } from "react";
import SnowBar from "./SnowBar";
import SnowFlake from "../GamePieces/SnowFlake";

export default function GameBoard({ toggleMenu }) {
  // State hooks for various game parameters
  const [score, setScore] = useState(0);
  const [redCount, setRedCount] = useState(0);
  const [gameSpeed, setGameSpeed] = useState(0.4);
  const [gamePaused, setGamePaused] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    let interval;
    if (!gamePaused && !gameOver) {
      // Generate snowflakes at a rate determined by the game speed
      interval = setInterval(() => {
        const rand = Math.random();
        const color = rand > 0.66 ? "blue" : rand > 0.33 ? "red" : "white";
        if (color === "red") {
          setRedCount((prevCount) => prevCount + 1);
        }
        setSnowflakes((prev) => [...prev, { color, id: Math.random() }]);
      }, 1000 / gameSpeed);
    }

    // Cleanup function: clear the interval but don't clear the snowflakes here as it causes them to disappear on every click.
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [gameSpeed, gameOver, gamePaused]); // Rerun effect if these values change

  const handleSnowflakeClick = (color, id) => {
    if (!gamePaused && !gameOver) {
      // Remove the clicked snowflake from the array.
      setSnowflakes(snowflakes.filter((flake) => flake.id !== id));

      if (color === "blue") {
        // Increase the score and slow down the game for blue snowflake.
        setScore((prev) => prev + 1);
        setGameSpeed((prev) => Math.max(prev * 0.9, 0.1));
      } else if (color === "red") {
        // Decrease the red count and speed up the game for red snowflake.
        setRedCount((prev) => prev - 1);
        if (redCount >= 10) setGameOver(true); // End game if too many reds have been clicked.
        setGameSpeed((prev) => prev * 1.1);
      }
    }
  };

  const resetGame = () => {
    // Reset all game parameters and clear the snowflakes.
    setScore(0);
    setRedCount(0);
    setGameSpeed(1);
    setGamePaused(false);
    setGameOver(false);
    setSnowflakes([]);
  };

  const togglePause = () => {
    // Toggle the game's paused state.
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
      <div className="relative w-full h-screen overflow-hidden snowflake-area cursor-crosshair">
        {snowflakes.map((flake) => (
          <SnowFlake
            key={flake.id}
            id={flake.id} // Ensure you pass the id
            color={flake.color}
            onClick={handleSnowflakeClick} // Pass the function correctly
          />
        ))}
      </div>
      {/* //flake.color */}
      {/* Overlay when the game is paused */}
      {gamePaused && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
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
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-75">
          <div className="p-4 text-center border-4 border-red-500 rounded-lg">
            <h1 className="text-4xl font-bold text-white">Game Over!</h1>
            <button
              onClick={resetGame}
              className="px-6 py-3 mt-4 text-lg font-semibold text-white bg-teal-600 rounded-lg shadow hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              Restart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
