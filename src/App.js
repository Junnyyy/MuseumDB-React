import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";

import LoginForm from "./components/LoginForm/LoginForm.js";
import useToken from "./components/LoginForm/useToken";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return (
      <div className="login">
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
