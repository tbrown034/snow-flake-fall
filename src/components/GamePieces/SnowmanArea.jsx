import React from "react";
import Snowman from "./Snowman"; // Assuming Snowman is the component with the icon

export default function SnowmanArea() {
  return (
    <div className="flex flex-col h-10 overflow-hidden ">
      <Snowman />
    </div>
  );
}
