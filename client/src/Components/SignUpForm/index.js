import React from "react";

import "./style.css";

function SignUpForm() {
  return (
    <div class="wrapper fadeInDownSignUp">
      <div class="signup-form">
        <form action="/examples/actions/confirmation.php" method="post">
          <h2>Register</h2>
          <p class="hint-text">
            Create your account. It's free and only takes a minute.
          </p>
          <div class="form-group">
           
          </div>
          <div class="form-group">
            <input
              type="username"
              class="form-control"
              name="username"
              placeholder="Username"
              required="required"
              data-fillr-id="1081205151"
              data-fillr="bound"
              autocomplete="off"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              name="password"
              placeholder="Password"
              required="required"
              data-fillr-id="938218994"
              data-fillr="bound"
              autocomplete="off"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              name="confirm_password"
              placeholder="Confirm Password"
              required="required"
              data-fillr-id="151220269"
              data-fillr="bound"
              autocomplete="off"
            />
          </div>
      
          <div class="form-group">
            <button type="submit" class="btn btn-success btn-lg btn-block">
              Register Now
            </button>
          </div>
        </form>

        <div class="text-center">
          Already have an account? <a href="#">Sign in</a>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
