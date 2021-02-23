import { useState } from "react";

import SnackBar from "../Components/SnackBar";

const Users = () => {
  const [message, setMessage] = useState();

  const hanldeClick = () => {
    setMessage("Users alert");
  };
  return (
    <>
      <h1>Users</h1>
      <button onClick={hanldeClick}>alert</button>
      <SnackBar message={message} />
    </>
  );
};
export default Users;
