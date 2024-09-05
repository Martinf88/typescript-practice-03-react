import { useState } from "react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleLightSwitch: () => void = () => {
    if (!darkMode) {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    } else {
      setDarkMode(false);
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <div>
      <h2>Toggle dark/light-mode</h2>
      <button onClick={handleLightSwitch}>Light switch</button>
    </div>
  );
};

export default DarkMode;
