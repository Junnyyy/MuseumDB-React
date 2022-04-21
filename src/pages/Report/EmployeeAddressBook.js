import "react-bootstrap";
import {useState, useEffect} from "react"

function EmployeeAddressBook() {

    const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [empData, setData] = useState([])

  const fetchData = () => {
      fetch("https://cst2-api.azurewebsites.net/EmployeeAddressBook", {
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

console.log(empData)

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

    <h2 className="title">Employee Address Book</h2>
    {/*<input type="text" id="input" onkeyup="tableSearch()" placeholder="Search by Title"></input>*/}
    <table id = "table" className="table">
                    <thead>
                      <tr>
                          <th>Employee ID</th>
                          <th>First Name</th>
                          <th>Middle Name</th>
                          <th>Last Name</th>
                          <th>Department</th>
                          <th>Email</th>
                      </tr>
                    </thead>
                   <tbody>
                   {empData.map((data, index)=> {
                      return(
                          <tr key={index}>
                          <td type="text">{data.Employee_ID}</td>
                          <td type="text"> {data.Employee_F_Name}</td>
                          <td type="text">{data.Employee_M_Name} </td>
                          <td type="text">{data.Employee_L_Name}</td>
                          <td type="text">{data.Department_Name} </td>
                          <td type="text">{data.Employee_Email}</td>
                      </tr>
                      )})}
                      <tr>
                        <td>Total</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{empData.length}</td>
                      </tr>
                   </tbody> 
                </table>
    </div>
  )}

export default EmployeeAddressBook;