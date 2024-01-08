import React from "react";

export default function Header({ toggleTheme }) {
  return (
    <header className="flex items-center justify-between p-4">
      <h1 className="text-2xl font-bold text-blue-900 sm:text-4xl dark:text-blue-100">
        SnowFlakeFall
      </h1>
      <button
        className="p-2 text-sm font-semibold text-white transition-colors duration-300 bg-purple-600 border-2 border-purple-600 rounded-lg hover:bg-purple-500 active:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-300 dark:border-purple-200 dark:hover:bg-purple-400 dark:active:bg-purple-600"
        onClick={toggleTheme}
      >
        Light/Dark Mode
      </button>
    </header>
  );
}
