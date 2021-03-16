import "./SnackBar.css";

const SnackBar = ({ messages }) => {
  if (messages.length < 1) {
    return null;
  }
  return (
    <div className="snack-bar">
      {messages.map((message) => (
        <p>{message}</p>
      ))}
    </div>
  );
};

export default SnackBar;
