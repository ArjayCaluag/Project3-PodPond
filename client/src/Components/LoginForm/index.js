import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div class="wrapper fadeInDownLogin">
      <div class="login-form">
        <form action="/examples/actions/confirmation.php" method="post">
          <h2>Login</h2>

          <div class="form-group">
            <input
              type="username"
              class="form-control"
              name="username"
              placeholder="Username"
              required="required"
              // data-fillr-id="1081205151"
              // data-fillr="bound"
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
              // data-fillr-id="938218994"
              // data-fillr="bound"
              autocomplete="off"
            />
          </div>

          <div class="form-group">
            <button type="submit" class="btn btn-success btn-lg btn-block">
              Login Now
            </button>
          </div>
        </form>

        <div class="text-center">
          First time User? <Link to ="/signup">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
