import { React, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import Artpiece from "../../components/Forms/Insert/Artpiece";

export default function Insert() {
  var formType = <></>;
  const [value, setValue] = useState("");
  const handleSelect = (e) => {
    setValue(e);
  };

  if (value === "artpiece") {
    formType = <Artpiece />;
  }
  return (
    <div className="insert-wrapper">
      <div className="selection">
        <p>Please select an table.</p>
        <DropdownButton
          id="dropdown-basic-button"
          title="Insert options"
          onSelect={handleSelect}
        >
          <Dropdown.Item eventKey="artpiece">Art Piece</Dropdown.Item>
          <Dropdown.Item eventKey="artpiece-archive">
            Art Piece Archive
          </Dropdown.Item>
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
      </div>
      <div className="render">{formType}</div>
    </div>
  );
}
