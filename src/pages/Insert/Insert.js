import { React, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import Artpiece from "../../components/Forms/Insert/Artpiece";
import Customer from "../../components/Forms/Insert/Customer";
import Department from "../../components/Forms/Insert/Department";
import Employee from "../../components/Forms/Insert/Employee";
import Exhibit from "../../components/Forms/Insert/Exhibit";
import Gallery from "../../components/Forms/Insert/Gallery";
import StoreItem from "../../components/Forms/Insert/Storeitem";
import Store_Transaction from "../../components/Forms/Insert/Storetransaction";
import Ticket_Transaction from "../../components/Forms/Insert/Tickettransaction";

export default function Insert({ setType, setValid, setMessage }) {
  setValid(true);
  var formType = <></>;
  const [value, setValue] = useState("");
  const handleSelect = (e) => {
    setValue(e);
  };

  switch (value) {
    case "artpiece":
      formType = (
        <Artpiece
          setType={setType}
          setValid={setValid}
          setMessage={setMessage}
        />
      );
      break;
    case "customer":
      formType = (
        <Customer
          setType={setType}
          setValid={setValid}
          setMessage={setMessage}
        />
      );
      break;
    case "department":
      formType = (
        <Department
          setType={setType}
          setValid={setValid}
          setMessage={setMessage}
        />
      );
      break;
    case "employee":
      formType = (
        <Employee
          setType={setType}
          setValid={setValid}
          setMessage={setMessage}
        />
      );
      break;
    case "exhibit":
      formType = (
        <Exhibit
          setType={setType}
          setValid={setValid}
          setMessage={setMessage}
        />
      );
      break;
    case "gallery":
      formType = (
        <Gallery
          setType={setType}
          setValid={setValid}
          setMessage={setMessage}
        />
      );
      break;
    case "store-item":
      formType = (
        <StoreItem
          setType={setType}
          setValid={setValid}
          setMessage={setMessage}
        />
      );
      break;
    case "store-transaction":
      formType = (
        <Store_Transaction
          setType={setType}
          setValid={setValid}
          setMessage={setMessage}
        />
      );
      break;
    case "ticket-transaction":
      formType = (
        <Ticket_Transaction
          setType={setType}
          setValid={setValid}
          setMessage={setMessage}
        />
      );
      break;
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
      <div className="render">{formType}</div>
    </div>
  );
}
