import React from "react";

export default function ArtDatatable({ data }) {
  const columns = data[0] && Object.keys(data[0]);
  return (
    <>
      <table className="table">
        <thread>
          <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
          {/* <tr>
            <th>ID #</th>
            <th>Title </th>
            <th>Data created</th>
            <th>Medium</th>
            <th>Creator firstname</th>
            <th>Creator lastname</th>
            <th>Being refurbished</th>
            <th>On display</th>
            <th>Year acquired</th>
            <th>Culture</th>
            <th>Height</th>
            <th>Length</th>
            <th>Width</th>
            <th>Location</th>
            <th>Exhibit ID</th>
          </tr> */}
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
