import { useEffect, useState } from "react"
import "./modify.css"

function TicketTransaction_Table({rowsData, deleteTicketTransaction_Table, handleChange}) {


    return(
        
        rowsData.map((data, index)=>{
            const {Ticket_Transaction_ID, Ticket_Customer_ID, Ticket_Total_Bill, Ticket_Exhibit_ID, Ticket_Transaction_Date, Customer_Username, Customer_Password,Customer_Email}= data;
            return(

                <tr key={index}>
                <td><input type="text" value={Ticket_Transaction_ID} onChange={(evnt)=>(handleChange(index, evnt))} name="Ticket_Transaction_ID" className="form-control"/> </td>
                <td><input type="text" value={Ticket_Customer_ID}  onChange={(evnt)=>(handleChange(index, evnt))} name="Ticket_Customer_ID" className="form-control"/> </td>
                <td><input type="text" value={Ticket_Total_Bill}  onChange={(evnt)=>(handleChange(index, evnt))} name="Ticket_Total_Bill" className="form-control" /> </td>
                <td><input type="text" value={Ticket_Exhibit_ID} onChange={(evnt)=>(handleChange(index, evnt))} name="Ticket_Exhibit_ID" className="form-control"/> </td>
                <td><input type="text" value={Ticket_Transaction_Date}  onChange={(evnt)=>(handleChange(index, evnt))} name="Ticket_Transaction_Date" className="form-control"/> </td>
                
                <td><button className="btn btn-outline-success" onClick={()=>(deleteTicketTransaction_Table(index))}>Edit</button></td>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTicketTransaction_Table(index))}>Delete</button></td>
                
            </tr>

            )
        })
   
    )
    
}

export default TicketTransaction_Table;