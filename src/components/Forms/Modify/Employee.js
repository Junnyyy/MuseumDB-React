import { useEffect, useState } from "react";
import "./modify.css";

function Employee_Table() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [employeeData, setData] = useState([]);

  const fetchData = () => {
    fetch("https://cst2-api.azurewebsites.net/employee", {
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

  async function employeeModify(data) {
    return fetch("https://cst2-api.azurewebsites.net/employee", {
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

  async function employeeDelete(data) {
    return fetch("https://cst2-api.azurewebsites.net/employee", {
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
    const rows = [...employeeData];
    employeeDelete(rows[index]);
    rows.splice(index, 1);
    setData(rows);
  };

  const edit_Table = (index) => {
    const rows = [...employeeData];
    console.log(rows[index]);
    let json = JSON.stringify(rows[index]);
    setData(rows);
    employeeModify(json);
  };

  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const rowsInput = [...employeeData];
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
                          <th>Employee First Name</th>
                          <th>Employee Middle Name</th>
                          <th>Employee Last Name</th>
                          <th>Department Name</th>
                          <th>Employee Salary</th>
                          <th>Employee DOB</th>
                          <th>Employee Username</th>
                          <th>Employee Admin Flag</th>
                          <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {employeeData.map((data, index)=> {
                      return(
                        <tr key={index}>
                    
                        <td><input type="text" value={data.Employee_F_Name}  onChange={(evnt)=>(handleChange(index, evnt))} name="Employee_F_Name" className="form-control"/> </td>
                        <td><input type="text" value={data.Employee_M_Name}  onChange={(evnt)=>(handleChange(index, evnt))} name="Employee_M_Name" className="form-control" /> </td>
                        <td><input type="text" value={data.Employee_L_Name} onChange={(evnt)=>(handleChange(index, evnt))} name="Employee_L_Name" className="form-control"/> </td>
                        <td><input type="text" value={data.Department_Name}  onChange={(evnt)=>(handleChange(index, evnt))} name="Department_Name" className="form-control"/> </td>
                        <td><input type="text" value={data.Employee_Salary}  onChange={(evnt)=>(handleChange(index, evnt))} name="Employee_Salary" className="form-control" /> </td>
                        <td><input type="text" value={data.Employee_DOB} onChange={(evnt)=>(handleChange(index, evnt))} name="Employee_DOB" className="form-control"/> </td>
                        <td><input type="text" value={data.Employee_Username} onChange={(evnt)=>(handleChange(index, evnt))} name="Employee_Username" className="form-control"/> </td>
                        <td><input type="text" value={data.Admin_Flag} onChange={(evnt)=>(handleChange(index, evnt))} name="Admin_Flag" className="form-control"/> </td>
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
export default Employee_Table;