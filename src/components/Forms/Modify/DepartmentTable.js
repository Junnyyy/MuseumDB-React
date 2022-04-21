import { useEffect, useState } from "react"
import "./modify.css"

function Depart_Table({rowsData, deleteDepart_Table, handleChange}) {


    return(
        
        rowsData.map((data, index)=>{
            const {Department_Name, Location, Supervisor_ID}= data;
            return(

                <tr key={index}>
                <td><input type="text" value={Department_Name} onChange={(evnt)=>(handleChange(index, evnt))} name="Department_Name" className="form-control"/> </td>
                <td><input type="text" value={Location}  onChange={(evnt)=>(handleChange(index, evnt))} name="Location" className="form-control"/> </td>
                <td><input type="text" value={Supervisor_ID}  onChange={(evnt)=>(handleChange(index, evnt))} name="Supervisor_ID" className="form-control" /> </td>
                <td><button className="btn btn-outline-success" onClick={()=>(deleteDepart_Table(index))}>Edit</button></td>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteDepart_Table(index))}>Delete</button></td>
                
            </tr>

            )
        })
   
    )
    
}

export default Depart_Table;