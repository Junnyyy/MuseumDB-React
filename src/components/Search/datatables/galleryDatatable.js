import React from "react";
import { Table } from "react-bootstrap";

export default function CustomerDatatable({ data }) {
  const columns = data[0] && Object.keys(data[0]);
  return (
    // <table cellPadding={0} cellSpacing={0}>
    // <Table id="table" className="table">
    <>
      <Table responsive className="datatable">
        <thread>
          {/* <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr> */}
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Capacity</th>
          </tr>
        </thread>
        <tbody>
          {data.map((row) => (
            <tr>
              {columns.map((column) => (
                <td type="text">{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
