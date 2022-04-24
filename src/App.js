import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

import LoginForm from "./components/LoginForm/LoginForm";
import useToken from "./components/LoginForm/useToken";
import useUser from "./pages/Home/useUser";
import useValid from "./components/Alerts/useValid";
import useMessage from "./components/Alerts/useMessage";
import useType from "./components/Alerts/useType";

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
import Alerts from "./components/Alerts/Alerts";

function App() {
  const { token, setToken } = useToken();
  const { user, setUser } = useUser();
  const { type, setType } = useType();
  const { valid, setValid } = useValid();
  const { message, setMessage } = useMessage();

  if (!token) {
    return (
      <div className="app">
        {valid ? <></> : <Alerts type={type} message={message} />}
        <div className="login">
          <LoginForm
            setToken={setToken}
            setUser={setUser}
            setType={setType}
            setValid={setValid}
            setMessage={setMessage}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        {valid ? <></> : <Alerts type={type} message={message} />}
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route
            path="/Insert"
            element={
              <Insert
                setType={setType}
                setValid={setValid}
                setMessage={setMessage}
              />
            }
          />
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
