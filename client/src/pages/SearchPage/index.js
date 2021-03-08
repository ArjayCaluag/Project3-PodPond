import React, { useImperativeHandle } from "react";
import Jumbotron from "../../Components/Jumbotron";
import SearchBar from "../../Components/SearchBar";
import PodCastCard from "../../Components/PodcastCard";
import LandingPage from "../LandingPage";

function SearchPage(props) {

  if (props.userObject.loggedIn) {
    return (
      <div>
        <Jumbotron />
        <SearchBar />
        <PodCastCard />
      </div>
    );
  } else {
      console.log("User not authenticated, redirect to login React-route");
      return (
        <LandingPage userObject={props.userObject} setUserObject={props.setUserObject}/>
      )
  }

}

export default SearchPage;
