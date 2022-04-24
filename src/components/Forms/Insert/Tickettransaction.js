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

export default function Ticket_Transaction({ setType, setValid, setMessage }) {
  const [exhibitData, setExData] = useState([]);
  const [complete, setComplete] = useState(false);
  const [fetcherror, setFetcherror] = useState(false);

  const fetchExData = () => {
    fetch("https://cst2-api.azurewebsites.net/exhibit", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getToken()}`,
      },
      mode: "cors",
    })
      .then((response) => {
        if (!response.ok) {
          setFetcherror(true);
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        setExData(data);
      });
  };

  useEffect(() => {
    fetchExData();
  }, []);

  console.log(exhibitData);

  let exhibitIDs =
    exhibitData.length > 0 &&
    exhibitData.map((item, i) => {
      return (
        <option key={i} value={item.Exhibit_ID}>
          {item.Exhibit_Name}
        </option>
      );
    });

  const [customerData, setCuData] = useState([]);

  const fetchCuData = () => {
    fetch("https://cst2-api.azurewebsites.net/customer", {
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
  };

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
  const [EID, setEID] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await tickettransaction({
      CID,
      EID,
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
      <h1>Ticket Transaction</h1>
      <div>
        <label>Customer</label>
        <select
          type="number"
          className="tickettransaction"
          onChange={(e) => setCID(e.target.value)}
        >
          {customerIDs}
        </select>
      </div>
      <div>
        <label>Exhibit</label>
        <select
          type="number"
          className="tickettransaction"
          onChange={(e) => setEID(e.target.value)}
        >
          {exhibitIDs}
        </select>
      </div>

      <button className="submit">Submit</button>
    </form>
  );
}
