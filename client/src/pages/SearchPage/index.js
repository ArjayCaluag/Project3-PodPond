import React from "react";
import Jumbotron from "../../Components/Jumbotron";
import SearchBar from "../../Components/SearchBar";
import LandingPage from "../LandingPage";

function SearchPage(props) {

  if (props.userObject.loggedIn) {
    return (
      <div>
        <Jumbotron />
        <SearchBar userObject={props.userObject} setUserObject={props.setUserObject}/>
      </div>
    );
  } else {
      console.log("User not authenticated, redirect to login React-route");
      window.location.href = "/login";
      return (
        <LandingPage userObject={props.userObject} setUserObject={props.setUserObject}/>
      );
  }

}

export default SearchPage;
