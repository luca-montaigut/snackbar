import { useState } from "react";

import SnackBar from "../Components/SnackBar";

const Home = () => {
  const [message, setMessage] = useState();

  const hanldeClick = () => {
    setMessage("Home alert");
  };
  return (
    <>
      <h1>Home</h1>
      <button onClick={hanldeClick}>alert</button>
      <SnackBar message={message} />
    </>
  );
};

export default Home;
