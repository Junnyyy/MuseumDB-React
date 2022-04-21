import { React, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import ArtPieceSearch from "../../components/Forms/Insert/Search/ArtPieceSearch";
import CustomerSearch from "../../components/Forms/Insert/Search/CustomerSearch";
import EmployeeSearch from "../../components/Forms/Insert/Search/EmployeeSearch";
import DepartmentSearch from "../../components/Forms/Insert/Search/DepartmentSearch";

export default function Search() {
    var formType = <></>;
    const [value, setValue] = useState("");
    const handleSelect = (e) => {
      setValue(e);
    };
  
    if (value === "artpiece") {
      formType = <ArtPieceSearch/>;
    }
    if (value === "Member") {
      formType = <CustomerSearch/>;
    }
    if (value === "Employee") {
      formType = <EmployeeSearch/>;
    }

    if (value === "Department") {
      formType = <DepartmentSearch/>;
    }
    return(
      <div className="insert-wrapper">
        <div className="selection">
          <p>Please Select a Table for Search .</p>
          <DropdownButton
            id="dropdown-basic-button"
            title="Search options"
            onSelect={handleSelect}>
            <Dropdown.Item eventKey="artpiece">Art Pieces</Dropdown.Item>
            <Dropdown.Item eventKey="Department">Department</Dropdown.Item>
            <Dropdown.Item eventKey="Employee">Employee</Dropdown.Item>
            <Dropdown.Item eventKey="exhibit">Exhibit</Dropdown.Item>
            <Dropdown.Item eventKey="gallery">Gallery</Dropdown.Item>
            <Dropdown.Item eventKey="store-item">Store Item</Dropdown.Item>
            <Dropdown.Item eventKey="Member"> Member </Dropdown.Item>
            <Dropdown.Item value="ticket-transaction">Ticket Transaction </Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="render">{formType}</div>
      </div>
    );
  }
