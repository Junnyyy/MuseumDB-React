import "react-bootstrap";
import { useState, useEffect } from "react";

function Collection() {
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

  useEffect(() => {
    fetchData();
  }, []);

  console.log(artData);

  function tableSearch() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("input");
    filter = input.value.toLowerCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  return (
    <div>
      <br></br>

      <h2 className="title">Collection</h2>
      {/*<input type="text" id="input" onkeyup="tableSearch()" placeholder="Search by Title"></input>*/}
      <table id="table" className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date Created</th>
            <th>Medium</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Culture</th>
            <th>Height</th>
            <th>Length</th>
            <th>Width</th>
            <th>Gallery</th>
            <th>Exhibit ID</th>
          </tr>
        </thead>
        <tbody>
          {artData.map((data, index) => {
            return (
              <tr key={index}>
                <td type="text">{data.Art_Piece_Title}</td>
                <td type="date"> {data.Date_Created?.slice(0, 10)}</td>
                <td type="text">{data.Medium} </td>
                <td type="text">{data.Creator_F_Name}</td>
                <td type="text">{data.Creator_L_Name} </td>
                <td type="text">{data.Culture} </td>
                <td type="text"> {data.Piece_Height}</td>
                <td type="text"> {data.Piece_Length}</td>
                <td type="text">{data.Piece_Width} </td>
                <td type="text"> {data.Gallery_Loc}</td>
                <td type="text">{data.Exhibit_ID} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Collection;
