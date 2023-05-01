import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navBar">
      <ul className="navList">
        <li className="navItems" >
          <a href="/">Mountain</a>
        </li>

        <li className="navItems">
          <a href="/">Beaches</a>
        </li>
        <li className="navItems">
          <a href="/">Birds</a>
        </li>
        <li className="navItems">
          <a href="/">Food</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
