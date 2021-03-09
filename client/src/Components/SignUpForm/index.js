import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import API from "../../utils/API";
import "./style.css";

function SignUpForm(props) {
  const [formObject, setFormObject] = useState({
    username: "",
    password: ""
  });
  // history will be used to redirect to the next page after the user has registered
  let history = useHistory();

  function handleInputChange(event) {
    const { name, value } = event.target;
    var obj = {};
    obj[name] = value;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    API.registerUser({
      username: formObject.username.trim(),
      password: formObject.password.trim()
    })
      .then((res) => {
        console.log(res);
        if (res.data) {
          console.log("Successful signup");
          props.setUserObject({
            ...props.userObject,
            _id: res.data._id,
            username: res.data.username,
            saved: res.data.saved,
            loggedIn: false
          });
          history.push("/login");
        } else {
          console.log("Signup error");
        }
      })
      .catch((err) => console.log("Signup server error:", err));
  }

  return (
    <div className="signup">
      <div className="wrapper fadeInDownSignUp">
        <div className="signup-form">
          <form action="/examples/actions/confirmation.php" method="post">
            <h2>Register</h2>
            <p className="hint-text">
              Create your account. It's fast and free!
            </p>
            <div className="form-group"></div>
            <div className="form-group">
              <input
                value={formObject.username}
                onChange={handleInputChange}
                type="username"
                className="form-control"
                name="username"
                placeholder="Username"
                required="required"
                data-fillr-id="1081205151"
                data-fillr="bound"
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
                data-fillr-id="938218994"
                data-fillr="bound"
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
                Register Now
              </button>
            </div>
          </form>

          <div className="text-center">
            Already have an account? <Link to="/login">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
