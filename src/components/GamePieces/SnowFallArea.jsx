// SnowFallArea.jsx
import React from "react";
import SnowFlakeBlue from "./SnowFlakeBlue";
import SnowFlakeRed from "./SnowFlakeRed";
import SnowFlakeWhite from "./SnowFlakeWhite";

export default function SnowFallArea() {
  return (
    <div className="min-h-80">
      <SnowFlakeWhite />
      <SnowFlakeBlue />
      <SnowFlakeRed />
    </div>
  );
}
