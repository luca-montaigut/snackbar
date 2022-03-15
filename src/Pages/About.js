import { useSnackBar } from "../useSnackBar";

const About = () => {
  const { addMessage } = useSnackBar();

  const hanldeClick = () => {
    addMessage("About alert" + Math.random().toString());
  };
  return (
    <>
      <h1>About</h1>
      <button onClick={hanldeClick}>alert</button>
    </>
  );
};

export default About;
