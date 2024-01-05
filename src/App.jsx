// App.jsx
import React, { useState, useEffect } from "react";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Menu from "./components/Menu.jsx";
import Game from "./components/Game.jsx";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isGameMode, setIsGameMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsGameMode(!isGameMode);
  };

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="flex flex-col justify-between min-h-screen px-2 bg-blue-200 text-blue-950 dark:text-blue-100 dark:bg-blue-900">
      <Header toggleTheme={toggleTheme} />
      {!isGameMode ? (
        <Menu toggleMenu={toggleMenu} />
      ) : (
        <Game toggleMenu={toggleMenu} />
      )}
      <Footer />
    </div>
  );
}

export default App;
