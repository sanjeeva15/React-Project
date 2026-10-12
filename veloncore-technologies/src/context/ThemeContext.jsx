import React, { createContext, useContext, useState } from "react";
const ThemeContext = createContext(null);
export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);
  return <ThemeContext.Provider value={{ dark, toggleTheme: () => setDark(v => !v) }}>
    <div className={dark ? "app-theme dark-theme" : "app-theme"}>{children}</div>
  </ThemeContext.Provider>;
}
export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) throw new Error("useTheme must be used inside ThemeProvider");
  return value;
}