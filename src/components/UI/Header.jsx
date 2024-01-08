import React from "react";

export default function Header({ toggleTheme }) {
  return (
    <header className="flex items-center justify-between p-4">
      <h1 className="text-2xl font-bold text-teal-950 sm:text-4xl dark:text-blue-100">
        SnowFlakeFall
      </h1>
      <button
        onClick={toggleTheme}
        className="p-2 text-sm font-semibold text-white transition-colors duration-300 bg-teal-800 border-2 border-teal-800 rounded-lg hover:bg-teal-700 active:bg-teal-900 focus:outline-none focus:ring focus:ring-teal-300 dark:border-teal-200 dark:hover:bg-teal-600 dark:active:bg-teal-700"
      >
        Light/Dark Mode
      </button>
    </header>
  );
}
