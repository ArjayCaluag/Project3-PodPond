import React from "react";
import SignUpForm from "../../Components/SignUpForm";

function SignUpPage(props) {
  return (
    <div>
      <SignUpForm userObject={props.userObject} setUserObject={props.setUserObject} />
    </div>
  );
}

export default SignUpPage;
