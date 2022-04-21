import "./Report.css"

function StoreSalesReportRows({rowsData, deleteTableRows, handleChange}) {


    return(
        
        rowsData.map((data, index)=>{
            const {         Item_Name,
            ID,
            Number_Sold,
            Current_Month_Sales_Profit}= data;
            return(

                <tr key={index}>
                <td><input type="text" value={Item_Name}/> </td>
                <td><input type="text" value={ID}/> </td>
                <td><input type="text" value={Number_Sold}/> </td>
                <td><input type="text" value={Current_Month_Sales_Profit}/> </td>
            </tr>

            )
        })
   
    )
    
}

export default StoreSalesReportRows;