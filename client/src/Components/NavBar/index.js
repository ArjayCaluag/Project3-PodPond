import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { scopes } from "../../utils/config";

function NavBar(props) {
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
      {props.userObject.loggedIn ?
        <ul className="nav navbar-nav ml-auto">
          {!props.userObject.token &&
            <li className="nav-item">
              <a className="btn btn-success" href={`${process.env.REACT_APP_authEndpoint}?client_id=${
                  process.env.REACT_APP_clientId
                }&redirect_uri=${
                  process.env.REACT_APP_redirectUri
                }&scope=${scopes.join(
                  "%20"
                )}&response_type=token&show_dialog=true`}>Spotify</a>
            </li>
          }
          <li className="nav-item">
            <a className="btn btn-outline-success" href="/logout">Logout</a>
          </li>
          </ul>

          : null
        }
    </nav>
  );
}

export default NavBar;
