import { React, useState } from "react";
import "./Insert.css";
// import PropTypes from "prop-types";

const getToken = () => {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
};

async function gallery(data) {
    return fetch("https://cst2-api.azurewebsites.net/employee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getToken()}`,
      },
      mode: "cors",
      body: JSON.stringify(data),
    }).then((data) => data.json());
  }

export default function Gallery() {

    // name
    // manager (department name, should be a drop down)
    // capacity (INT)
    const [name,setname ] = useState();
    const [manager,setmanager ] = useState();
    const [capacity,setcapacity ] = useState();



  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await gallery({

     name,
     manager,
     capacity,

    });

  };



  return (
    <main>
        <h1>Gallery</h1>
        <div>
        <label >Gallery Name</label>
        <input type="text" className="gallery" onChange={(e) => setname(e.target.value)}  />
        </div>
        <div>
        <label >Managing Department </label>
        <select className="gallery" onChange={(e) => setmanager(e.target.value)}>
          <option value="Administration">Administration</option>
          <option value="American Painting and Sculpture">American Painting and Sculpture</option>
          <option value="Antiquities">Antiquities</option>
          <option value="Curation">Curation</option>
          <option value="European Ar">European Art</option>
          <option value="Gift Shop">Gift Shop</option>
        </select>
        </div>
        <div>
        <label >Capacity</label>
        <input type="text"  className="gallery" onChange={(e) => setname(e.target.value)}   />
        </div>
        
       
    
        <button className="submit">Submit</button>
     
    </main>
  );
}
