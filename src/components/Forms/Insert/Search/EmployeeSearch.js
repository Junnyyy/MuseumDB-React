import { React, useState } from "react";
import "./EmployeeSearch.css";
// import PropTypes from "prop-types";

const getToken = () => {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
};

async function EmployeeSearch (data) {
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

  const [Employeefname,setfname ] = useState();
  const [EmployeeMname,setmname ] = useState();
  const [EmployeeLname,setlname ] = useState();
  const [DepartmentName,setdname] = useState();
  const [EmployeeEmail,setemail ] = useState();
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await EmployeeSearch({
  
     Employeefname,
     EmployeeMname,
     EmployeeLname,
     DepartmentName,
     EmployeeEmail
    });
  };


  return (
    <form onSubmit={handleSubmit} className="EmployeeForm">
        <h1>Search for Employee </h1>
        <div>
        <label >Employee First Name</label>
        <input type="text"  className="employee" onChange={(e) => setfname(e.target.value)}  />
        </div>
        
        <div>
        <label >Employee Middle Name</label>
        <input type="text"  className="employee" onChange={(e) => setmname(e.target.value)}  />
        </div>
        <div>
        <label className="box"> Employee Last Name</label>
        <input type="text"  className="employee" onChange={(e) => setlname(e.target.value)} />
        </div>
        <div>
        <label >Department Name</label>
        <input type="text"  className="employee" onChange={(e) => setdname(e.target.value)}  />
        </div>
        
        <div>
        <label >Employee Email</label>
        <input type="text"  className="employee" onChange={(e) => setemail(e.target.value)} />
        </div>
        <br></br>
    
        <button className="Employeebutton">Search for Employee</button>
     
    </form>
  );
}
