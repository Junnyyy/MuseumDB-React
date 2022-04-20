import { React, useState } from "react";
import "./Insert.css";
// import PropTypes from "prop-types";

const getToken = () => {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
};

async function storetransaction(data) {
    return fetch("https://cst2-api.azurewebsites.net/storetransaction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getToken()}`,
      },
      mode: "cors",
      body: JSON.stringify(data),
    }).then((data) => data.json());
  }

export default function Store_Transaction() {

    const [CID,setCID ] = useState();
    const [IID,setIID ] = useState();



  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await storetransaction({

     CID,
     IID,

    });

  };

  return (

    <main>
        <h1>Store Transaction</h1>
        <div>
        <label >Customer ID</label>
        <input type="text"  className="storetransaction" onChange={(e) => setCID(e.target.value)}   />
        </div>
        <div>
        <label >Item ID</label>
        <input type="text"  className="storetransaction" onChange={(e) => setIID(e.target.value)}  />
        </div>
        
    
        <button className="submit">Submit</button>
     
    </main>
  );
}

