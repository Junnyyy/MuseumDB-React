import React, { useState, useEffect } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "./Search.css";

import Artpiece from "../../components/Search/Options/artpiece";
import Customer from "../../components/Search/Options/customer";
import Department from "../../components/Search/Options/department";
import Employee from "../../components/Search/Options/employee";
import Exhibit from "../../components/Search/Options/exhibit";
import Gallery from "../../components/Search/Options/gallery";
import StoreItem from "../../components/Search/Options/storeitem";
import Store_Transaction from "../../components/Search/Options/storetransaction";

export default function Search() {
  var searchType = <></>;
  const [option, setOptions] = useState("");
  const handleSelect = (e) => {
    setOptions(e);
  };

  switch (option) {
    case "artpiece":
      searchType = <Artpiece />;
      break;
    case "customer":
      searchType = <Customer />;
      break;
    case "department":
      searchType = <Department />;
      break;
    case "employee":
      searchType = <Employee />;
      break;
    case "exhibit":
      searchType = <Exhibit />;
      break;
    case "gallery":
      searchType = <Gallery />;
      break;
    case "store-item":
      searchType = <StoreItem />;
      break;
    case "store-transaction":
      searchType = <Store_Transaction />;
      break;
    // case "ticket-transaction":
    //   searchType = (
    //     <Ticket_Transaction
    //       setType={setType}
    //       setValid={setValid}
    //       setMessage={setMessage}
    //     />
    //   );
    //   break;
  }

  return (
    <div>
      <div className="selection">
        <h2>Please select a table to search.</h2>
        <DropdownButton
          id="dropdown-basic-button"
          title="Select Table"
          onSelect={handleSelect}
        >
          <Dropdown.Item eventKey="artpiece">Art Piece</Dropdown.Item>
          <Dropdown.Item eventKey="customer">Customer</Dropdown.Item>
          <Dropdown.Item eventKey="department">Department</Dropdown.Item>
          <Dropdown.Item eventKey="employee">Employee</Dropdown.Item>
          <Dropdown.Item eventKey="exhibit">Exhibit</Dropdown.Item>
          <Dropdown.Item eventKey="gallery">Gallery</Dropdown.Item>
          <Dropdown.Item eventKey="store-item">Store Item</Dropdown.Item>
          <Dropdown.Item eventKey="store-transaction">
            {" "}
            Store Transaction
          </Dropdown.Item>
          <Dropdown.Item eventKey="ticket-transaction">
            {" "}
            Ticket Transaction
          </Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="render">{searchType}</div>
      {/* <br></br>
      <h2>Search</h2> */}
      {/* <Artpiece /> */}
    </div>
  );
}
