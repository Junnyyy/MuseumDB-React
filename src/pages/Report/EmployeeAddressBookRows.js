import "./Report.css"

function EmployeeAddressBookRows({rowsData, deleteTableRows, handleChange}) {


    return(
        
        rowsData.map((data, index)=>{
            const {            Employee_ID,
            Employee_F_Name,
            Employee_M_Name,
            Employee_L_Name,
            Department_Name,
            Employee_Email}= data;
            return(

                <tr key={index}>
                <td><input type="text" value={Employee_ID}/> </td>
                <td><input type="text" value={Employee_F_Name}/> </td>
                <td><input type="text" value={Employee_M_Name}/> </td>
                <td><input type="text" value={Employee_L_Name}/> </td>
                <td><input type="text" value={Department_Name}/> </td>
                <td><input type="text" value={Employee_Email}/> </td>
            </tr>

            )
        })
   
    )
    
}

export default EmployeeAddressBookRows;