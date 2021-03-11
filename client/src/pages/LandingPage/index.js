import React from "react";
import LoginForm from "../../Components/LoginForm";

function LandingPage(props) {
  
  return (
    <div>
      <LoginForm userObject={props.userObject} setUserObject={props.setUserObject} />
    </div>
  );
}

export default LandingPage;
