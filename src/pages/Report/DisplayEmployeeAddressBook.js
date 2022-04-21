import { useEffect, useState } from "react";
import EmployeeAddressBookRows from "./EmployeeAddressBookRows";
import "./Report.css";


function DisplayEmployeeAddressBook(){

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

    const [rowsData, setRowsData] = useState([]);

    const addTableRows = ()=>{

        const rowsInput={
            Employee_ID:'',
            Employee_F_Name:'',
            Employee_M_Name:'',
            Employee_L_Name:'',
            Department_Name:'',
            Employee_Email:''
        } 
        setRowsData([...rowsData, rowsInput])
    }

   const deleteTableRows = (index)=>
   {
        const rows = [...rowsData];
        rows.splice(index, 1);
        setRowsData(rows);
   }
 
   const handleChange = (index, evnt)=>
   {
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
    }

    return(
        <div className="container" >
            <div className="row">
                <div className="col-sm-8">
                <table className="table">
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
                   <EmployeeAddressBookRows rowsData={empData} deleteTableRows={deleteTableRows} handleChange={handleChange} />
                   {/*<TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />*/}
                   </tbody> 
                </table>

                </div>

            </div>
        </div>
    )

}
export default DisplayEmployeeAddressBook