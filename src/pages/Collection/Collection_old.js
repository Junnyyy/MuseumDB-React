import { React, useEffect, useInsertionEffect, useState } from "react";
import "./Collection.css";

const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

export default function Collection() {

    async function artInsert(data) {
        return fetch("https://cst2-api.azurewebsites.net/artpiece", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${getToken()}`,
          },
          mode: "cors",
          //body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);



        <div>
        <br></br>
        <h2>Collection</h2>
        <table className="table table-striped">
            <tbody id ="collection">
            <tr className="bg-info">
                <th>Title</th>
                <th>Date_Created</th>
                <th>Medium</th>
                <th>Creator_First_Name</th>
                <th>Creator_Last_Name</th>
                <th>Display_Status</th>
                <th>Culture</th>
                <th>Height</th>
                <th>Length</th>
                <th>Width</th>
                <th>Gallery</th>
                <th>Exhibit</th>
            </tr>
            {data.map((val, key) => {
                return (
                    <tr key={key}>
                        <td>{val.title}</td>
                        <td>{val.created}</td>
                        <td>{val.medium}</td>
                        <td>{val.firstname}</td>
                        <td>{val.lastname}</td>
                        <td>{val.displaystatus}</td>
                        <td>{val.culture}</td>
                        <td>{val.height}</td>
                        <td>{val.len}</td>
                        <td>{val.width}</td>
                        <td>{val.galLoc}</td>
                        <td>{val.EID}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    </div>

          });
          

    /*
    buildTable(test)

    function buildTable(data) {
        var table = document.getElementById('Collection') 
                for (var i = 0; i < data.length; i++)
                {
                var row = `<tr>
                                <td>${data[i].title}</td>
                                <td>${data[i].created}</td>
                                <td>${data[i].medium}</td>
                                <td>${data[i].firstname}</td>
                                <td>${data[i].lastname}</td>
                                <td>${data[i].displaystatus}</td>
                                <td>${data[i].culture}</td>
                                <td>${data[i].height}</td>
                                <td>${data[i].len}</td>
                                <td>${data[i].width}</td>
                                <td>${data[i].galLoc}</td>
                                <td>${data[i].EID}</td>
                            </tr>`
                table.innerHTML += row
                }
    }
    */
    return (
    <div>
        <br></br>
        <h2>Collection</h2>
        <table className="table table-striped">
            <tbody id ="collection">
            <tr className="bg-info">
                <th>Title</th>
                <th>Date_Created</th>
                <th>Medium</th>
                <th>Creator_First_Name</th>
                <th>Creator_Last_Name</th>
                <th>Display_Status</th>
                <th>Culture</th>
                <th>Height</th>
                <th>Length</th>
                <th>Width</th>
                <th>Gallery</th>
                <th>Exhibit</th>
            </tr>
            {test.map((val, key) => {
                return (
                    <tr key={key}>
                        <td>{val.title}</td>
                        <td>{val.created}</td>
                        <td>{val.medium}</td>
                        <td>{val.firstname}</td>
                        <td>{val.lastname}</td>
                        <td>{val.displaystatus}</td>
                        <td>{val.culture}</td>
                        <td>{val.height}</td>
                        <td>{val.len}</td>
                        <td>{val.width}</td>
                        <td>{val.galLoc}</td>
                        <td>{val.EID}</td>
                    </tr>
                )
            })}
            
    
            </tbody>
        </table>
    </div>
    )
    }}