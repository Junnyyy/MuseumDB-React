import { useEffect, useState } from "react";
import ShopRows from "./ShopRows";
import "./Shop.css";


function DisplayShop(){

    const getToken = () => {
        const tokenString = sessionStorage.getItem("token");
        const userToken = JSON.parse(tokenString);
        return userToken?.token;
      };

      const [artData, setData] = useState([])

      const fetchData = () => {
          fetch("https://cst2-api.azurewebsites.net/storeitem", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${getToken()}`,
            },
            mode: "cors",
          })
          .then(response => {
              return response.json()
          })
          .then(data => {
              setData(data)
          })
      }

    useEffect(() => {
          fetchData()
      }, [])
    
    console.log(artData)

    const [rowsData, setRowsData] = useState([]);

    const addTableRows = ()=>{

        const rowsInput={
            Item_Name:'',
            Item_Price: '',
            Quantity_In_Stock:'',
            Number_Sold:''
        } 
        setRowsData([...rowsData, rowsInput])
    }

   const deleteTableRows = (index)=>
   {
        const rows = [...rowsData];
        rows.splice(index, 1);
        setRowsData(rows);
   }
 
   const handleChange = (index, evnt)=>
   {
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
    }

    return(
        <div className="container" >
            <div className="row">
                <div className="col-sm-8">
                <table className="table">
                    <thead>
                      <tr>
                          <th>Item Name</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Amount Sold</th>
                          {/*<th><button className="btn btn-outline-success" onClick={addTableRows} >+</button></th>*/}
                      </tr>
                    </thead>
                   <tbody>
                   <ShopRows rowsData={artData} deleteTableRows={deleteTableRows} handleChange={handleChange} />
                   {/*<TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />*/}
                   </tbody> 
                </table>

                </div>

            </div>
        </div>
    )

}
export default DisplayShop