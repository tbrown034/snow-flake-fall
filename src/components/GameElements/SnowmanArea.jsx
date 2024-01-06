import React from "react";
import Snowman from "../GamePieces/Snowman"; // Assuming Snowman is the component with the icon

export default function SnowmanArea() {
  return (
    <div className="flex flex-col ">
      <Snowman />
    </div>
  );
}
