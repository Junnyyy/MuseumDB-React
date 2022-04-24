import React, { useState, useEffect } from "react";
import Datatable from "../artdatatable";

const getToken = () => {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
};

export default function Artpiece() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("https://cst2-api.azurewebsites.net/artpiece", {
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
    return rows.filter(
      (row) =>
        columns.some(
          (column) =>
            row[column]
              ?.toString()
              .toLowerCase()
              .indexOf(filter.toLowerCase()) > -1
        )
      // row.Art_Piece_ID?.toString().indexOf(filter.toLowerCase()) > -1 ||
      // row.Art_Piece_Title.toLowerCase().indexOf(filter.toLowerCase()) > -1 ||
      // row.Date_Created.toLowerCase().indexOf(filter.toLowerCase()) > -1 ||
      // row.Medium.toLowerCase().indexOf(filter.toLowerCase()) > -1 ||
      // row.Creator_F_Name.toLowerCase().indexOf(filter.toLowerCase()) > -1 ||
      // row.Creator_L_Name.toLowerCase().indexOf(filter.toLowerCase()) > -1 ||
      // row.Being_Refurbished.toString().indexOf(filter.toLowerCase()) > -1 ||
      // row.On_Display.toString().indexOf(filter.toLowerCase()) > -1 ||
      // row.Year_Acquired.toString().indexOf(filter.toLowerCase()) > -1 ||
      // row.Culture.toLowerCase().indexOf(filter.toLowerCase()) > -1 ||
      // row.Piece_Height?.toString().indexOf(filter.toLowerCase()) > -1 ||
      // row.Piece_Length?.toString().indexOf(filter.toLowerCase()) > -1 ||
      // row.Piece_Width?.toString().indexOf(filter) > -1 ||
      // row.Gallery_Loc.toLowerCase().indexOf(filter.toLowerCase()) > -1 ||
      // row.Exhibit_ID.toString().indexOf(filter.toLowerCase()) > -1
    );
  }

  return (
    <div>
      <br></br>

      <h2 className="title">Artpieces</h2>
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
