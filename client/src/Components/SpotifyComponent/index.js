import React from "react";
import { scopes } from "../../utils/config";
import "./style.css";

function SpotifyComponent(props) {
  
  return (  
    <div className="spotify-login">
      <div className="spotify-form">
        <form action="/examples/actions/confirmation.php" method="post">
          <h2>Login to Spotify</h2>
          <h2> To proceed onto the website</h2>

          <div className="App">
            {!props.userObject.token && (
              <a
                className="spotify-btn btn btn-success"
                href={`${process.env.REACT_APP_authEndpoint}?client_id=${
                  process.env.REACT_APP_clientId
                }&redirect_uri=${
                  process.env.REACT_APP_redirectUri
                }&scope=${scopes.join(
                  "%20"
                )}&response_type=token&show_dialog=true`}
              >
                Login to Spotify
              </a>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default SpotifyComponent;
