import React from "react";

export default function SnowBar({ count, shovels, gameSpeed }) {
  const progress = (count % 10) * 10;
  const untilNextShovel = 10 - (count % 10);
  const formattedGameSpeed = gameSpeed.toFixed(1);

  return (
    <div className="flex flex-col items-center h-full p-4 bg-white border-4 rounded-lg shadow-md">
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-4">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-width duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="space-y-2 text-center">
        <p className="text-lg font-semibold">Total Blue Flakes: {count}</p>
        <p className="text-lg font-semibold">Shovels: {shovels}</p>
        <p className="text-sm">{untilNextShovel}/10 until next shovel</p>
        <p className="text-lg font-semibold">
          Game Speed: {formattedGameSpeed}x
        </p>
      </div>
    </div>
  );
}
