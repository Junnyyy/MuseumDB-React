import { React, useState } from "react";
import "./Insert.css";
// import PropTypes from "prop-types";

const getToken = () => {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
};

async function exihibit(data) {
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

// name
// arr (DATE)
// depart (DATE)
// permanent (BOOL, 0 or 1)
// price (FLOAT)
// manager (Must be a department name, should do a drop down of department names)
// loc (Gallery name, should do a drop down)

export default function Exhibit(props) {

 
    const [name,setname ] = useState();
    const [arr,setarr ] = useState();
    const [depart,setdepart ] = useState();
    const [permanent,setpermanent] = useState();
    const [price,setprice ] = useState();
    const [manager,setmanager ] = useState();
    const [loc,setloc ] = useState();



  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await exihibit({

     name,
     arr,
     depart,
     permanent,
     price,
     manager,
     loc,

    });

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
        <input type="date"  className="exhibit" onChange={(e) => setarr(e.target.value)}  />
        </div>
        <div>
        <label >Departute Date</label>
        <input type="date" className="exhibit" onChange={(e) => setdepart(e.target.value)}  />
        </div>
        <div>
        <label >Permanent</label>
        <select className="exhibit" onChange={(e) => setpermanent(e.target.value)}>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
        </div>
        <div>
        <label >Ticket Price</label>
        <input type="text"  className="exhibit" onChange={(e) => setprice(e.target.value)}  />
        </div>
        <div>
        <label >Managing Department</label>
        <select className="exhibit" onChange={(e) => setmanager(e.target.value)}>
          <option value="Administration">Administration</option>
          <option value="American Painting and Sculpture">American Painting and Sculpture</option>
          <option value="Antiquities">Antiquities</option>
          <option value="Curation">Curation</option>
          <option value="European Ar">European Art</option>
          <option value="Gift Shop">Gift Shop</option>
        </select>
        </div>
        <div>
        <label >Located In</label>
        <select
          className="exhibit"
          onChange={(e) => setloc(e.target.value)}
        >
          <option value="Academia Gallery">Academia Gallery</option>
          <option value="America Room">America Room</option>
          <option value="Audrey Jones Beck">Audrey Jones Beck</option>
          <option value="Caroline Wiess Law">Caroline Wiess Law</option>
          <option value="Jones Hall">Jones Hall</option>
          <option value="Nancy and Rich Kinder">Nancy and Rich Kinder</option>
        </select>
        </div>
       
    
        <button className="submit">Submit</button>
     
    </main>
  );
}
