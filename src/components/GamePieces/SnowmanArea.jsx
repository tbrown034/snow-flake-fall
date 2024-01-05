import React from "react";
import Snowman from "./Snowman"; // Assuming Snowman is the component with the icon

export default function SnowmanArea() {
  return (
    <div className="flex items-end justify-start h-20 border-2 border-blue-800 border-dotted dark:border-blue-200">
      <Snowman />
    </div>
  );
}
