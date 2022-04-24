import { useEffect, useState } from "react";
import "./modify.css";

function Customer_Table() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [customerData, setData] = useState([]);

  const fetchData = () => {
    fetch("https://cst2-api.azurewebsites.net/customer", {
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

  async function customerModify(data) {
    return fetch("https://cst2-api.azurewebsites.net/customer", {
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

  async function customerDelete(data) {
    return fetch("https://cst2-api.azurewebsites.net/customer", {
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
    const rows = [...customerData];
    customerDelete(rows[index]);
    rows.splice(index, 1);
    setData(rows);
  };

  const edit_Table = (index) => {
    const rows = [...customerData];
    console.log(rows[index]);
    let json = JSON.stringify(rows[index]);
    setData(rows);
    customerModify(json);
  };

  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const rowsInput = [...customerData];
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
              <th>Customer ID</th>
                <th>Customer First Name</th>
                <th>Customer Middle Name</th>
                <th>Customer Last Name</th>
                <th>Membership Status</th>
                <th>Customer Username</th>
                <th>Customer Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {customerData.map((data, index)=> {
                      return(
                        <tr key={index}>
                        <td><input type="text" value={data.Customer_ID} onChange={(evnt)=>(handleChange(index, evnt))} name="Art_Piece_Title" className="form-control"/> </td>
                        <td><input type="text" value={data.Customer_F_Name}  onChange={(evnt)=>(handleChange(index, evnt))} name="Date_Created" className="form-control"/> </td>
                        <td><input type="text" value={data.Customer_M_Name}  onChange={(evnt)=>(handleChange(index, evnt))} name="Medium" className="form-control" /> </td>
                        <td><input type="text" value={data.Customer_L_Name} onChange={(evnt)=>(handleChange(index, evnt))} name="Creator_F_Name" className="form-control"/> </td>
                        <td><input type="text" value={data.Membership}  onChange={(evnt)=>(handleChange(index, evnt))} name="Creator_L_Name" className="form-control"/> </td>
                        <td><input type="text" value={data.Customer_Username}  onChange={(evnt)=>(handleChange(index, evnt))} name="Being_Refurbished" className="form-control" /> </td>
                        <td><input type="text" value={data.Customer_Email} onChange={(evnt)=>(handleChange(index, evnt))} name="Culture" className="form-control"/> </td>
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
export default Customer_Table;