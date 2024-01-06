// Header.jsx
import React from "react";

export default function Header({ toggleTheme }) {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="text-2xl ">SnowFlakeFall</div>
      <button
        className="p-2 border-2 rounded-lg border-blue-950 hover:bg-blue-400 active:bg-blue-600 dark:border-blue-100"
        onClick={toggleTheme}
      >
        Light/Dark Mode
      </button>
    </header>
  );
}
