import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import SpotifyComponent from "../SpotifyComponent"

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
        <li className="nav-item">
          <Link to="/spotifylogin" className="nav-link">
            Log in to Spotify
            </Link>
        </li>

      </ul>
    </nav>
  );
}

export default NavBar;
