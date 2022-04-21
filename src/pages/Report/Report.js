import { React, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

import StoreSalesReport from "./StoreSalesReport";
import TicketSalesReport from "./TicketSalesReport"
import EmployeeAddressBook from "./EmployeeAddressBook";


export default function Report() {
  var formType = <></>;
  const [value, setValue] = useState("");
  const handleSelect = (e) => {
    setValue(e);
  };

  switch (value) {
    case "EmployeeAddressBook":
      formType = <EmployeeAddressBook />;
      break
    case"TicketSalesReport":
      formType = <TicketSalesReport />;
      break
    case"StoreSalesReport":
      formType = <StoreSalesReport/>;
      break
  }

  return (
    <div className="insert-wrapper">
      <div className="selection">
        <p>Please select a table to insert new data.</p>
        <DropdownButton
          id="dropdown-basic-button"
          title="Select Table"
          onSelect={handleSelect}
        >
          <Dropdown.Item eventKey="EmployeeAddressBook">Employee Address Book</Dropdown.Item>
          <Dropdown.Item eventKey="TicketSalesReport">Ticket Sales Report</Dropdown.Item>
          <Dropdown.Item eventKey="StoreSalesReport">Store Sales Report</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="render">{formType}</div>
    </div>
  );
}