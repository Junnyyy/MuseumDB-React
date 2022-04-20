import { React, useState } from "react";
import "./Artpiece.css";
// import PropTypes from "prop-types";

const getToken = () => {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
};

async function artInsert(data) {
  return fetch("https://cst2-api.azurewebsites.net/artpiece", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
    mode: "cors",
    body: JSON.stringify(data),
  }).then((data) => {
    data.json();
  });
}

export default function Art_Piece() {
  const [title, settitle] = useState();
  const [created, setcreated] = useState();
  const [medium, setmedium] = useState();
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [refurbishedstatus, setrefurbishedstatus] = useState();
  const [displaystatus, setdisplaystatus] = useState();
  const [culture, setculture] = useState();
  const [height, setheight] = useState();
  const [len, setlen] = useState();
  const [width, setwidth] = useState();
  const [galLoc, setgalLoc] = useState();
  const [EID, setEID] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await artInsert({
      title,
      created,
      medium,
      firstname,
      lastname,
      refurbishedstatus,
      displaystatus,
      culture,
      height,
      len,
      width,
      galLoc,
      EID,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="artForm">
      <h1>Art Piece</h1>

      <div>
        <label className="box">Art Piece Title</label>
        <input
          type="text"
          className="artpiece"
          onChange={(e) => settitle(e.target.value)}
        />
      </div>
      <div>
        <label className="box">Date Created</label>
        <input
          type="date"
          className="artpiece"
          onChange={(e) => setcreated(e.target.value)}
        />
      </div>
      <div>
        <label className="box">medium</label>
        <input
          type="text"
          className="artpiece"
          onChange={(e) => setmedium(e.target.value)}
        />
      </div>
      <div>
        <label className="box">Creator First Name</label>
        <input
          type="text"
          className="artpiece"
          onChange={(e) => setfirstname(e.target.value)}
        />
      </div>
      <div>
        <label className="box">Creator Last Name</label>
        <input
          type="text"
          className="artpiece"
          onChange={(e) => setlastname(e.target.value)}
        />
      </div>
      <div>
        <label className="box">Being Refurbished</label>
        <select
          className="artpiece"
          onChange={(e) => setrefurbishedstatus(e.target.value)}
        >
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </div>
      <div>
        <label className="box">On Display</label>
        <select
          className="artpiece"
          onChange={(e) => setdisplaystatus(e.target.value)}
        >
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </div>
      <div>
        <label className="box">culture</label>
        <input
          type="text"
          className="artpiece"
          onChange={(e) => setculture(e.target.value)}
        />
      </div>
      <div>
        <label className="box">Piece Height</label>
        <input
          type="text"
          className="artpiece"
          onChange={(e) => setheight(e.target.value)}
        />
      </div>
      <div>
        <label className="box">Piece Length</label>
        <input
          type="text"
          className="artpiece"
          onChange={(e) => setlen(e.target.value)}
        />
      </div>
      <div>
        <label className="box">Piece Width</label>
        <input
          type="text"
          className="artpiece"
          onChange={(e) => setwidth(e.target.value)}
        />
      </div>
      <div>
        <label className="box">Gallery Location</label>
        <select
          className="artpiece"
          onChange={(e) => setgalLoc(e.target.value)}
        >
          <option value="Academia Gallery">Academia Gallery</option>
          <option value="America Room">America Room</option>
          <option value="Audrey Jones Beck">Audrey Jones Beck</option>
          <option value="Caroline Wiess Law">Caroline Wiess Law</option>
          <option value="Jones Hall">Jones Hall</option>
          <option value="Nancy and Rich Kinder">Nancy and Rich Kinder</option>
        </select>
      </div>
      <div>
        <label className="box">Exhibit ID</label>
        <input
          type="text"
          className="artpiece"
          onChange={(e) => setEID(e.target.value)}
        />
      </div>

      <button className="artpiecebutton">Submit</button>
    </form>
  );
}

// ArtPiece.propTypes = {
//   setToken: PropTypes.func.isRequired,
// };
