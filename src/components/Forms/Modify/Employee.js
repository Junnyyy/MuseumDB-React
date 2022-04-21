import { useEffect, useState } from "react"
import TableRows from "./ArtpieceTable"
import "./modify.css"
import Employee_Table from "./EmployeeTable";


function AddDeleteTableRows(){

    const getToken = () => {
        const tokenString = sessionStorage.getItem("token");
        const userToken = JSON.parse(tokenString);
        return userToken?.token;
      };

      const [artData, setData] = useState([])

      const fetchData = () => {
          fetch("https://cst2-api.azurewebsites.net/employee", {
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
    
    console.log(artData)

    const [rowsData, setRowsData] = useState([]);

    const addTableRows = ()=>{

        const rowsInput={
            Art_Piece_Title:'',
            Date_Created:'',
            Medium:'',
            Creator_F_Name:'',
            Creator_L_Name:'',
            Being_Refurbished:'',
            Culture:'',
            Piece_Height:'',
            Piece_Length:'',
            Piece_Width:'',
            Gallery_Loc:'',
            Exhibit_ID:''
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
                          <th>Employee First Name</th>
                          <th>Employee Middle Name</th>
                          <th>Employee Last Name</th>
                          <th>Department Name</th>
                          <th>Employee Salary</th>
                          <th>Employee DOB</th>
                          <th>Employee Email</th>
                          <th>Emplyee Username</th>
                          <th>Action</th>
                      </tr>
                    </thead>
                   <tbody>
                   <Employee_Table rowsData={artData} deleteTableRows={deleteTableRows} handleChange={handleChange} />
                   <Employee_Table rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />
                   </tbody> 
                </table>

                </div>

            </div>
        </div>
    )

}
export default AddDeleteTableRows