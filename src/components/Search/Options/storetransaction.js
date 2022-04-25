import React, { useState, useEffect } from "react";
import Datatable from "../datatables/storetransactionDatatable";

const getToken = () => {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
};

export default function Artpiece() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("https://cst2-api.azurewebsites.net/storetransaction", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getToken()}`,
      },
      mode: "cors",
    })
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  function search(rows) {
    const columns = rows[0] && Object.keys(rows[0]);
    return rows.filter((row) =>
      columns.some(
        (column) =>
          row[column]?.toString().toLowerCase().indexOf(filter.toLowerCase()) >
          -1
      )
    );
  }

  return (
    <div>
      <br></br>
      <h2 className="title">Store Transactions</h2>
      <div className="filter">
        <input
          type="text"
          className="search-input"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div className="datatable">
        <Datatable data={search(data)} />
      </div>
    </div>
  );
}
