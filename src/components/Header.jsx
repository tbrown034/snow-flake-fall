// Header.jsx
import React from "react";

export default function Header({ toggleTheme }) {
  return (
    <header>
      <div>
        Logo
        <button onClick={toggleTheme}>Toggle Light/Dark Mode</button>
      </div>
    </header>
  );
}
