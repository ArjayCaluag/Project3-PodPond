import React from "react";
import { scopes } from "../../utils/config";
import "./style.css";

function SpotifyComponent(props) {

  // function tick() {
  //   console.log("object: ", props.userObject)
  // }
  
  return (
    <div className="App">
      {
        !props.userObject.token && (
        <a
        className="btn btn-primary"
        href={`${process.env.REACT_APP_authEndpoint}?client_id=${process.env.REACT_APP_clientId}&redirect_uri=${process.env.REACT_APP_redirectUri}&scope=${scopes.join(
          "%20"
        )}&response_type=token&show_dialog=true`}
      >
          Login to Spotify
      </a>
      )
      }
    </div >
  );
}

export default SpotifyComponent;
