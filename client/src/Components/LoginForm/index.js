import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import API from "../../utils/API";
import "./style.css";

function LoginForm(props) {
  const [formObject, setFormObject] = useState({
    username: "",
    password: "",
  });
  // history will be used to redirect to the next page after the user has registered, and is assigned to the userHistory hook
  let history = useHistory();

  function handleInputChange(event) {
    const { name, value } = event.target;
    var obj = {};
    obj[name] = value;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    API.loginUser({
      username: formObject.username,
      password: formObject.password,
    })
      .then((res) => {
        console.log("Response received after login:", res);
        if (res.status === 200) {
          console.log("Successful login");
          let userObj = {
            _id: res.data._id,
            username: res.data.username,
            saved: res.data.saved,
            loggedIn: true,
          };
          // Line below updates userObject stateful variable in App.js, which we then use to pass the userObject to each page
          props.setUserObject(userObj);
          history.push("/mypond");
        } else {
          console.log("Login error");
        }
      })
      .catch((err) => console.log("Login server error:", err));
  }

  return (
    <body className ="login">
      <div className="wrapper fadeInDownLogin">
        <div className="login-form">
          <form action="/examples/actions/confirmation.php" method="post">
            <h2>Login</h2>

            <div className="form-group">
              <input
                value={formObject.username}
                onChange={handleInputChange}
                type="username"
                className="form-control"
                name="username"
                placeholder="Username"
                required="required"
                // data-fillr-id="1081205151"
                // data-fillr="bound"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <input
                value={formObject.password}
                onChange={handleInputChange}
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                required="required"
                // data-fillr-id="938218994"
                // data-fillr="bound"
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              <button
                disabled={!(formObject.username && formObject.password)}
                onClick={handleFormSubmit}
                type="submit"
                className="btn btn-success btn-lg btn-block"
              >
                Login Now
              </button>
            </div>
          </form>

          <div className="text-center">
            First time User? <Link to="/signup">Register here</Link>
          </div>
        </div>
      </div>
    </body>
    
  );
}

export default LoginForm;
