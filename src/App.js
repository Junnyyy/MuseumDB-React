import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

import LoginForm from "./components/LoginForm/LoginForm";
import useToken from "./components/LoginForm/useToken";
import useUser from "./pages/Home/useUser";

import Home from "./pages/Home/Home";
import Insert from "./pages/Insert/Insert";
import Delete from "./pages/Delete/Delete";
import Modify from "./pages/Modify/Modify";
import Report from "./pages/Report/Report";
import Search from "./pages/Search/Search";
import About from "./pages/About/About";
import Shop from "./pages/Shop/Shop";
import Collection from "./pages/Collection/Collection";

import Navbar from "./components/Navbar/Navbar";

function App() {
  const { token, setToken } = useToken();
  const { user, setUser } = useUser();

  if (!token) {
    return (
      <div className="login">
        <LoginForm setToken={setToken} setUser={setUser} />
      </div>
    );
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/Insert" element={<Insert />} />
          <Route path="/Delete" element={<Delete />} />
          <Route path="/Modify" element={<Modify />} />
          <Route path="/Report" element={<Report />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/About" element={<About />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Collection" element={<Collection />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
