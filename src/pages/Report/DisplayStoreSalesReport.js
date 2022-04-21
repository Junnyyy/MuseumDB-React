import { useEffect, useState } from "react";
import StoreSalesReportRows from "./StoreSalesReportRows";
import "./Report.css";


function DisplayStoreSalesReport(){

    const getToken = () => {
        const tokenString = sessionStorage.getItem("token");
        const userToken = JSON.parse(tokenString);
        return userToken?.token;
      };

      const [salesData, setData] = useState([])

      const fetchData = () => {
          fetch("https://cst2-api.azurewebsites.net/StoreSalesReport", {
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
    
    console.log(salesData)

    const [rowsData, setRowsData] = useState([]);

    const addTableRows = ()=>{

        const rowsInput={
            Item_Name:'',
            ID:'',
            Number_Sold:'',
            Current_Month_Sales_Profit:''
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

    let ticketSum = 0;
    let profitSum = 0;
    for (var i = 0;i < salesData.length;i++)
    {
        ticketSum += parseInt(salesData[i].Number_Sold);
        profitSum += salesData[i].Current_Month_Sales_Profit;
    }

    return(
        <div className="container" >
            <div className="row">
                <div className="col-sm-8">
                <table className="table">
                    <thead>
                      <tr>
                          <th>Item Name</th>
                          <th>Item ID</th>
                          <th>Number Sold</th>
                          <th>Current Month Profit</th>
                      </tr>
                    </thead>
                   <tbody>
                   <StoreSalesReportRows rowsData={salesData} deleteTableRows={deleteTableRows} handleChange={handleChange} />
                   <tr>
                       <td className="total">Total</td>
                       <td></td>
                       <td className="total">{ticketSum}</td>
                       <td className="total">{profitSum}</td>
                   </tr>
                   </tbody> 
                </table>

                </div>

            </div>
        </div>
    )

}
export default DisplayStoreSalesReport