import { React } from "react";
import "./Home.css";
import {Link} from "react-router-dom";

export default function Home(props) {
  return (
    <div className="info" style = {{ backgroundImage: `url("https://static.mfah.com/images/mfah-at-home.5545251485772177919.jpg")` , backgroundSize: `cover`}}>
      <div className="textContainer">
        <h2 className = "welcome">Welcome {props.user}! 📢</h2>
        <ul className = "link"> 
          <li><Link to="/Collection" className = "link">Collection</Link></li>
          <li><Link to="/Shop" className = "link">Gift Shop</Link></li>
        </ul>
      </div>
    </div>
  );
}
