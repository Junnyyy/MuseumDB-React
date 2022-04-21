import { useEffect, useState } from "react"
import "./modify.css"

function Storetransaction_Table({rowsData, deleteStoretransaction_Table, handleChange}) {


    return(
        
        rowsData.map((data, index)=>{
            const {Store_Transaction_ID, Store_Customer_ID, Store_Total_Bill, Store_Item_ID, Store_Transaction_Date, Customer_Username, Customer_Password,Customer_Email}= data;
            return(

                <tr key={index}>
                <td><input type="text" value={Store_Transaction_ID} onChange={(evnt)=>(handleChange(index, evnt))} name="Store_Transaction_ID" className="form-control"/> </td>
                <td><input type="text" value={Store_Customer_ID}  onChange={(evnt)=>(handleChange(index, evnt))} name="Store_Customer_ID" className="form-control"/> </td>
                <td><input type="text" value={Store_Total_Bill}  onChange={(evnt)=>(handleChange(index, evnt))} name="Store_Total_Bill" className="form-control" /> </td>
                <td><input type="text" value={Store_Item_ID} onChange={(evnt)=>(handleChange(index, evnt))} name="Store_Item_ID" className="form-control"/> </td>
                <td><input type="text" value={Store_Transaction_Date}  onChange={(evnt)=>(handleChange(index, evnt))} name="Store_Transaction_Date" className="form-control"/> </td>
                
                <td><button className="btn btn-outline-success" onClick={()=>(deleteStoretransaction_Table(index))}>Edit</button></td>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteStoretransaction_Table(index))}>Delete</button></td>
                
            </tr>

            )
        })
   
    )
    
}

export default Storetransaction_Table;