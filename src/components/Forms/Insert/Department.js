import { React, useState, useEffect } from "react";
import "./Insert.css";
// import PropTypes from "prop-types";

const getToken = () => {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
};

async function department(data) {
    return fetch("https://cst2-api.azurewebsites.net/department", {
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


  const [employeeData, setData] = useState([])

  const fetchData = () => {
      fetch("https://cst2-api.azurewebsites.net/employee", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${getToken()}`,
        },
        mode: "cors",
      })
      .then(response => {
          return response.json()
      })
      .then(data => {
          setData(data)
      })
  }

useEffect(() => {
      fetchData()
  }, [])

console.log(employeeData)

let employeeIDs = employeeData.length > 0 && employeeData.map((item, i) => {
  return (
    <option key={i} value={item.id}>{item.Employee_ID}</option>
  )
})

  const [name, setname] = useState();
  const [loc,setloc ] = useState();
  const [SID,setSID ] = useState();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await department({
   name,
   loc,
   SID
    });

  };

  return (
    <form onSubmit={handleSubmit} >
        <h1>Department</h1>
        <div>
        <label >Name</label>
        <input type="text"  className="department" onChange={(e) => setname(e.target.value)}  />
        </div>
        <div>
        <label >Location</label>
        <input type="text"  className="department" onChange={(e) => setloc(e.target.value)}  />
        </div>
        <div>
        <label >Supervisor ID</label>
        <select type="text"  className="department" onChange={(e) => setSID(e.target.value)}>
          {employeeIDs}
        </select>
        </div>

        <button className="submit">Submit</button>
     
    </form>
  );
}
