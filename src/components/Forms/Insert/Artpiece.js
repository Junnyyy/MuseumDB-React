import { React, useState, useEffect } from "react";
import "./Insert.css";
// import PropTypes from "prop-types";

const getToken = () => {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
};



async function ArtInsert(data) {

  return fetch("https://cst2-api.azurewebsites.net/artpiece", 
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
    mode: "cors",
    body: JSON.stringify(data),
  })
  .then((data) => data.json())
  .catch((err) => {
      console.log(err);
      <h2>Error: {err}</h2>
  })
}

export default function Art_Piece() {


  const [exhibitData, setExData] = useState([])

  const fetchExData = () => {
      fetch("https://cst2-api.azurewebsites.net/exhibit", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${getToken()}`,
        },
        mode: "cors",
      })
      .then(response => {
          return response.json()
      })
      .then(data => {
          setExData(data)
      })
  }

useEffect(() => {
      fetchExData()
  }, [])

console.log(exhibitData)

let exhibitIDs = exhibitData.length > 0 && exhibitData.map((item, i) => {
  return (
    <option key={i} value={item.id}>{item.Exhibit_ID}</option>
  )
})

const [galleryData, setGaData] = useState([])

const fetchGaData = () => {
    fetch("https://cst2-api.azurewebsites.net/gallery", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getToken()}`,
      },
      mode: "cors",
    })
    .then(response => {
        return response.json()
    })
    .then(data => {
        setGaData(data)
    })
}

useEffect(() => {
    fetchGaData()
}, [])

console.log(galleryData)

let galleryNames = galleryData.length > 0 && galleryData.map((item, i) => {
return (
  <option key={i} value={item.id}>{item.Gallery_Name}</option>
)
})

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
    const token = await ArtInsert({
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
        <label className="box">Title</label>
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
          className="datebox"
          onChange={(e) => setcreated(e.target.value)}
        />
      </div>
      <div>
        <label className="box">Medium</label>
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
        <label className="box">Culture</label>
        <input
          type="text"
          className="artpiece"
          onChange={(e) => setculture(e.target.value)}
        />
      </div>
      <div>
        <label className="box">Height</label>
        <input
          type="number"
          className="artpiece"
          onChange={(e) => setheight(e.target.value)}
        />
      </div>
      <div>
        <label className="box">Length</label>
        <input
          type="number"
          className="artpiece"
          onChange={(e) => setlen(e.target.value)}
        />
      </div>
      <div>
        <label className="box">Width</label>
        <input
          type="number"
          className="artpiece"
          onChange={(e) => setwidth(e.target.value)}
        />
      </div>
      <div>
        <label className="box">Gallery</label>
        <select className="artpiece" onChange={(e) => setgalLoc(e.target.value)}>
          {galleryNames}
        </select>
      </div>
      <div>
        <label className="box">Exhibit</label>
        <select type="text" className="artpiece" onChange={(e) => setEID(e.target.value)}>
          {exhibitIDs}
        </select>
      </div>

      <button className="submit">Submit</button>
    </form>
  );
}

// ArtPiece.propTypes = {
//   setToken: PropTypes.func.isRequired,
// };
