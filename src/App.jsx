import React, { useState, useEffect } from "react";
import Footer from "./components/UI/Footer";
import Header from "./components/UI/Header";
import Menu from "./components/UI/Menu";
import GameBoard from "./components/GameElements/GameBoard";

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
    body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div
      className={`flex flex-col justify-between min-h-screen px-2 ${
        isDarkMode ? "bg-blue-900 text-blue-100" : "bg-blue-200 text-blue-950"
      }`}
    >
      <Header toggleTheme={toggleTheme} />
      {!isGameMode ? (
        <Menu toggleMenu={toggleMenu} />
      ) : (
        <GameBoard toggleMenu={toggleMenu} />
      )}
      <Footer />
    </div>
  );
}

export default App;
