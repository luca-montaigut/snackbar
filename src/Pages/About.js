import { useState } from "react";

import SnackBar from "../Components/SnackBar";

const About = () => {
  const [message, setMessage] = useState();

  const hanldeClick = () => {
    setMessage("about alert");
  };
  return (
    <>
      <h1>About</h1>
      <button onClick={hanldeClick}>alert</button>
      <SnackBar message={message} />
    </>
  );
};

export default About;
