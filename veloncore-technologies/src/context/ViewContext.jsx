import React, { createContext, useContext, useState } from "react";
const ViewContext = createContext(null);
export function ViewProvider({ children }) {
  const [compact, setCompact] = useState(false);
  const toggleCompact = () => setCompact(value => !value);
  return <ViewContext.Provider value={{ compact, toggleCompact }}>{children}</ViewContext.Provider>;
}
export function useView() {
  const value = useContext(ViewContext);
  if (!value) throw new Error("useView must be used inside ViewProvider");
  return value;
}