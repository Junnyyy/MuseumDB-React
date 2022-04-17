import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

import LoginForm from "./components/LoginForm/LoginForm.js";
import useToken from "./components/LoginForm/useToken";

import Insert from "./pages/Insert/Insert";
import Delete from "./pages/Delete/Delete";
import Modify from "./pages/Modify/Modify";
import Report from "./pages/Report/Report";
import Search from "./pages/Search/Search";
import About from "./pages/About/About";

import Navbar from "./components/Navbar/Navbar";

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
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Insert" element={<Insert />} />
          <Route path="/Delete" element={<Delete />} />
          <Route path="/Modify" element={<Modify />} />
          <Route path="/Report" element={<Report />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
      <div className="info">
        <div className="textContainer">
          <h2>Welcome 📢</h2>
          <p>Hello World</p>
        </div>
      </div>
    </div>
  );
}

export default App;
