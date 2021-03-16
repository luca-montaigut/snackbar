import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
} from "react";
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
  const [messages, setMessages] = useState([]);

  const addMessage = useCallback((message) => {
    setMessages((previousMessages) => [message, ...previousMessages]);
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      const timer = setTimeout(
        () => setMessages((messages) => messages.slice(0, messages.length - 1)),
        5000
      );
      return () => clearTimeout(timer);
    }
  }, [messages.length]);

  const value = useMemo(() => {
    return { addMessage };
  }, [addMessage]);

  return (
    <SnackBarContext.Provider value={value}>
      {children}
      <SnackBar messages={messages} />
    </SnackBarContext.Provider>
  );
};
