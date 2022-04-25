import { useEffect, useState } from "react";
import "./modify.css";

function Gallery_Table() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [galleryData, setData] = useState([]);

  const fetchData = () => {
    fetch("https://cst2-api.azurewebsites.net/gallery", {
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

  async function galleryModify(data) {
    return fetch("https://cst2-api.azurewebsites.net/gallery", {
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

  async function galleryDelete(data) {
    return fetch("https://cst2-api.azurewebsites.net/gallery", {
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
    const rows = [...galleryData];
    galleryDelete(rows[index]);
    rows.splice(index, 1);
    setData(rows);
  };

  const edit_Table = (index) => {
    const rows = [...galleryData];
    console.log(rows[index]);
    let json = JSON.stringify(rows[index]);
    setData(rows);
    galleryModify(json);
  };

  const handleChange = (index, evnt) => {
    let { name, value } = evnt.target;
    const rowsInput = [...galleryData];
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
          <th>Gallery Name</th>
          <th>Managing Department</th>
          <th>Capacity</th>

          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {galleryData.map((data, index) => {
          return (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={data.Gallery_Name}
                  onChange={(evnt) => handleChange(index, evnt)}
                  name="Gallery_Name"
                  className="form-control"
                />{" "}
              </td>
              <td>
                <input
                  type="text"
                  value={data.Managing_Department}
                  onChange={(evnt) => handleChange(index, evnt)}
                  name="Managing_Department"
                  className="form-control"
                />{" "}
              </td>
              <td>
                <input
                  type="text"
                  value={data.Capacity}
                  onChange={(evnt) => handleChange(index, evnt)}
                  name="Capacity"
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
export default Gallery_Table;
