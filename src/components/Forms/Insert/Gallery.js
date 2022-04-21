import { React, useState, useEffect } from "react";
import "./Insert.css";
// import PropTypes from "prop-types";

const getToken = () => {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
};

async function gallery(data) {
    return fetch("https://cst2-api.azurewebsites.net/gallery", {
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

  const [departmentData, setData] = useState([])

  const fetchData = () => {
      fetch("https://cst2-api.azurewebsites.net/department", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${getToken()}`,
        },
        mode: "cors",
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
          return response.json()
      })
      .then(data => {
          setData(data)
      })
  }

useEffect(() => {
      fetchData()
  }, [])

console.log(departmentData)

let departmentNames = departmentData.length > 0 && departmentData.map((item, i) => {
  return (
    <option key={i} value={item.Department_Name}>{item.Department_Name}</option>
  )
})

    const [name,setname ] = useState();
    const [manager,setmanager ] = useState("Administration");
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
          {departmentNames}
        </select>
        </div>
        <div>
        <label >Capacity</label>
        <input type="number"  className="gallery" onChange={(e) => setcapacity(e.target.value)}   />
        </div>
        
       
    
        <button className="submit">Submit</button>
     
    </main>
  );
}
