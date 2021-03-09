import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <Link to="/search"
      className="navbar-brand">
        Pod Pond
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/search" className="nav-link">
            Search
            </Link>
        </li>
        <li className="nav-item">
          <Link to="/mypond" className="nav-link">
            My Pond
            </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
