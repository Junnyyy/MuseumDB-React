import { React, useEffect, useInsertionEffect, useState } from "react";
import "./Shop.css";

const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

export default function GiftShop() {

    async function getArt(data) {
        return fetch("https://cst2-api.azurewebsites.net/storeitem", {
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
        fetch("https://cst2-api.azurewebsites.net/storeitem?_limit=10")
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
    const test = [{item_name: 'Test', item_price: '19.99', quantity_in_stock: '42',
                number_sold: '12'}]

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
        <h2>Gift Shop</h2>
        <table className="table table-striped">
            <tr className="bg-info">
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Sold</th>
            </tr>
            {test.map((val, key) => {
                return (
                    <tr key={key}>
                        <td>{val.item_name}</td>
                        <td>{val.item_price}</td>
                        <td>{val.quantity_in_stock}</td>
                        <td>{val.number_sold}</td>
                    </tr>
                )
            })}
            <tbody id ="shop">
    
            </tbody>
        </table>
    </div>
  );
}