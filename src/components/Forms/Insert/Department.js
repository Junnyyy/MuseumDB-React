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

export default function Department({ setType, setValid, setMessage }) {
  const [employeeData, setData] = useState([]);
  const [complete, setComplete] = useState(false);
  const [fetcherror, setFetcherror] = useState(false);

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
        if (!response.ok) {
          setFetcherror(true);
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

  console.log(employeeData);

  let employeeIDs =
    employeeData.length > 0 &&
    employeeData.map((item, i) => {
      return (
        <option key={i} value={item.Employee_ID}>
          {item.Employee_ID}
        </option>
      );
    });

  const [name, setname] = useState();
  const [loc, setloc] = useState();
  const [SID, setSID] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await department({
      name,
      loc,
      SID,
    });
    if (response.error) {
      setType("danger");
      setValid(false);
      setMessage(response.error);
    } else {
      setComplete(true);
    }
  };

  useEffect(() => {
    if (complete == true) {
      setType("success");
      setValid(false);
      setMessage("Department successfully created!");
    }
    if (fetcherror == true) {
      setType("danger");
      setValid(false);
      setMessage("The server has encountered an error.");
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <h1>Department</h1>
      <div>
        <label>Name</label>
        <input
          type="text"
          className="department"
          onChange={(e) => setname(e.target.value)}
        />
      </div>
      <div>
        <label>Location</label>
        <input
          type="text"
          className="department"
          onChange={(e) => setloc(e.target.value)}
        />
      </div>
      <div>
        <label>Supervisor ID</label>
        <select
          type="text"
          className="department"
          onChange={(e) => setSID(e.target.value)}
        >
          {employeeIDs}
        </select>
      </div>

      <button className="submit">Submit</button>
    </form>
  );
}
