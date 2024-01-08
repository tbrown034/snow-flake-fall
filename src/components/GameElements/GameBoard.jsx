import React, { useState, useEffect } from "react";
import SnowBar from "./SnowBar";
import SnowFlakeArea from "./SnowFlakeArea";

export default function GameBoard({ toggleMenu }) {
  const [snowBarCount, setSnowBarCount] = useState(0);
  const [shovels, setShovels] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [pauseSnowman, setPauseSnowman] = useState(false);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    if (snowBarCount > highScore) {
      setHighScore(snowBarCount);
    }
  }, [snowBarCount, highScore]);

  const addShovel = () => {
    if (!gameOver) {
      setShovels((prevShovels) => prevShovels + 1);
    }
  };

  const incrementBlueCount = () => {
    if (!gameOver) {
      setSnowBarCount((prevCount) => {
        const updatedCount = prevCount + 1;
        if (updatedCount % 10 === 0) {
          setShovels((prev) => prev + 1); // Add a shovel every 10 blue clicks
        }
        return updatedCount;
      });
    }
  };

  const useShovel = () => {
    if (shovels > 0 && !pauseSnowman) {
      setShovels((prev) => prev - 1);
      setPauseSnowman(true);
      setTimeout(() => {
        setPauseSnowman(false);
      }, 5000); // Pause snowman for 5 seconds
    }
  };

  return (
    <>
      {gameOver && (
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div>
            <h1 className="text-3xl text-white">You Lose!</h1>
            <h2 className="text-xl text-white">High Score: {highScore}</h2>
          </div>
        </div>
      )}
      <div className="grid grid-cols-12 p-2 border-4 rounded-lg border-blue-950 dark:border-blue-100">
        <div className="col-span-8">
          <SnowFlakeArea
            incrementBlueCount={incrementBlueCount}
            gameOver={gameOver}
            addShovel={addShovel}
            setGameOver={setGameOver}
            pauseSnowman={pauseSnowman}
          />
        </div>
        <div className="col-span-4">
          <SnowBar count={snowBarCount} shovels={shovels} />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={toggleMenu}
          className="p-2 px-8 border-2 rounded-lg border-blue-950 hover:bg-blue-400 active:bg-blue-600 dark:border-blue-100"
        >
          Go Back
        </button>
        {shovels > 0 && (
          <button
            onClick={useShovel}
            className="p-2 px-8 ml-4 border-2 rounded-lg border-green-950 hover:bg-green-400 active:bg-green-600 dark:border-green-100"
          >
            Use Shovel (Pause Snowman)
          </button>
        )}
      </div>
    </>
  );
}
