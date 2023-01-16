import { Link } from "react-router-dom";
import "./index.css";
export default function Navigation() {
  return (
    <div className="nav-container">
      <ul className="nav-list">
        <Link to="/">
          <li> Home </li>
        </Link>
        <Link to="/about">
          <li> About </li>
        </Link>
        <Link to="/dog">
          <li> Dog </li>
        </Link>
        <Link to="/signin">
          <li> Signin </li>
        </Link>
      </ul>
    </div>
  );
}
