import { React, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./app.css";
import LoginForm from "./components/LoginForm/LoginForm.js";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return (
      <div className="app">
        <LoginForm setToken={setToken} />
      </div>
    );
  }

  return (
    <div className="app">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// const loginDetails = {
//   username: "testuser",
//   password: "testpass",
// };

/*const [user, setUser] = useState({ username: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
    if (
      details.username === loginDetails.username &&
      details.password === loginDetails.password
    ) {
      console.log("Logged in");
      setUser({
        username: details.username,
      });
    } else {
      setError("Details do not match");
      console.log("Details do not match");
    }
  };

  const Logout = () => {
    console.log("Logout");
    setUser({
      username: "",
    });
  };

  return (
    <div className="App">
      {user.username != "" ? (
        <div className="Welcome">
          <h2>
            Welcome, <span>{user.username}</span>
          </h2>
          <br></br>
          <button class="loginButton" onClick={Logout}>
            Logout
          </button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );*/
