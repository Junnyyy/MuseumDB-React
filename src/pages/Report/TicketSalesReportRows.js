import "./Report.css"

function TicketSalesReportRows({rowsData, deleteTableRows, handleChange}) {


    return(
        
        rowsData.map((data, index)=>{
            const {            Exhibit_Name,
            ID,
            Number_Tickets_Sold,
            Current_Month_Ticket_Profit}= data;
            
            
            return(

                    <tr key={index}>
                        <td><input type="text" value={Exhibit_Name}/> </td>
                        <td><input type="text" value={ID}/> </td>
                        <td><input type="text" value={Number_Tickets_Sold}/> </td>
                        <td><input type="text" value={Current_Month_Ticket_Profit}/></td>
                    </tr>

            )
        })
   
    )
    
}

export default TicketSalesReportRows;