import { useEffect, useState } from "react";
import "./modify.css";

function Storetransaction_Table() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [storetransactionData, setData] = useState([]);

  const fetchData = () => {
    fetch("https://cst2-api.azurewebsites.net/storetransaction", {
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

  async function storetransactionModify(data) {
    return fetch("https://cst2-api.azurewebsites.net/storetransaction", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getToken()}`,
      },
      mode: "cors",
      body: data,
    })
      .then((data) => data.json())
      .then((response) => {
        console.log(response);
        return response.json();
      });
  }

  async function storetransactionDelete(data) {
    return fetch("https://cst2-api.azurewebsites.net/storetransaction", {
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
    const rows = [...storetransactionData];
    storetransactionDelete(rows[index]);
    rows.splice(index, 1);
    setData(rows);
  };

  const edit_Table = (index) => {
    const rows = [...storetransactionData];
    rows[index].Store_Transaction_Date = rows[
      index
    ].Store_Transaction_Date?.slice(0, 10);
    console.log(rows[index]);
    let json = JSON.stringify(rows[index]);
    setData(rows);
    storetransactionModify(json);
  };

  const handleChange = (index, evnt) => {
    let { name, value } = evnt.target;
    const rowsInput = [...storetransactionData];
    if (value === "") {
      value = null;
    }
    rowsInput[index][name] = value;
    setData(rowsInput);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Transaction ID</th>
          <th>Customer ID</th>
          <th>Item ID</th>
          <th>Transaction Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {storetransactionData.map((data, index) => {
          return (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={data.Store_Transaction_ID}
                  onChange={(evnt) => handleChange(index, evnt)}
                  name="Store_Transaction_ID"
                  className="form-control"
                />{" "}
              </td>
              <td>
                <input
                  type="text"
                  value={data.Store_Customer_ID}
                  onChange={(evnt) => handleChange(index, evnt)}
                  name="Store_Customer_ID"
                  className="form-control"
                />{" "}
              </td>
              <td>
                <input
                  type="text"
                  value={data.Store_Item_ID}
                  onChange={(evnt) => handleChange(index, evnt)}
                  name="Store_Item_ID"
                  className="form-control"
                />{" "}
              </td>
              <td>
                <input
                  type="text"
                  value={data.Store_Transaction_Date?.slice(0, 10)}
                  onChange={(evnt) => handleChange(index, evnt)}
                  name="Store_Transaction_Date"
                  className="form-control"
                />{" "}
              </td>

              <td>
                <button
                  className="btn btn-outline-success"
                  onClick={() => edit_Table(index)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => delete_Table(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Storetransaction_Table;
