// SnowBar.jsx
import React from "react";

export default function SnowBar({ count, shovels }) {
  const progress = (count % 10) * 10; // Resets after every 10 clicks
  const untilNextShovel = 10 - (count % 10); // Number of blue flakes until the next shovel

  return (
    <div className="flex flex-col items-center h-full p-2 border-4 rounded-lg">
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-2">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="text-center">
        <p>Total Blue Flakes: {count}</p>
        <p>Shovels: {shovels}</p>
        <p>{count % 10}/10 until next shovel</p>
      </div>
    </div>
  );
}
