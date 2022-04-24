import { useEffect, useState } from "react";
import "./modify.css";

function Department_Table() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

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
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };

  async function departmentModify(data) {
    return fetch("https://cst2-api.azurewebsites.net/department", {
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

  async function departmentDelete(data) {
    return fetch("https://cst2-api.azurewebsites.net/department", {
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
    const rows = [...departmentData];
    departmentDelete(rows[index]);
    rows.splice(index, 1);
    setData(rows);
  };

  const edit_Table = (index) => {
    const rows = [...departmentData];
    console.log(rows[index]);
    let json = JSON.stringify(rows[index]);
    setData(rows);
    departmentModify(json);
  };

  const handleChange = (index, evnt) => {
    let { name, value } = evnt.target;
    const rowsInput = [...departmentData];
    if(value === "")
    {
        value = null;
    }
    rowsInput[index][name] = value;
    setData(rowsInput);
  };

  return (

          <table className="table">
            <thead>
              <tr>
                <th>Department Name</th>
                <th>Location</th>
                <th>Supervisor ID</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {departmentData.map((data, index)=> {
                      return(
                        <tr key={index}>
                        <td><input type="text" value={data.Department_Name}  onChange={(evnt)=>(handleChange(index, evnt))} name="Department_Name" className="form-control"/> </td>
                        <td><input type="text" value={data.Location}  onChange={(evnt)=>(handleChange(index, evnt))} name="Location" className="form-control" /> </td>
                        <td><input type="text" value={data.Supervisor_ID} onChange={(evnt)=>(handleChange(index, evnt))} name="Supervisor_ID" className="form-control"/> </td>
                    
                        <td><button className="btn btn-outline-success" onClick={()=>(edit_Table(index))}>Edit</button></td>
                        <td><button className="btn btn-outline-danger" onClick={()=>(delete_Table(index))}>Delete</button></td>
                        </tr>
                      )})}
            </tbody>
          </table>

  );
}
export default Department_Table;
