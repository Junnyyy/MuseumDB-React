import { React, useState } from "react";
import "./DepartmentSearch.css";

const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };
  
  async function DepartmentSearch (data) {
      return fetch("https://cst2-api.azurewebsites.net/customer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${getToken()}`,
        },
        mode: "cors",
        body: JSON.stringify(data),
      }).then((data) => data.json());
    }
  
  export default function Department() {
  
    const [DepartmentName,setdname ] = useState();
    const [galLoc, setgalLoc] = useState();
    const [SID, setSID] = useState();
    
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      const token = await DepartmentSearch({
    
       
       DepartmentName,
       galLoc,
       SID,
      });
    };
  
  
    return (
      <form onSubmit={handleSubmit} className="EmployeeForm">
          <h1>Search for Department</h1>
          
          <div>
          <label >Department Name</label>
          <input type="text"  className="department" onChange={(e) => setdname(e.target.value)}  />
          </div>
          
          <div>
            <label className="box">Gallery Location</label>
            <select
              className="department"
              onChange={(e) => setgalLoc(e.target.value)}
            >
              <option value="Academia Gallery">Academia Gallery</option>
              <option value="America Room">America Room</option>
              <option value="Audrey Jones Beck">Audrey Jones Beck</option>
              <option value="Caroline Wiess Law">Caroline Wiess Law</option>
              <option value="Jones Hall">Jones Hall</option>
              <option value="Nancy and Rich Kinder">Nancy and Rich Kinder</option>
            </select>
          </div>
          <div>
          <label >Supervisor ID</label>
          <input type="text"  className="department" onChange={(e) => setdname(e.target.value)}  />
          </div>
          <br></br>
      
          <button className="Departmentbutton">Search for Department</button>
       
      </form>
    );
  }