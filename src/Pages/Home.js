import { useSnackBar } from "../useSnackBar";

const Home = () => {
  const { addMessage } = useSnackBar();

  const hanldeClick = () => {
    addMessage("Home alert");
  };
  return (
    <>
      <h1>Home</h1>
      <button onClick={hanldeClick}>alert</button>
    </>
  );
};

export default Home;
