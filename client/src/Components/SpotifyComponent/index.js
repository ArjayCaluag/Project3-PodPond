import React, { useEffect } from "react";
import { scopes } from "../../utils/config";
import hash from "../../utils/hash";
import "./style.css";

function SpotifyComponent(props) {
  useEffect(() => {
    // Set token
    let _token = hash.access_token;
    console.log("token: ", _token);
    if (_token) {
      // Set token
      props.setUserObject({
        ...props.userObject,
        token: _token,
      });
    }

    // set interval for polling every 5 seconds
    const interval = setInterval(() => {
      tick();
      console.log("tick");
    }, 10000);

    return () => {
      clearInterval(interval);
      //clears interval on component unmount
    };
  });

  function tick() {
    console.log("object: ", props.userObject);
  }

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
