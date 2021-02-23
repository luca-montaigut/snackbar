import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <nav>
      <ul className="nav-container">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
