import { React, useState } from "react";
import "./Insert.css";
// import PropTypes from "prop-types";

const getToken = () => {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
};

async function tickettransaction(data) {
    return fetch("https://cst2-api.azurewebsites.net/tickettransaction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getToken()}`,
      },
      mode: "cors",
      body: JSON.stringify(data),
    }).then((data) => data.json());
  }

  export default function Ticket_Transaction() {

    const [CID,setCID ] = useState();
    const [EID,setEID ] = useState();



  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await tickettransaction({

     CID,
     EID,

    });

  };

  return (

    <main>
        <h1>Ticket Transaction</h1>
        <div>
        <label >Customer ID</label>
        <input type="text"  className="tickettransaction" onChange={(e) => setCID(e.target.value)}   />
        </div>
        <div>
        <label >Exhibit ID</label>
        <input type="text"  className="tickettransaction" onChange={(e) => setEID(e.target.value)}  />
        </div>
        
    
        <button className="submit">Submit</button>
     
    </main>
  );
}

