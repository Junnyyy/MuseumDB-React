import { useEffect, useState } from "react";
import "./modify.css";

function Tickettransaction_Table() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [tickettransactionData, setData] = useState([]);

  const fetchData = () => {
    fetch("https://cst2-api.azurewebsites.net/tickettransaction", {
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

  async function tickettransactionModify(data) {
    return fetch("https://cst2-api.azurewebsites.net/tickettransaction", {
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

  async function tickettransactionDelete(data) {
    return fetch("https://cst2-api.azurewebsites.net/tickettransaction", {
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
    const rows = [...tickettransactionData];
    storetransactionDelete(rows[index]);
    rows.splice(index, 1);
    setData(rows);
  };

  const edit_Table = (index) => {
    const rows = [...tickettransactionData];
    rows[index].Ticket_Transaction_Date = rows[index].Ticket_Transaction_Date.slice(0,10);
    console.log(rows[index]);
    let json = JSON.stringify(rows[index]);
    setData(rows);
    storetransactionModify(json);
  };

  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const rowsInput = [...tickettransactionData];
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
                        <th>=Transaction ID</th>
                          <th>=Customer ID</th>
                          <th>=Total Bill</th>
                          <th>Exhibit ID</th>
                          <th>ransaction Date</th>
                          <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {tickettransactionData.map((data, index)=> {
                      return(
                        <tr key={index}>
                        <td><input type="text" value={data.Ticket_Transaction_ID} onChange={(evnt)=>(handleChange(index, evnt))} name="Ticket_Transaction_ID" className="form-control"/> </td>
                        <td><input type="text" value={data.Ticket_Customer_ID} onChange={(evnt)=>(handleChange(index, evnt))} name="Ticket_Customer_ID" className="form-control"/> </td>
                        <td><input type="text" value={data.Ticket_Total_Bill}  onChange={(evnt)=>(handleChange(index, evnt))} name="Ticket_Total_Bill" className="form-control"/> </td>
                        <td><input type="text" value={data.Ticket_Exhibit_ID}  onChange={(evnt)=>(handleChange(index, evnt))} name="Ticket_Exhibit_ID" className="form-control" /> </td>
                        <td><input type="text" value={data.Ticket_Transaction_Date.slice(0, 10)} onChange={(evnt)=>(handleChange(index, evnt))} name="Ticket_Transaction_Date" className="form-control"/> </td>
                       
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
export default Tickettransaction_Table;