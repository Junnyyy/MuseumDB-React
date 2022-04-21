import { useEffect, useState } from "react"
import "./modify.css"

function Artpiece_Table({rowsData, deleteArtpiece_Table, handleChange}) {


    return(
        
        rowsData.map((data, index)=>{
            const {Art_Piece_Title, Date_Created, Medium, Creator_F_Name, Creator_L_Name, Being_Refurbished, Culture,Piece_Height, Piece_Length, Piece_Width,Gallery_Loc, Exhibit_ID}= data;
            return(

                <tr key={index}>
                <td><input type="text" value={Art_Piece_Title} onChange={(evnt)=>(handleChange(index, evnt))} name="Art_Piece_Title" className="form-control"/> </td>
                <td><input type="text" value={Date_Created}  onChange={(evnt)=>(handleChange(index, evnt))} name="Date_Created" className="form-control"/> </td>
                <td><input type="text" value={Medium}  onChange={(evnt)=>(handleChange(index, evnt))} name="Medium" className="form-control" /> </td>
                <td><input type="text" value={Creator_F_Name} onChange={(evnt)=>(handleChange(index, evnt))} name="Creator_F_Name" className="form-control"/> </td>
                <td><input type="text" value={Creator_L_Name}  onChange={(evnt)=>(handleChange(index, evnt))} name="Creator_L_Name" className="form-control"/> </td>
                <td><input type="text" value={Being_Refurbished}  onChange={(evnt)=>(handleChange(index, evnt))} name="Being_Refurbished" className="form-control" /> </td>
                <td><input type="text" value={Culture} onChange={(evnt)=>(handleChange(index, evnt))} name="Culture" className="form-control"/> </td>
                <td><input type="text" value={Piece_Height}  onChange={(evnt)=>(handleChange(index, evnt))} name="Piece_Height" className="form-control"/> </td>
                <td><input type="text" value={Piece_Length}  onChange={(evnt)=>(handleChange(index, evnt))} name="Piece_Length" className="form-control" /> </td>
                <td><input type="text" value={Piece_Width} onChange={(evnt)=>(handleChange(index, evnt))} name="Piece_Width" className="form-control"/> </td>
                <td><input type="text" value={Gallery_Loc}  onChange={(evnt)=>(handleChange(index, evnt))} name="Gallery_Loc" className="form-control"/> </td>
                <td><input type="text" value={Exhibit_ID}  onChange={(evnt)=>(handleChange(index, evnt))} name="Exhibit_ID" className="form-control" /> </td>
                <td><button className="btn btn-outline-success" onClick={()=>(deleteArtpiece_Table(index))}>Edit</button></td>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteArtpiece_Table(index))}>Delete</button></td>
                
            </tr>

            )
        })
   
    )
    
}

export default Artpiece_Table;