import React from "react";

export default function CustomerDatatable({ data }) {
  const columns = data[0] && Object.keys(data[0]);
  return (
    <>
      <table className="table">
        <thread>
          {/* <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr> */}
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Supervisor ID</th>
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
