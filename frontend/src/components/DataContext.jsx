import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [walletHovered, setWalletHovered] = useState(false);
  const [loginHovered, setLoginHovered] = useState(false);
  const [futuretrade, setFuturetrade] = useState(true);
  const [spottrade, setSpottrade] = useState(false);

  return (
    <DataContext.Provider
      value={{
        walletHovered,
        setWalletHovered,
        loginHovered,
        setLoginHovered,
        futuretrade,
        setFuturetrade,
        spottrade,
        setSpottrade,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
