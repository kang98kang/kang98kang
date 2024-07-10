import { useState } from "react";
import "./App.css";
import Page from "./components/Page";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";

function UseContextApp1() {
  const [isDark, setIsDark] = useState(false);

  return (
    <UserContext.Provider value={String(isDark)}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default UseContextApp1;
