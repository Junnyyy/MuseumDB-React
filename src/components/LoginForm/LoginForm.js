import { React, useState } from "react";
import PropTypes from "prop-types";
import "./LoginForm.css";

async function authUser(credentials) {
  return fetch("https://cst2-api.azurewebsites.net/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await authUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <div className="card">
      <div className="login-wrapper">
        <h1>Database Login</h1>
        <br></br>
        <div className="login-group">
          <form onSubmit={handleSubmit}>
            <label>
              <p>Username</p>
              <input
                className="loginInput"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br></br>
            <label>
              <p>Password</p>
              <input
                className="loginInput"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <div className="button-wrapper">
              <button className="loginButton" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
