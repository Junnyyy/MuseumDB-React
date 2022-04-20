import { React, useEffect, useInsertionEffect, useState } from "react";
import "./Collection.css";

const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

export default function Collection() {

    async function getArt(data) {
        return fetch("https://cst2-api.azurewebsites.net/artpiece", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${getToken()}`,
          },
          mode: "cors",
          body: JSON.stringify(data),
        }).then((data) => data.json());
      }
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://cst2-api.azurewebsites.net/artpiece?_limit=10")
        .then((response) => 
        {
            if (!response.ok) {
                throw new Error('HTTP error: ${response.status}');
            }
            return response.json();
        })
        .then((actualData) => {
            setData(actualData);
            setError(null);
        })
        .catch((err) => {
            setError(err.message);
            setData(null);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);

    /*
    useEffect(() => {
        async function getData() {
            const actualData = await fetch("https://cst2-api.azurewebsites.net/artpiece?_limit=10")
            .then(response => response.json());
        
            console.log(actualData)
        }
        getData()
    }, [])
    */
    const test = [{title: 'Test', created: '2022-01-20', medium: 'Oil on canvas',
                firstname: 'Marcus', lastname: 'Aurelius', refurbishedstatus: '0',
                displaystatus: '1', culture: 'Italian', height: '', len: '35',
                width: '12', galLoc: 'Academia Gallery', EID: '20221'}]

            
    const [title, settitle] = useState();
    const [created, setcreated] = useState();
    const [medium, setmedium] = useState();
    const [firstname, setfirstname] = useState();
    const [lastname, setlastname] = useState();
    const [refurbishedstatus, setrefurbishedstatus] = useState();
    const [displaystatus, setdisplaystatus] = useState();
    const [culture, setculture] = useState();
    const [height, setheight] = useState();
    const [len, setlen] = useState();
    const [width, setwidth] = useState();
    const [galLoc, setgalLoc] = useState();
    const [EID, setEID] = useState();


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
            <tbody id ="collection">
    
            </tbody>
        </table>
    </div>
  );
}