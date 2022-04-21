import { useEffect, useState } from "react"
import "./modify.css"

function Employee_Table({rowsData, deleteEmployee_Table, handleChange}) {


    return(
        
        rowsData.map((data, index)=>{
            const {Employee_ID, Employee_F_Name, Employee_M_Name, Employee_L_Name, Department_Name, Employee_Salary, Employee_Password,Employee_DOB,Employee_Email,Employee_Username}= data;
            return(

                <tr key={index}>
                <td><input type="text" value={Employee_ID} onChange={(evnt)=>(handleChange(index, evnt))} name="Employee_ID" className="form-control"/> </td>
                <td><input type="text" value={Employee_F_Name}  onChange={(evnt)=>(handleChange(index, evnt))} name="Employee_F_Name" className="form-control"/> </td>
                <td><input type="text" value={Employee_M_Name}  onChange={(evnt)=>(handleChange(index, evnt))} name="Employee_M_Name" className="form-control" /> </td>
                <td><input type="text" value={Employee_L_Name} onChange={(evnt)=>(handleChange(index, evnt))} name="Employee_L_Name" className="form-control"/> </td>
                <td><input type="text" value={Department_Name}  onChange={(evnt)=>(handleChange(index, evnt))} name="Department_Name" className="form-control"/> </td>
                <td><input type="text" value={Employee_Salary}  onChange={(evnt)=>(handleChange(index, evnt))} name="Employee_Salary" className="form-control" /> </td>
                <td><input type="text" value={Employee_DOB}  onChange={(evnt)=>(handleChange(index, evnt))} name="Employee_DOB" className="form-control"/> </td>
                <td><input type="text" value={Employee_Email}  onChange={(evnt)=>(handleChange(index, evnt))} name="Employee_Email" className="form-control"/> </td>
                <td><input type="text" value={Employee_Password} onChange={(evnt)=>(handleChange(index, evnt))} name="Employee_Password" className="form-control"/> </td>
                <td><input type="text" value={Employee_Username}  onChange={(evnt)=>(handleChange(index, evnt))} name="Employee_Username" className="form-control"/> </td>
                <td><button className="btn btn-outline-success" onClick={()=>(deleteEmployee_Table(index))}>Edit</button></td>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteEmployee_Table(index))}>Delete</button></td>
                
            </tr>

            )
        })
   
    )
    
}

export default Employee_Table;