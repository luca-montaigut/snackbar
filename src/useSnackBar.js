import React, { useState, useContext, useCallback, useMemo } from "react";
import SnackBar from "./Components/SnackBar";

const SnackBarContext = React.createContext(undefined);

export const useSnackBar = () => {
  const context = useContext(SnackBarContext);

  if (context === undefined) {
    throw new Error("Try to use useSnackBar hook without a context provider");
  }

  return context;
};

export const SnackBarProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addMessage = useCallback((message) => {
    const timer = setTimeout(
      () => setToasts((messages) => messages.slice(0, messages.length - 1)),
      5000
    );
    setToasts((previousMessages) => [
      { message, timerRef: timer },
      ...previousMessages,
    ]);
  }, []);

  const value = useMemo(() => {
    return { addMessage };
  }, [addMessage]);

  return (
    <SnackBarContext.Provider value={value}>
      {children}
      <SnackBar toasts={toasts} />
    </SnackBarContext.Provider>
  );
};
