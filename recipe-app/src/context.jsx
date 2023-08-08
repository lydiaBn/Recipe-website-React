/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  useEffect(() => {
    console.log("fetch data here");
  }, []);

  return (
    <AppContext.Provider value={{ name: "Lydia", role: "Student" }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
