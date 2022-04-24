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

export default function Store_Transaction({ setType, setValid, setMessage }) {
  const [itemData, setItData] = useState([]);
  const [customerData, setCuData] = useState([]);
  const [complete, setComplete] = useState(false);
  const [fetcherror, setFetcherror] = useState(false);

  async function fetchItData() {
    let storeResponse = await fetch(
      "https://cst2-api.azurewebsites.net/storeitem",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${getToken()}`,
        },
        mode: "cors",
      }
    )
      .then((response) => {
        if (!response.ok) {
          setFetcherror(true);
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        setItData(data);
      });
  }

  useEffect(() => {
    fetchItData();
  }, []);

  let itemIDs =
    itemData.length > 0 &&
    itemData.map((item, i) => {
      return (
        <option key={i} value={item.Item_ID}>
          {item.Item_Name}
        </option>
      );
    });

  async function fetchCuData() {
    return fetch("https://cst2-api.azurewebsites.net/customer", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getToken()}`,
      },
      mode: "cors",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCuData(data);
      });
  }

  useEffect(() => {
    fetchCuData();
  }, []);

  console.log(customerData);

  let customerIDs =
    customerData.length > 0 &&
    customerData.map((item, i) => {
      return (
        <option key={i} value={item.Customer_ID}>
          {item.Customer_F_Name + " " + item.Customer_L_Name}
        </option>
      );
    });

  const [CID, setCID] = useState(1);
  const [IID, setIID] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(CID);
    const response = await storetransaction({
      CID,
      IID,
    });
    if (response.error) {
      setType("danger");
      setValid(false);
      setMessage(response.error);
    } else {
      setComplete(true);
    }
  };

  useEffect(() => {
    if (complete == true) {
      setType("success");
      setValid(false);
      setMessage("Art piece successfully created!");
    }
    if (fetcherror == true) {
      setType("danger");
      setValid(false);
      setMessage("The server has encountered an error.");
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <h1>Store Transaction</h1>
      <div>
        <label>Customer</label>
        <select
          type="number"
          className="storetransaction"
          onChange={(e) => setCID(e.target.value)}
        >
          {customerIDs}
        </select>
      </div>
      <div>
        <label>Item</label>
        <select
          type="number"
          className="storetransaction"
          onChange={(e) => setIID(e.target.value)}
        >
          {itemIDs}
        </select>
      </div>

      <button className="submit">Submit</button>
    </form>
  );
}
