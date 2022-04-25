import { useEffect, useState } from "react";
import "./modify.css";

function ArtPieceTable() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [artData, setData] = useState([]);

  const fetchData = () => {
    fetch("https://cst2-api.azurewebsites.net/artpiece", {
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

  async function artModify(data) {
    return fetch("https://cst2-api.azurewebsites.net/artpiece", {
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

  async function artDelete(data) {
    return fetch("https://cst2-api.azurewebsites.net/artpiece", {
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

  const deleteArtpiece_Table = (index) => {
    const rows = [...artData];
    artDelete(rows[index]);
    rows.splice(index, 1);
    setData(rows);
  };

  const editArtpiece_Table = (index) => {
    const rows = [...artData];
    rows[index].Date_Created = rows[index].Date_Created?.slice(0, 10);
    console.log(rows[index]);
    let json = JSON.stringify(rows[index]);
    setData(rows);
    artModify(json);
  };

  const handleChange = (index, evnt) => {
    let { name, value } = evnt.target;
    const rowsInput = [...artData];
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
          <th>Title</th>
          <th>Date Created</th>
          <th>Medium</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Being Refurbished</th>
          <th>Culture</th>
          <th>Height</th>
          <th>Length</th>
          <th>Width</th>
          <th>Gallery</th>
          <th>Exhibit ID</th>
          <th>Action </th>
        </tr>
      </thead>
      <tbody>
        {artData.map((data, index) => {
          return (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={data.Art_Piece_Title}
                  onChange={(evnt) => handleChange(index, evnt)}
                  name="Art_Piece_Title"
                  className="form-control"
                />{" "}
              </td>
              <td>
                <input
                  type="text"
                  value={data.Date_Created?.slice(0, 10)}
                  onChange={(evnt) => handleChange(index, evnt)}
                  name="Date_Created"
                  className="form-control"
                />{" "}
              </td>
              <td>
                <input
                  type="text"
                  value={data.Medium}
                  onChange={(evnt) => handleChange(index, evnt)}
                  name="Medium"
                  className="form-control"
                />{" "}
              </td>
              <td>
                <input
                  type="text"
                  value={data.Creator_F_Name}
                  onChange={(evnt) => handleChange(index, evnt)}
                  name="Creator_F_Name"
                  className="form-control"
                />{" "}
              </td>
              <td>
                <input
                  type="text"
                  value={data.Creator_L_Name}
                  onChange={(evnt) => handleChange(index, evnt)}
                  name="Creator_L_Name"
                  className="form-control"
                />{" "}
              </td>
              <td>
                <input
                  type="text"
                  value={data.Being_Refurbished}
                  onChange={(evnt) => handleChange(index, evnt)}
                  name="Being_Refurbished"
                  className="form-control"
                />{" "}
              </td>
              <td>
                <input
                  type="text"
                  value={data.Culture}
                  onChange={(evnt) => handleChange(index, evnt)}
                  name="Culture"
                  className="form-control"
                />{" "}
              </td>
              <td>
                <input
                  type="text"
                  value={data.Piece_Height}
                  onChange={(evnt) => handleChange(index, evnt)}
                  name="Piece_Height"
                  className="form-control"
                />{" "}
              </td>
              <td>
                <input
                  type="text"
                  value={data.Piece_Length}
                  onChange={(evnt) => handleChange(index, evnt)}
                  name="Piece_Length"
                  className="form-control"
                />{" "}
              </td>
              <td>
                <input
                  type="text"
                  value={data.Piece_Width}
                  onChange={(evnt) => handleChange(index, evnt)}
                  name="Piece_Width"
                  className="form-control"
                />{" "}
              </td>
              <td>
                <input
                  type="text"
                  value={data.Gallery_Loc}
                  onChange={(evnt) => handleChange(index, evnt)}
                  name="Gallery_Loc"
                  className="form-control"
                />{" "}
              </td>
              <td>
                <input
                  type="text"
                  value={data.Exhibit_ID}
                  onChange={(evnt) => handleChange(index, evnt)}
                  name="Exhibit_ID"
                  className="form-control"
                />{" "}
              </td>
              <td>
                <button
                  className="btn btn-outline-success"
                  onClick={() => editArtpiece_Table(index)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteArtpiece_Table(index)}
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
export default ArtPieceTable;
