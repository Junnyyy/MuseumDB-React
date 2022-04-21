import { useEffect, useState } from "react";
import TicketSalesReportRows from "./TicketSalesReportRows";
import "./Report.css";


function DisplayTicketSalesReport(){

    const getToken = () => {
        const tokenString = sessionStorage.getItem("token");
        const userToken = JSON.parse(tokenString);
        return userToken?.token;
      };

      const [salesData, setData] = useState([])

      const fetchData = () => {
          fetch("https://cst2-api.azurewebsites.net/TicketSalesReport", {
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
            Exhibit_Name:'',
            ID:'',
            Number_Tickets_Sold:'',
            Current_Month_Ticket_Profit:''
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

    let itemSum = 0;
    let profitSum = 0;
    for (var i = 0;i < salesData.length;i++)
    {
        itemSum += parseInt(salesData[i].Number_Tickets_Sold);
        profitSum += salesData[i].Current_Month_Ticket_Profit;
    }

    return(
        <div className="container" >
            <div className="row">
                <div className="col-sm-8">
                <table className="table">
                    <thead>
                      <tr>
                          <th>Exhibit Name</th>
                          <th>Exhibit ID</th>
                          <th>Number of Tickets Sold</th>
                          <th>Current Month Profit</th>
                      </tr>
                    </thead>
                   <tbody>
                   <TicketSalesReportRows rowsData={salesData} deleteTableRows={deleteTableRows} handleChange={handleChange} />

                   <tr>
                       <td className="total">Total</td>
                       <td></td>
                       <td className="total">{itemSum}</td>
                       <td className="total">{profitSum}</td>
                   </tr>
                   </tbody> 
                </table>

                </div>

            </div>
        </div>
    )

}
export default DisplayTicketSalesReport