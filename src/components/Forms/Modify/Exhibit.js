import { useEffect, useState } from "react";
import "./modify.css";

function Exhibit_Table() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [exhibitData, setData] = useState([]);

  const fetchData = () => {
    fetch("https://cst2-api.azurewebsites.net/exhibit", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getToken()}`,
      },
      mode: "cors",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };

  async function exhibitModify(data) {
    return fetch("https://cst2-api.azurewebsites.net/exhibit", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getToken()}`,
      },
      mode: "cors",
      body: data,
    }).then((data) => data.json())
    .then(response => {
      console.log(response)
      return response.json();
    })
  }

  async function exhibitDelete(data) {
    return fetch("https://cst2-api.azurewebsites.net/exhibit", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getToken()}`,
      },
      mode: "cors",
      body: JSON.stringify(data),
    }).then((data) => data.json());
  }

  useEffect(() => {
    fetchData();
  }, []);


  const delete_Table = (index) => {
    const rows = [...exhibitData];
    exhibitDelete(rows[index]);
    rows.splice(index, 1);
    setData(rows);
  };

  const edit_Table = (index) => {
    const rows = [...exhibitData];
    console.log(rows[index]);
    let json = JSON.stringify(rows[index]);
    setData(rows);
    exhibitModify(json);
  };

  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const rowsInput = [...exhibitData];
    rowsInput[index][name] = value;
    setData(rowsInput);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <table className="table">
            <thead>
              <tr>
              <th>Exhibit_ID</th>
                          <th>Exhibit Name</th>
                          <th>Arrival Date</th>
                          <th>Departure Date</th>
                          <th>Permanent</th>
                          <th>Ticket Price</th>
                          <th>Number of Tickets Sold</th>
                          <th>Managing Department</th>
                          <th>Located In</th>
                          <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {exhibitData.map((data, index)=> {
                      return(
                        <tr key={index}>
                        <td><input type="text" value={data.Exhibit_ID} onChange={(evnt)=>(handleChange(index, evnt))} name="Exhibit_ID" className="form-control"/> </td>
                        <td><input type="text" value={data.Exhibit_Name}  onChange={(evnt)=>(handleChange(index, evnt))} name="Exhibit_Name" className="form-control"/> </td>
                        <td><input type="text" value={data.Arrival_Date}  onChange={(evnt)=>(handleChange(index, evnt))} name="Arrival_Date" className="form-control" /> </td>
                        <td><input type="text" value={data.Departure_Date} onChange={(evnt)=>(handleChange(index, evnt))} name="Departure_Date" className="form-control"/> </td>
                        <td><input type="text" value={data.Permanent}  onChange={(evnt)=>(handleChange(index, evnt))} name="Permanent" className="form-control"/> </td>
                        <td><input type="text" value={data.Ticket_Price}  onChange={(evnt)=>(handleChange(index, evnt))} name="Ticket_Price" className="form-control" /> </td>
                        <td><input type="text" value={data.Number_Tickets_Sold} onChange={(evnt)=>(handleChange(index, evnt))} name="Number_Tickets_Sold" className="form-control"/> </td>
                        <td><input type="text" value={data.Managing_Department}  onChange={(evnt)=>(handleChange(index, evnt))} name="Managing_Department" className="form-control" /> </td>
                        <td><input type="text" value={data.Located_In} onChange={(evnt)=>(handleChange(index, evnt))} name="Located_In" className="form-control"/> </td>
                        <td><button className="btn btn-outline-success" onClick={()=>(edit_Table(index))}>Edit</button></td>
                        <td><button className="btn btn-outline-danger" onClick={()=>(delete_Table(index))}>Delete</button></td>
                        </tr>
                      )})}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Exhibit_Table;