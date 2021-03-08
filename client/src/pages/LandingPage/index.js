import React from "react";
import NavBar from "../../Components/NavBar";
import LoginForm from "../../Components/LoginForm";

function LandingPage(props) {
  console.log("Props loading on LandingPage:", props);
  
  return (
    <div>
      <LoginForm userObject={props.userObject} setUserObject={props.setUserObject} />
    </div>
  );
}

export default LandingPage;
