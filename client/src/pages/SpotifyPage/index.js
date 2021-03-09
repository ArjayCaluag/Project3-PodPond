import React from "react";
import SpotifyComponent from "../../Components/SpotifyComponent";
import LandingPage from "../LandingPage";

function SpotifyPage(props) {
  if (props.userObject.loggedIn) {
    return (
      <div>
      <SpotifyComponent />
      </div>
    );
  } else {
      console.log("User not authenticated, redirect to login React-route");
      window.location.href = "/";
      return (
        <LandingPage userObject={props.userObject} setUserObject={props.setUserObject}/>
      );
  }
}

export default SpotifyPage;
