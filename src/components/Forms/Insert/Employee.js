import { React, useState, useEffect } from "react";
import "./Insert.css";
// import PropTypes from "prop-types";

const getToken = () => {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
};

async function employee(data) {
  return fetch("https://cst2-api.azurewebsites.net/auth/register", {
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
  const [departmentData, setData] = useState([]);

  const fetchData = () => {
    fetch("https://cst2-api.azurewebsites.net/department", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getToken()}`,
      },
      mode: "cors",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(departmentData);

  let departmentNames =
    departmentData.length > 0 &&
    departmentData.map((item, i) => {
      return (
        <option key={i} value={item.Department_Name}>
          {item.Department_Name}
        </option>
      );
    });

  const [EmployeeID, setEmployeeID] = useState();
  const [EmployeeFirstName, setEmployeeFirstName] = useState();
  const [EmployeeMiddleName, setEmployeeMiddleName] = useState();
  const [EmployeeLastName, setEmployeeLastName] = useState();
  const [DepartmentName, setDepartmentName] = useState("Administration");
  const [EmployeeUsername, setEmployeeUsername] = useState();
  const [Employeepassword, setEmployeepassword] = useState();
  const [EmployeeEmail, setEmployeeEamil] = useState();
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
      EmployeeEmail,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Employee Info</h1>
      <div>
        <label>Employee ID</label>
        <input
          type="number"
          className="Employee"
          onChange={(e) => setEmployeeID(e.target.value)}
        />
      </div>
      <div>
        <label>First Name</label>
        <input
          type="text"
          className="Employee"
          onChange={(e) => setEmployeeFirstName(e.target.value)}
        />
      </div>
      <div>
        <label>Middle Name</label>
        <input
          type="date"
          className="datebox"
          onChange={(e) => setEmployeeMiddleName(e.target.value)}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          className="Employee"
          onChange={(e) => setEmployeeLastName(e.target.value)}
        />
      </div>
      <div>
        <label>Department Name</label>
        <select
          className="Employee"
          onChange={(e) => setDepartmentName(e.target.value)}
        >
          {departmentNames}
        </select>
      </div>
      <div>
        <label>Salary</label>
        <input
          type="number"
          className="Employee"
          onChange={(e) => setEmployeeSalary(e.target.value)}
        />
      </div>
      <div>
        <label>Date of Birth</label>
        <input
          type="date"
          className="Employee"
          onChange={(e) => setEmployeeDOB(e.target.value)}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          className="Employee"
          onChange={(e) => setEmployeeEamil(e.target.value)}
        />
      </div>
      <div>
        <label>Username</label>
        <input
          type="text"
          className="Employee"
          onChange={(e) => setEmployeeUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          className="Employee"
          onChange={(e) => setEmployeepassword(e.target.value)}
        />
      </div>

      <button className="submit">Submit</button>
    </form>
  );
}
