import "./SnackBar.css";

const SnackBar = ({ toasts }) => {
  if (toasts.length < 1) {
    return null;
  }
  return (
    <div className="snack-bar">
      {toasts.map(({ message }) => (
        <p>{message}</p>
      ))}
    </div>
  );
};

export default SnackBar;
