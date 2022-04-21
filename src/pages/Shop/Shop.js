import "react-bootstrap";
import {useState, useEffect} from "react"

function Shop() {

  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [storeData, setData] = useState([])

  const fetchData = () => {
      fetch("https://cst2-api.azurewebsites.net/storeitem", {
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

  console.log(storeData)

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

    <h2 className="title">Gift Shop</h2>
    {/*<input type="text" id="input" onkeyup="tableSearch()" placeholder="Search by Title"></input>*/}
    <table id = "table" className="table">
                    <thead>
                      <tr>
                          <th>Item Name</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Amount Sold</th>
                      </tr>
                    </thead>
                   <tbody>
                   {storeData.map((data, index)=> {
                      return(

                          <tr key={index}>
                          <td type="text">{data.Item_Name}</td>
                          <td type="text"> {data.Item_Price}</td>
                          <td type="text">{data.Quantity_In_Stock} </td>
                          <td type="text">{data.Number_Sold}</td>
                      </tr>
                      )})}
                   </tbody> 
                </table>
    </div>
  )}

export default Shop;