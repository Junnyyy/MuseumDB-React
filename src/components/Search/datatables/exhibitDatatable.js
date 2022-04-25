import React from "react";

export default function CustomerDatatable({ data }) {
  const columns = data[0] && Object.keys(data[0]);
  return (
    <>
      <table className="table">
        <thread>
          {/* <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr> */}
          <tr>
            <th>ID #</th>
            <th>Name</th>
            <th>Arrival</th>
            <th>Depature</th>
            <th>Permanent</th>
            <th>Ticket $</th>
            <th>Tickets Sold</th>
            <th>Department</th>
            <th>Location</th>
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
      </table>
    </>
  );
}
