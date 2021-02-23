import { useSnackBar } from "../useSnackBar";

const Users = () => {
  const { addMessage } = useSnackBar();

  const hanldeClick = () => {
    addMessage("Users alert");
  };
  return (
    <>
      <h1>Users</h1>
      <button onClick={hanldeClick}>alert</button>
    </>
  );
};
export default Users;
