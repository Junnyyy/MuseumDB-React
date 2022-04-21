import { React, useState, useEffect } from "react";
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

export default function TicketTransaction() {


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
  
const [customerData, setCuData] = useState([])

const fetchCuData = () => {
    fetch("https://cst2-api.azurewebsites.net/customer", {
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
      setCuData(data)
    })
}

useEffect(() => {
    fetchCuData()
}, [])

console.log(customerData)

let customerIDs = customerData.length > 0 && customerData.map((item, i) => {
return (
  <option key={i} value={item.id}>{item.Customer_ID}</option>
)
})


    const [CID,setCID ] = useState();
    const [EID,setEID ] = useState();



  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await tickettransaction({

     CID,
     EID

    });

  };

  return (

    <main>
        <h1>Ticket Transaction</h1>
        <div>
        <label >Customer ID</label>
        <select  className="tickettransaction" onChange={(e) => setCID(e.target.value)}>
          {customerIDs}
        </select>
        </div>
        <div>
        <label >Exhibit ID</label>
        <select  className="tickettransaction" onChange={(e) => setEID(e.target.value)}>
          {exhibitIDs}
        </select>
        </div>
        
    
        <button className="submit">Submit</button>
     
    </main>
  );
}

