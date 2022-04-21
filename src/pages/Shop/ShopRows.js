import "./Shop.css"

function ShopRows({rowsData, deleteTableRows, handleChange}) {


    return(
        
        rowsData.map((data, index)=>{
            const {Item_Name, Item_Price, Quantity_In_Stock, Number_Sold}= data;
            return(

                <tr key={index}>
                <td><input type="text" value={Item_Name} onChange={(evnt)=>(handleChange(index, evnt))} name="Item_Name" className="form-control"/> </td>
                <td><input type="text" value={Item_Price}  onChange={(evnt)=>(handleChange(index, evnt))} name="Item_Price" className="form-control"/> </td>
                <td><input type="text" value={Quantity_In_Stock}  onChange={(evnt)=>(handleChange(index, evnt))} name="Quantity_In_Stock" className="form-control" /> </td>
                <td><input type="text" value={Number_Sold} onChange={(evnt)=>(handleChange(index, evnt))} name="Number_Sold" className="form-control"/> </td>
                {/*<td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>*/}
            </tr>

            )
        })
   
    )
    
}

export default ShopRows;