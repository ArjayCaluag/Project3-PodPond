import React from "react";
import "./style.css";

function LoginForm() {
  return (

    <div class="wrapper fadeInDown">
      <div id="formContent">
        {/* <!-- Tabs Titles --> */}
    
        {/* <!-- Our site icon --> */}
        {/* <div class="fadeIn first">
          <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
        </div> */}
    
        {/* <!-- Login Form --> */}
        <form>
          <input type="text" id="login" class="fadeIn second" name="login" placeholder="Username"/>
          <input type="text" id="password" class="fadeIn third" name="login" placeholder="Password"/>
          <input type="submit" class="fadeIn fourth" value="Log In"/>
        </form>
{/*     
        <!-- Remind Passowrd --> */}
        <div id="formFooter">
          <a class="underlineHover" href="#"> Not a registered user? Sign up here</a>
        </div>
    
      </div>
    </div>



  );
}

export default LoginForm;
