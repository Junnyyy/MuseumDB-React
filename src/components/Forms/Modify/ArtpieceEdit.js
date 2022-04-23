import React from 'react'
import "./modify.css";
const ArtpieceEdit = ({editFormData, handleEditFormChange, handleCancelClick}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          name="Art_Piece_Title"
          value = {editFormData.Art_Piece_Title}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          name="Date_Created"
          value = {editFormData.Date_Created}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          name="Medium"
          value = {editFormData.Medium}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          name="Creator_F_Name"
          value = {editFormData.Creator_F_Name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          name="Creator_L_Name"
          value = {editFormData.Creator_L_Name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          name="Being_Refurbished"
          value = {editFormData.Being_Refurbished}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          name="Culture"
          value = {editFormData.Culture}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          name="Piece_Height"
          value = {editFormData.Piece_Height}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          name="Piece_Length"
          value = {editFormData.Piece_Length}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          name="Piece_Width"
          value = {editFormData.Piece_Width}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          name="Gallery_Loc"
          value = {editFormData.Gallery_Loc}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          name="Exhibit_ID"
          value = {editFormData.Exhibit_ID}
          onChange={handleEditFormChange}
        ></input>
      </td>


      <td>
        <button className="btn btn-outline-success" type = "submit"> Submit</button>
      </td>
      <td>
        <button className="btn btn-outline-success" type = "button" onClick={handleCancelClick}> Cancel</button>
      </td>
      
      
    </tr>
  )
}

export default ArtpieceEdit