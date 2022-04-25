import React from "react";
import { Table } from "react-bootstrap";

export default function ArtDatatable({ data }) {
  const columns = data[0] && Object.keys(data[0]);
  return (
    // <table cellPadding={0} cellSpacing={0}>
    // <Table id="table" className="table">
    <>
      <table className="table">
        {/* <Table responsive className="datatable"> */}
        {/* <table id="table" className="table"> */}
        <thread>
          {/* <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr> */}
          <tr>
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
          </tr>
        </thread>
        <tbody>
          {/* {data.map((data, index) => {
            return (
              <tr key={index}>
                <td type="text">{data.Art_Piece_ID}</td>
                <td type="text"> {data.Art_Piece_Title}</td>
                <td type="text">{data.Data_Created} </td>
                <td type="text">{data.Medium}</td>
                <td type="text">{data.Department_Name} </td>
                <td type="text">{data.Employee_Email}</td>
                <td type="text"> {data.Employee_F_Name}</td>
                <td type="text">{data.Employee_M_Name} </td>
                <td type="text">{data.Employee_L_Name}</td>
                <td type="text">{data.Department_Name} </td>
                <td type="text">{data.Employee_Email}</td>
                <td type="text"> {data.Employee_F_Name}</td>
                <td type="text">{data.Employee_M_Name} </td>
                <td type="text">{data.Employee_L_Name}</td>
                <td type="text">{data.Department_Name} </td>
                <td type="text">{data.Employee_Email}</td>
              </tr>
            );
          })} */}
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
