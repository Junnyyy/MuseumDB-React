import { React, useState, useEffect } from "react";
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

export default function StoreTransaction() {

  const [itemData, setItData] = useState([])

  const fetchItData = () => {
      fetch("https://cst2-api.azurewebsites.net/storeitem", {
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
        setItData(data)
      })
  }
  
  useEffect(() => {
      fetchItData()
  }, [])
  
  console.log(itemData)
  
  let itemIDs = itemData.length > 0 && itemData.map((item, i) => {
  return (
    <option key={i} value={item.id}>{item.Item_ID}</option>
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
    const [IID,setIID ] = useState();



  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await storetransaction({

     CID,
     IID

    });

  };

  return (

    <main>
        <h1>Store Transaction</h1>
        <div>
        <label >Customer ID</label>
        <select   className="storetransaction" onChange={(e) => setCID(e.target.value)}>
          {customerIDs}
        </select>
        </div>
        <div>
        <label >Item ID</label>
        <select  className="storetransaction" onChange={(e) => setIID(e.target.value)}>
          {itemIDs}
        </select>
        </div>
        
    
        <button className="submit">Submit</button>
     
    </main>
  );
}

