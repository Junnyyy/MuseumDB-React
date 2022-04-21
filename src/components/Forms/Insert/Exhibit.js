import { React, useState, useEffect } from "react";
import "./Insert.css";
// import PropTypes from "prop-types";

const getToken = () => {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
};

async function exhibit(data) {
    return fetch("https://cst2-api.azurewebsites.net/exhibit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getToken()}`,
      },
      mode: "cors",
      body: JSON.stringify(data),
    }).then((data) => data.json());
  }

export default function Exhibit() {

  const [departmentData, setDeData] = useState([])

  const fetchDeData = () => {
      fetch("https://cst2-api.azurewebsites.net/department", {
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
          setDeData(data)
      })
  }

useEffect(() => {
      fetchDeData()
  }, [])

console.log(departmentData)

let departmentNames = departmentData.length > 0 && departmentData.map((item, i) => {
  return (
    <option key={i} value={item.id}>{item.Department_Name}</option>
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
 
    const [name,setname ] = useState();
    const [arr,setarr ] = useState();
    const [depart,setdepart ] = useState();
    const [permanent,setpermanent] = useState();
    const [price,setprice ] = useState();
    const [manager,setmanager ] = useState();
    const [loc,setloc ] = useState();

    const [errStatus, setErrStatus] = useState(undefined);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await exhibit({

     name,
     arr,
     depart,
     permanent,
     price,
     manager,
     loc,

    })
    .then(() => {
      setErrStatus({type: 'success'});
    })
    .catch((error) => {
      setErrStatus({type: 'error', error});
    })
  };

    
  return (
    <main>
        <h1>Exhibit Info</h1>

        <div>
        <label >Exhibit Name</label>
        <input type="text"  className="exhibit" onChange={(e) => setname(e.target.value)}   />
        </div>
        <div>
        <label >Arrival Date</label>
        <input type="date"  className="datebox" onChange={(e) => setarr(e.target.value)}  />
        </div>
        <div>
        <label >Departure Date</label>
        <input type="date" className="datebox" onChange={(e) => setdepart(e.target.value)}  />
        </div>
        <div>
        <label >Permanent Exhibit</label>
        <select className="exhibit" onChange={(e) => setpermanent(e.target.value)}>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
        </div>
        <div>
        <label >Ticket Price</label>
        <input type="number"  className="exhibit" onChange={(e) => setprice(e.target.value)}  />
        </div>
        <div>
        <label >Managing Department</label>
        <select className="exhibit" onChange={(e) => setmanager(e.target.value)}>
          {departmentNames}
        </select>
        </div>
        <div>
        <label >Gallery</label>
        <select className="exhibit" onChange={(e) => setloc(e.target.value)}>
          {galleryNames}
        </select>
        </div>
       
    
        <button className="submit">Submit</button>

        {errStatus?.type === 'success' && <p>"Submit Successful"</p>}
        {errStatus?.type === 'error' && (
        <p>"Error: Submit Failed"</p>)}
     
    </main>
  );
}
