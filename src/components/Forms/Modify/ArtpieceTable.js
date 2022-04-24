import React from "react";
// import "./modify.css";

const ArtpieceTable = ({ artdata, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{artdata.Art_Piece_Title}</td>
      <td>{artdata.Date_Created}</td>
      <td>{artdata.Medium}</td>
      <td>{artdata.Creator_F_Name}</td>
      <td>{artdata.Creator_L_Name}</td>
      <td>{artdata.Being_Refurbished}</td>
      <td>{artdata.Culture}</td>
      <td>{artdata.Piece_Height}</td>
      <td>{artdata.Piece_Length}</td>
      <td>{artdata.Piece_Width}</td>
      <td>{artdata.Gallery_Loc}</td>
      <td>{artdata.Exhibit_ID}</td>
      <td>
        <button
          className="btn btn-outline-success"
          onClick={(event) => handleEditClick(event, artdata)}
        >
          Edit
        </button>
      </td>
      <td>
        <button
          className="btn btn-outline-danger"
          onClick={(event) => handleDeleteClick(artdata.Art_Piece_Title)}
        >
          Delete
        </button>
      </td>
      {/* <td><button className="btn btn-outline-danger"  onClick={() => DeleteArtPiece(artdata.Art_Piece_Title)} >Delete</button></td> */}
    </tr>
  );
};

export default ArtpieceTable;
