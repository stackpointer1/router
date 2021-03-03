import React from "react";
import "./styles.css";
import { Link, withRouter } from "react-router-dom";
function Nav() {
  const navStyle = {
    color: "white"
  };
  return (
    <nav>
      <h3>logo</h3>
      <ul classNmae="nav-links">
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link>
          <li style={navStyle} to="/shop">
            Shop
          </li>
        </Link>
      </ul>
    </nav>
  );
}
export default Nav;
