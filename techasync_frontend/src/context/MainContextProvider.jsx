import React, { createContext, useState } from "react";

export const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const [welcomeLoader, setWelcomeLoader] = useState(true);

  const contextObject = {
    welcomeLoader,
    setWelcomeLoader,
  };

  return (
    <MainContext.Provider value={contextObject}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
