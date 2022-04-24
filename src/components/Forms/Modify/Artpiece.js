import { useEffect, useState } from "react";
import Artpiece_Table from "./ArtpieceTable";
import ArtpieceEdit from "./ArtpieceEdit";
// import "./modify.css";
import { Fragment } from "react";
import React, { Component } from "react";

function ArtPieceTable() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const fetchData = () => {
    fetch("https://cst2-api.azurewebsites.net/artpiece", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getToken()}`,
      },
      mode: "cors",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setartData(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const DeleteArtPiece = (Art_Piece_Title) => {
  //   fetch(`https://cst2-api.azurewebsites.net/artpiece/${Art_Piece_Title}`, {
  //     method: 'Delete'
  //   })
  //   .then((result) => {
  //     result.json().then((resp) => {
  //       console.warn(resp)

  //     })
  //   })

  // }

  const [artData, setartData] = useState([]);
  const [editartID, setEditartID] = useState(null);

  const [editFormData, setEditFormData] = useState({
    Art_Piece_Title: " ",
    Date_Created: " ",
    Medium: " ",
    Creator_F_Name: " ",
    Creator_L_Name: " ",
    Being_Refurbished: " ",
    Culture: " ",
    Piece_Height: " ",
    Piece_Length: " ",
    Piece_Width: " ",
    Gallery_Loc: " ",
    Exhibit_ID: " ",
  });

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedartdata = {
      Art_Piece_Title: editFormData.Art_Piece_Title,
      Date_Created: editFormData.Date_Created,
      Medium: editFormData.Medium,
      Creator_F_Name: editFormData.Creator_F_Name,
      Creator_L_Name: editFormData.Creator_L_Name,
      Being_Refurbished: editFormData.Being_Refurbished,
      Culture: editFormData.Culture,
      Piece_Height: editFormData.Piece_Height,
      Piece_Length: editFormData.Piece_Length,
      Piece_Width: editFormData.Piece_Width,
      Gallery_Loc: editFormData.Gallery_Loc,
      Exhibit_ID: editFormData.Exhibit_ID,
    };

    const newartData = [...artData];

    const index = artData.findIndex((artdata) => artdata.id === editartID);

    newartData[index] = editedartdata;

    setEditartID(newartData);
    setEditartID(null);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditClick = (event, artdata) => {
    event.preventDefault();
    setEditartID(artdata.Art_Piece_Title);

    const FormValues = {
      Art_Piece_Title: artdata.Art_Piece_Title,
      Date_Created: artdata.Date_Created,
      Medium: artdata.Medium,
      Creator_F_Name: artdata.Creator_F_Name,
      Creator_L_Name: artdata.Creator_L_Name,
      Being_Refurbished: artdata.Being_Refurbished,
      Culture: artdata.Culture,
      Piece_Height: artdata.Piece_Height,
      Piece_Length: artdata.Piece_Length,
      Piece_Width: artdata.Piece_Width,
      Gallery_Loc: artdata.Gallery_Loc,
      Exhibit_ID: artdata.Exhibit_ID,
    };

    setEditFormData(FormValues);
  };

  const handleCancelClick = () => {
    setEditartID(null);
  };

  const handleDeleteClick = (artdataID) => {
    const newartData = [...artData];

    const index = artData.findIndex(
      (artdata) => artdata.Art_Piece_Title === artdataID
    );

    newartData.splice(index, 1);

    setartData(newartData);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <form onSubmit={handleEditFormSubmit}>
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Date Created</th>
                  <th>Medium</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Refurbished</th>
                  <th>Culture</th>
                  <th>Height</th>
                  <th>Length</th>
                  <th>Width</th>
                  <th>Gallery</th>
                  <th>Exhibit ID</th>
                  <th>Action </th>
                </tr>
              </thead>
              <tbody>
                {artData.map((artdata) => (
                  <Fragment>
                    {editartID === artdata.Art_Piece_Title ? (
                      <ArtpieceEdit
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <Artpiece_Table
                        artdata={artdata}
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}
                      />
                    )}
                  </Fragment>
                ))}

                {/* <Artpiece_Table
                rowsData={artData}
                deleteArtpiece_Table={deleteArtpiece_Table}
                handleChange={handleChange}
              />
              <Artpiece_Table
                rowsData={rowsData}
                editArtpiece_Table={editArtpiece_Table}
                handleChange={handleChange}
              /> */}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ArtPieceTable;
