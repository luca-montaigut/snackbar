import { useState, useEffect } from "react";

import "./SnackBar.css";

const SnackBar = ({ message }) => {
  const [hideSnackBar, setHideSnackBar] = useState(false);

  useEffect(() => {
    setHideSnackBar(false);
    const timeout = setTimeout(() => setHideSnackBar(true), 5000);
    return () => clearTimeout(timeout);
  }, [message]);

  if (hideSnackBar || !message) {
    return null;
  }
  return (
    <div className="snack-bar">
      <p>{message}</p>
    </div>
  );
};

export default SnackBar;
