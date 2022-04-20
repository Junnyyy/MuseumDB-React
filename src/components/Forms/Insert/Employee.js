import { React, useState } from "react";
import "./Insert.css";
// import PropTypes from "prop-types";

const getToken = () => {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
};

async function employee(data) {
    return fetch("https://cst2-api.azurewebsites.net/employee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getToken()}`,
      },
      mode: "cors",
      body: JSON.stringify(data),
    }).then((data) => data.json());
  }

export default function Employee() {

  const [EmployeeID, setEmployeeID] = useState();
  const [EmployeeFirstName,setEmployeeFirstName ] = useState();
  const [EmployeeMiddleName,setEmployeeMiddleName ] = useState();
  const [EmployeeLastName,setEmployeeLastName ] = useState();
  const [DepartmentName,setDepartmentName] = useState();
  const [EmployeeUsername,setEmployeeUsername ] = useState();
  const [Employeepassword,setEmployeepassword ] = useState();
  const [EmployeeEmail,setEmployeeEamil ] = useState();
  const [EmployeeSalary, setEmployeeSalary] = useState();
  const [EmployeeDOB, setEmployeeDOB] = useState();
  
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await Employee({
     EmployeeID,
     EmployeeFirstName,
     EmployeeMiddleName,
     EmployeeLastName,
     DepartmentName,
     EmployeeSalary,
     EmployeeDOB,
     EmployeeUsername,
     Employeepassword,
     EmployeeEmail
    });

  };


  return (
    <form onSubmit={handleSubmit} >
        <h1>Employee Info</h1>
        <div>
        <label >Employee ID</label>
        <input type="text"  className="Employee" onChange={(e) => setEmployeeID(e.target.value)}  />
        </div>
        <div>
        <label >Employee First Name</label>
        <input type="text"  className="Employee" onChange={(e) => setEmployeeFirstName(e.target.value)}  />
        </div>
        <div>
        <label >Employee Middle Name</label>
        <input type="date"  className="Employee" onChange={(e) => setEmployeeMiddleName(e.target.value)}  />
        </div>
        <div>
        <label >Employee Last Name</label>
        <input type="text"  className="Employee" onChange={(e) => setEmployeeLastName(e.target.value)}  />
        </div>
        <div>
        <label >Department Name</label>
        <input type="text"  className="Employee" onChange={(e) => setDepartmentName(e.target.value)} />
        </div>
        <div>
        <label >Employee Salary</label>
        <input type="text"  className="Employee" onChange={(e) => setEmployeeSalary(e.target.value)} />
        </div>
        <div>
        <label >Employee DOB</label>
        <input type="text"  className="Employee" onChange={(e) => setEmployeeDOB(e.target.value)}  />
        </div>
        <div>
        <label >Employee Email</label>
        <input type="text"  className="Employee" onChange={(e) => setEmployeeEamil(e.target.value)} />
        </div>
        <div>
        <label >Employee Username</label>
        <input type="text"  className="Employee" onChange={(e) => setEmployeeUsername(e.target.value)}  />
        </div>
        <div>
        <label >Employee Password</label>
        <input type="text"  className="Employee" onChange={(e) => setEmployeepassword(e.target.value)}  />
        </div>
       
    
        <button className="submit">Submit</button>
     
    </form>
  );
}

