import { useEffect, useState } from "react"
import "./modify.css"

function Exhibit_Table({rowsData, deleteExhibit_Table, handleChange}) {


    return(
        
        rowsData.map((data, index)=>{
            const {Exhibit_ID, Exhibit_Name, Arrival_Date, Departure_Date, Permanent, Ticket_Price, Located_In,Number_Tickets_Sold,Managing_Department,Employee_Username}= data;
            return(

                <tr key={index}>
                <td><input type="text" value={Exhibit_ID} onChange={(evnt)=>(handleChange(index, evnt))} name="Exhibit_ID" className="form-control"/> </td>
                <td><input type="text" value={Exhibit_Name}  onChange={(evnt)=>(handleChange(index, evnt))} name="Exhibit_Name" className="form-control"/> </td>
                <td><input type="text" value={Arrival_Date}  onChange={(evnt)=>(handleChange(index, evnt))} name="Arrival_Date" className="form-control" /> </td>
                <td><input type="text" value={Departure_Date} onChange={(evnt)=>(handleChange(index, evnt))} name="Departure_Date" className="form-control"/> </td>
                <td><input type="text" value={Permanent}  onChange={(evnt)=>(handleChange(index, evnt))} name="Permanent" className="form-control"/> </td>
                <td><input type="text" value={Ticket_Price}  onChange={(evnt)=>(handleChange(index, evnt))} name="Ticket_Price" className="form-control" /> </td>
                <td><input type="text" value={Number_Tickets_Sold}  onChange={(evnt)=>(handleChange(index, evnt))} name="Number_Tickets_Sold" className="form-control"/> </td>
                <td><input type="text" value={Managing_Department}  onChange={(evnt)=>(handleChange(index, evnt))} name="Managing_Department" className="form-control"/> </td>
                <td><input type="text" value={Located_In} onChange={(evnt)=>(handleChange(index, evnt))} name="Located_In" className="form-control"/> </td>
                <td><button className="btn btn-outline-success" onClick={()=>(deleteExhibit_Table(index))}>Edit</button></td>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteExhibit_Table(index))}>Delete</button></td>
                
            </tr>

            )
        })
   
    )
    
}

export default Exhibit_Table;