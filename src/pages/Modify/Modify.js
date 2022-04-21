import { React, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import Artpiece from "../../components/Forms/Modify/Artpiece";
import Customer from "../../components/Forms/Modify/Customer"
import Department from "../../components/Forms/Modify/Department";
import Employee from "../../components/Forms/Modify/Employee";
import Exhibit from "../../components/Forms/Modify/Exhibit";
import Gallery from "../../components/Forms/Modify/Gallery";
import Store_Item from "../../components/Forms/Modify/Storeitem";
import Store_Transaction from "../../components/Forms/Modify/Storetransaction";
import Ticket_Transaction from "../../components/Forms/Modify/Tickettransaction";



export default function Insert() {
  var formType = <></>;
  const [value, setValue] = useState("");
  const handleSelect = (e) => {
    setValue(e);
  };

  switch (value) {
    case "artpiece":
      formType = <Artpiece />;
      break
    case"customer":
      formType = <Customer/>;
      break
    case"department":
      formType = <Department/>;
      break
    case"employee":
      formType = <Employee/>;
      break
    case"exhibit":
      formType = <Exhibit/>;
      break
    case"gallery":
      formType = <Gallery/>;
      break
    case"store-item":
      formType = <Store_Item/>;
      break
    case"store-transaction":
      formType = <Store_Transaction/>;
      break
    case"ticket-transaction":
      formType = <Ticket_Transaction/>;
      break
  }

  return (
    <div className="insert-wrapper">
      <div className="selection">
        <h2>Please select a table to Modify / Delete data</h2>

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
            Store Transaction
          </Dropdown.Item>
          <Dropdown.Item value="ticket-transaction">
            Ticket Transaction
          </Dropdown.Item>
        </DropdownButton>
        <br></br>
      </div>
      <div className="render">{formType}</div>
      
    </div>
      
  );
}
