import { React } from "react";
import "./Home.css";

export default function Home(props) {
  return (
    <div className="info">
      <div className="textContainer">
        <h2>Welcome {props.user}! 📢</h2>
        <p>Hello World</p>
      </div>
    </div>
  );
}
