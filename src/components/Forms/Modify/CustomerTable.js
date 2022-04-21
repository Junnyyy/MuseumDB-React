import { useEffect, useState } from "react"
import "./modify.css"

function Customer_Table({rowsData, deleteCustomer_Table, handleChange}) {


    return(
        
        rowsData.map((data, index)=>{
            const {Customer_ID, Customer_F_Name, Customer_M_Name, Customer_L_Name, Membership_Status, Customer_Username, Customer_Password,Customer_Email}= data;
            return(

                <tr key={index}>
                <td><input type="text" value={Customer_ID} onChange={(evnt)=>(handleChange(index, evnt))} name="Customer_ID" className="form-control"/> </td>
                <td><input type="text" value={Customer_F_Name}  onChange={(evnt)=>(handleChange(index, evnt))} name="Customer_F_Name" className="form-control"/> </td>
                <td><input type="text" value={Customer_M_Name}  onChange={(evnt)=>(handleChange(index, evnt))} name="Customer_M_Name" className="form-control" /> </td>
                <td><input type="text" value={Customer_L_Name} onChange={(evnt)=>(handleChange(index, evnt))} name="Customer_L_Name" className="form-control"/> </td>
                <td><input type="text" value={Membership_Status}  onChange={(evnt)=>(handleChange(index, evnt))} name="Membership_Status" className="form-control"/> </td>
                <td><input type="text" value={Customer_Username}  onChange={(evnt)=>(handleChange(index, evnt))} name="Customer_Username" className="form-control" /> </td>
                <td><input type="text" value={Customer_Password} onChange={(evnt)=>(handleChange(index, evnt))} name="Customer_Password" className="form-control"/> </td>
                <td><input type="text" value={Customer_Email}  onChange={(evnt)=>(handleChange(index, evnt))} name="Customer_Email" className="form-control"/> </td>
                <td><button className="btn btn-outline-success" onClick={()=>(deleteCustomer_Table(index))}>Edit</button></td>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteCustomer_Table(index))}>Delete</button></td>
                
            </tr>

            )
        })
   
    )
    
}

export default Customer_Table;