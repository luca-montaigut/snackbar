import { useSnackBar } from "../useSnackBar";

const Home = () => {
  const { addMessage } = useSnackBar();

  const hanldeClick = () => {
    addMessage("Home alert" + Math.random().toString());
  };
  return (
    <>
      <h1>Home</h1>
      <button onClick={hanldeClick}>alert</button>
    </>
  );
};

export default Home;
