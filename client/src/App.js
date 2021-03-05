import React, { Component } from "react";
import * as $ from "jquery";
import { authEndpoint, clientId, clientSecret, redirectUri, scopes } from "./utils/config";
import hash from "./utils/hash";
import Player from "./utils/player";
import "./App.css";
// import 'react-spotify-auth/dist/index.css' // if using the included styles


const {
  REACT_APP_clientId,
  REACT_APP_AUTHORIZE_URL,
  REACT_APP_REDIRECT_URL
} = process.env;

console.log(REACT_APP_clientId)

function App() {
  return(
  <div>
      <p>Hello World, {REACT_APP_clientId}</p>
  </div>
//   <SpotifyAuth
//     redirectUri={process.env.redirectUri}
//     clientID='your client id from spotify here'
//     scopes={[Scopes.userReadPrivate, Scopes.userReadEmail]}
//   />
  )
}

export default App;