import { useEffect, useState } from "react"
import "./modify.css"

function Gallery_Table({rowsData, deleteGallery_Table, handleChange}) {


    return(
        
        rowsData.map((data, index)=>{
            const {Gallery_Name, Managing_Department, Capacity}= data;
            return(

                <tr key={index}>
                <td><input type="text" value={Gallery_Name} onChange={(evnt)=>(handleChange(index, evnt))} name="Gallery_Name" className="form-control"/> </td>
                <td><input type="text" value={Managing_Department}  onChange={(evnt)=>(handleChange(index, evnt))} name="Managing_Department" className="form-control"/> </td>
                <td><input type="text" value={Capacity}  onChange={(evnt)=>(handleChange(index, evnt))} name="Capacity" className="form-control" /> </td>
                <td><button className="btn btn-outline-success" onClick={()=>(deleteGallery_Table(index))}>Edit</button></td>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteGallery_Table(index))}>Delete</button></td>
                
            </tr>

            )
        })
   
    )
    
}

export default Gallery_Table;