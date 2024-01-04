// App.jsx
import React, { useState } from "react";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-blue-100 dark:bg-blue-900 dark:text-blue-100">
      <Header toggleTheme={toggleTheme} />
      <Footer />
    </div>
  );
}

export default App;
