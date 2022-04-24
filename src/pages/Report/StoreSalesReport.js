import "react-bootstrap";
import {useState, useEffect} from "react"

function StoreSalesReport() {

    const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [salesData, setData] = useState([])

  const fetchData = () => {
    fetch("https://cst2-api.azurewebsites.net/StoreSalesReport", {
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

console.log(salesData)


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

    let itemSum = 0;
    let profitSum = 0;
    for (var i = 0;i < salesData.length;i++)
    {
        itemSum += parseInt(salesData[i].Number_Sold);
        profitSum += Math.round(salesData[i].Current_Month_Sales_Profit);
    }

  return (

    <div>
    <br></br>

    <h2 className="title">Store Sales Report</h2>
    {/*<input type="text" id="input" onkeyup="tableSearch()" placeholder="Search by Title"></input>*/}
    <table id = "table" className="table">
                    <thead>
                      <tr>
                          <th>Item Name</th>
                          <th>ID</th>
                          <th>Item Price</th>
                          <th>Amount Sold</th>
                          <th>Current Month Sales Profit</th>
                      </tr>
                    </thead>
                   <tbody>
                   {salesData.map((data, index)=> {
                      return(

                          <tr key={index}>
                          <td type="text">{data.Item_Name}</td>
                          <td type="text"> {data.ID}</td>
                          <td type="text"> {data.Item_Price}</td>
                          <td type="text">{data.Number_Sold} </td>
                          <td type="text">{data.Current_Month_Sales_Profit}</td>
                      </tr>
                      )})}
                   <tr>
                       <td className="total">Total</td>
                       <td></td>
                       <td></td>
                       <td className="total">{itemSum}</td>
                       <td className="total">{profitSum}</td>
                   </tr>
                   </tbody> 
                </table>
    </div>
  )}

export default StoreSalesReport;