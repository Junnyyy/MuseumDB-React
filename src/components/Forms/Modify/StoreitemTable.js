import { useEffect, useState } from "react"
import "./modify.css"

function Storeitem_Table({rowsData, deleteStoreitem_Table, handleChange}) {


    return(
        
        rowsData.map((data, index)=>{
            const {Item_ID, Item_Name, Quantity_In_Stock, Item_Price, Number_Sold, Soldout_Status, Customer_Password,Customer_Email}= data;
            return(

                <tr key={index}>
                <td><input type="text" value={Item_ID} onChange={(evnt)=>(handleChange(index, evnt))} name="Item_ID" className="form-control"/> </td>
                <td><input type="text" value={Item_Name}  onChange={(evnt)=>(handleChange(index, evnt))} name="Item_Name" className="form-control"/> </td>
                <td><input type="text" value={Quantity_In_Stock}  onChange={(evnt)=>(handleChange(index, evnt))} name="Quantity_In_Stock" className="form-control" /> </td>
                <td><input type="text" value={Item_Price} onChange={(evnt)=>(handleChange(index, evnt))} name="Item_Price" className="form-control"/> </td>
                <td><input type="text" value={Number_Sold}  onChange={(evnt)=>(handleChange(index, evnt))} name="Number_Sold" className="form-control"/> </td>
                <td><input type="text" value={Soldout_Status}  onChange={(evnt)=>(handleChange(index, evnt))} name="Soldout_Status" className="form-control" /> </td>
                <td><button className="btn btn-outline-success" onClick={()=>(deleteStoreitem_Table(index))}>Edit</button></td>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteStoreitem_Table(index))}>Delete</button></td>
                
            </tr>

            )
        })
   
    )
    
}

export default Storeitem_Table;